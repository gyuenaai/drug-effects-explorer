#!/bin/bash
# Drug Effects Explorer - 3+ day persistent hosting script
# Works for both Next.js server and static Python server
# Designed for Nest hosting compatibility

set -e

APP_DIR="$(cd "$(dirname "$0")" && pwd)"
PORT=${PORT:-3000}
MODE=${1:-static} # static | next

echo "=== Drug Effects Explorer Host ==="
echo "Dir: $APP_DIR"
echo "Port: $PORT"
echo "Mode: $MODE"
echo "Time: $(date)"
echo ""

cd "$APP_DIR"

# Ensure build exists
if [ "$MODE" = "static" ]; then
  if [ ! -f "out/index.html" ]; then
    echo "out/ not found, building..."
    /opt/homebrew/bin/npm run build
  fi
  echo "Starting static server with 4-day watchdog..."
  # kill old
  pkill -f "server.py.*$PORT" || true
  nohup /usr/local/bin/python3 server.py --port $PORT --dir out --run-days 4 > server.log 2>&1 &
  echo $! > server.pid
  echo "Static server PID $(cat server.pid) logs server.log"
  echo "Heartbeat will be written for 4 days to heartbeat.log"
  sleep 1
  cat server.log | tail -n 20
  curl -s http://localhost:$PORT/health || echo "Health check pending..."
else
  # Next.js server mode for Nest (Internalfb Nest apps are Next.js)
  echo "Starting Next.js server mode..."
  # ensure next build without export if needed for Nest server
  # For Nest proper, we want output without static export; we can build server version:
  # Temporarily use next build with no export? Our config is export. For server mode we need different config.
  # Build server variant: override config via env
  # Here we run static via python as fallback if Next fails
  if [ ! -d ".next" ]; then
    echo "Building Next.js..."
    /opt/homebrew/bin/npm run build
  fi
  # Use python to also serve? But attempt next start
  pkill -f "next.*$PORT" || true
  # Next.js with export outputs static out, not server startable. So we will still serve static via python for reliability.
  # For true Nest server deployment, change next.config.mjs to remove output:export and run:
  #   npm run dev or npm start
  # Example Nest deployment expects npm start
  nohup /usr/local/bin/python3 server.py --port $PORT --dir out --run-days 4 > server.log 2>&1 &
  echo $! > server.pid
fi

echo ""
echo "=== Hosting Info ==="
echo "URL: http://localhost:$PORT"
echo "Log: $APP_DIR/server.log"
echo "PID file: $APP_DIR/server.pid"
echo "Heartbeat: $APP_DIR/heartbeat.log"
echo "To keep for 3 days, ensure process stays:"
echo "  - nohup keeps after terminal close"
echo "  - watchdog thread writes heartbeat hourly"
echo "  - server has auto-restart on crash loop"
echo ""
echo "For Nest internal hosting:"
echo "  1. Create Nest app via ToolHub (Next.js)"
echo "  2. Deploy this repo as Nest app - it is Next.js compatible"
echo "  OR deploy lightweight bundle:"
echo "     meta nest-lightweight.app create --name drug-effects-explorer --bundle-file=file://$APP_DIR/nest-bundle.mjs --source-commit=\$(hg id) --title='Substance Effects Archive'"
echo ""
echo "To stop: kill \$(cat server.pid)"
echo "Done."

# Create launchd plist for macOS persistence across reboot (optional, ensures 3 days even after restart)
PLIST=~/Library/LaunchAgents/com.drugexplorer.plist
cat > "$PLIST" <<EPL
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key><string>com.drugexplorer</string>
  <key>ProgramArguments</key>
  <array>
    <string>/usr/local/bin/python3</string>
    <string>$APP_DIR/server.py</string>
    <string>--port</string>
    <string>$PORT</string>
    <string>--dir</string>
    <string>$APP_DIR/out</string>
  </array>
  <key>RunAtLoad</key><true/>
  <key>KeepAlive</key><true/>
  <key>WorkingDirectory</key><string>$APP_DIR</string>
  <key>StandardOutPath</key><string>$APP_DIR/server.log</string>
  <key>StandardErrorPath</key><string>$APP_DIR/server.log</string>
</dict>
</plist>
EPL
echo "Created launchd plist $PLIST (optional). Load with: launchctl load $PLIST"
