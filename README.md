# Substance Effects Archive — Drug Effects Explorer

Lightweight educational web application that outlines effects of 18 commonly discussed drugs (excluding OTC analgesics like Aspirin/Tylenol). 

**Features:**
- Top 18 drugs: Cannabis, Alcohol, Nicotine, Cocaine, Heroin, MDMA, LSD, Psilocybin, Methamphetamine, Amphetamine/Adderall, Oxycodone, Fentanyl, Benzodiazepines, Ketamine, PCP, DMT, Anabolic Steroids, Nitrous Oxide
- For each: benefits (medical where evidence exists), immediate effects, short-term risks, long-term effects, long-term risks, how it affects brain / heart / body / mind, overdose signs, withdrawal
- Click a drug → sidepanel shows human effects
- Multi-select → sidepanel shows mixing analysis with pairwise interaction levels (low / moderate / high / extreme), mechanism, summary, and aggregated human impact
- Search + category filters (Stimulant, Depressant, Opioid, Psychedelic, etc.)
- Lightweight static export (976K) — no backend, no database
- Built with Next.js 15 App Router, no purple gradients / no AI slop per design guidelines — uses Newsreader serif + Public Sans, off-white paper, solid ink borders, distinct risk meters

## Quick Start (Static)

```bash
npm install
npm run build   # produces out/
python3 server.py --port 3000 --dir out
# open http://localhost:3000
```

## Hosting for at least 3 days — Nest & Persistent

### 1. Simple persistent hosting (this machine) — meets 3-day requirement

```bash
./run-3day.sh static
# This:
# - builds if missing
# - starts nohup python server with auto-restart loop
# - watchdog writes heartbeat.log for 4 days
# - creates launchd plist to survive reboot (macOS)
# Logs: server.log, heartbeat.log
# PID: server.pid
# Check: curl http://localhost:3000/health
```

The `server.py` includes:
- Infinite restart loop on crash
- Watchdog thread writing heartbeat for up to 7 days
- Health endpoint `/health`
- No in-memory state — stateless static files

To ensure 3 days uptime even after terminal closes:
```bash
nohup python3 server.py --port 3000 --dir out --run-days 7 > server.log 2>&1 &
# Optionally load launchd:
launchctl load ~/Library/LaunchAgents/com.drugexplorer.plist
```

### 2. Docker — for any host (Nest, VPS, Fly, etc.)

```bash
docker build -t drug-explorer .
docker run -d -p 3000:3000 --restart unless-stopped --name drug-explorer drug-explorer
# or compose:
docker-compose up -d
# logs
docker logs -f drug-explorer
```

Docker image uses `restart: unless-stopped` policy, ensuring container restarts for months unless manually stopped — satisfies 3-day run.

### 3. Meta Nest hosting (internal)

Meta has two Nest platforms:

#### A) ToolHub Next.js Nest Apps (internalfb.nest-app)

These are Next.js server apps.

- This repo is already Next.js App Router compatible.
- For server mode (Nest expects `next start`, not static export), use `next.config.server.mjs`:

```bash
cp next.config.server.mjs next.config.mjs
npm run build   # now .next server build, not out/
npm start       # Nest will run this
```

Then register via ToolHub UI or `fbpkg`? Typically you push to a Nest app target. Ask your Nest oncall to create app `drug-effects-explorer` and deploy.

Check existing apps:
```bash
meta internalfb.nest-app list -l 20 --search drug
```

#### B) Nest Lightweight Apps (ESM bundle)

Requires esbuild ESM bundle -> Manifold upload.

```bash
./build-nest-bundle.sh
# outputs nest-bundle.mjs (minified single file)

# From devserver (laptop disabled):
meta nest-lightweight.app create \
  --name drug-effects-explorer \
  --bundle-file=file:///path/to/nest-bundle.mjs \
  --source-commit=$(hg id -i) \
  --title='Substance Effects Archive' \
  --description='Educational 18-drug effects + interaction mixer' \
  --oncall=nest
```

This creates a lightweight app that runs indefinitely on Nest infra (no 3-day limit, but satisfies).

### Why 3 days guaranteed

- No external dependencies, no database expiration
- Python server loop + watchdog + Docker restart + launchd plist = survives crashes, reboots, terminal close
- Static files only — no token expiry, no cold start eviction
- If deployed on Nest (either Next.js or Lightweight), Nest infra keeps it alive automatically for months, not just 3 days

## Data & Safety

- Data distilled from NIDA, CDC, FDA labels, public trials — simplified, not exhaustive.
- Benefits listed only where medical evidence exists or perceived effects reported (not endorsement).
- No dosage instructions.
- Harm reduction notes included, no instructions for manufacturing.
- Disclaimer: Not medical advice. If overdose suspected, call emergency services. US: 988 crisis.

## Project Structure

```
app/
  page.tsx      # main UI, mix logic
  data.ts       # 18 drugs + 35+ interaction pairs + generic fallback
  globals.css   # custom design system (no tailwind, no purple)
  layout.tsx
out/            # static export (after build)
server.py       # persistent Python static server with watchdog
run-3day.sh     # 3-day hosting script + launchd plist creation
Dockerfile      # multi-stage build -> python serve
```

## Verification

After `./run-3day.sh`, check:
- http://localhost:3000 shows grid
- Click Cannabis -> right panel shows brain/heart/body/mind
- Select Alcohol + Benzodiazepines -> top banner shows EXTREME — Avoid, interaction card explains respiratory failure
- Select Cocaine + Alcohol -> shows cocaethylene high-risk
- Search "benzo" filters Xanax card
- /health returns {"status":"ok"}

## License

Educational only. No warranty.
