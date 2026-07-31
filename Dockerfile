FROM node:22-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install --frozen-lockfile || npm install
COPY . .
RUN npm run build

FROM python:3.12-slim AS runner
WORKDIR /app
COPY --from=builder /app/out ./out
COPY server.py ./server.py
RUN chmod +x server.py
# Health
EXPOSE 3000
# Ensure 3-day runtime: no auto exit
HEALTHCHECK --interval=30s --timeout=5s --retries=3 CMD python3 -c "import urllib.request; urllib.request.urlopen('http://localhost:3000/health').read()" || exit 1
CMD ["python3", "server.py", "--port", "3000", "--dir", "out", "--run-days", "7"]
