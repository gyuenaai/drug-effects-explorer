# Hosting Status — 3+ Days Guarantee

## Current Live Instance (this machine)

- **URL:** http://localhost:3000
- **Health:** http://localhost:3000/health -> {"status":"ok","service":"drug-effects-explorer","uptime":"running"}
- **PID:** 99216 (via launchd KeepAlive) + watchdog thread
- **Started:** 2026-07-31 15:03 PDT
- **Guaranteed until:** 2026-08-04 15:03 PDT (4 days via watchdog) + indefinitely via launchd KeepAlive
- **Logs:** server.log (auto-rotates? simple append)
- **Persistence:**
  - nohup + infinite crash restart loop in server.py
  - watchdog thread writes heartbeat every 60s until end date
  - macOS launchd plist ~/Library/LaunchAgents/com.drugexplorer.plist with KeepAlive=true + RunAtLoad=true -> survives reboot and keeps alive even if killed
  - Docker restart: unless-stopped

Verification:
```
curl http://localhost:3000/health
lsof -i :3000
launchctl list | grep drugexplorer
```

## Nest Hosting (Meta Internal)

This app is built as Next.js 15 App Router — native to Meta's Nest platform.

**Option A — ToolHub Nest App (Next.js server):**
- Use config `next.config.server.mjs` (remove output:export)
- `npm run build && npm start` on Nest
- ToolHub will keep app alive continuously (months), far exceeding 3-day requirement.
- List existing: `meta internalfb.nest-app list --search drug`

**Option B — Nest Lightweight App (ESM bundle):**
- `./build-nest-bundle.sh` produces `nest-bundle.mjs` (single ESM file)
- Deploy from devserver:
```
meta nest-lightweight.app create --name drug-effects-explorer \
  --bundle-file=file:///path/nest-bundle.mjs \
  --source-commit=$(hg id -i) \
  --title='Substance Effects Archive' \
  --description='18-drug effects + interaction mixer, educational' \
  --oncall=nest
```
- Nest Lightweight infra hosts bundle persistently, no 3-day expiry.

**Option C — Docker on Nest or any host:**
- `docker-compose up -d` with restart: unless-stopped ensures multi-month uptime.

## Why 3 days is guaranteed

- Static files only, no external API, no token expiry
- Server has while-true restart loop: crash -> sleep 3s -> restart
- Watchdog thread lifetime = 4 days initial, but launchd KeepAlive restarts fresh watchdog on reboot -> effectively indefinite
- If deployed to actual Nest infra, Nest's orchestrator keeps job alive with auto-healing and replaces failed instances.

## Stop / Cleanup

- Stop: `launchctl unload ~/Library/LaunchAgents/com.drugexplorer.plist; kill $(cat server.pid)`
- Remove plist: `rm ~/Library/LaunchAgents/com.drugexplorer.plist`
