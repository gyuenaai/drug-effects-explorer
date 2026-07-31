#!/usr/bin/env python3
"""
Drug Effects Explorer - Persistent static server for 3+ days hosting.

Serves the `out/` folder built by Next.js export.
Includes:
 - auto-restart watchdog
 - request logging
 - health endpoint
 - designed for Nest / any static host

Usage:
  python3 server.py [--port 3000] [--dir out]
  nohup python3 server.py > server.log 2>&1 &
"""

import argparse
import http.server
import socketserver
import os
import sys
import time
import threading
from datetime import datetime, timedelta

class LoggingHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        sys.stdout.write(f"{self.address_string()} - - [{self.log_date_time_string()}] {format % args}\n")
        sys.stdout.flush()

    def end_headers(self):
        # security / caching headers for educational content
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        # CORS for embed if needed
        self.send_header("Access-Control-Allow-Origin", "*")
        super().end_headers()

    def do_GET(self):
        # health endpoint
        if self.path == "/health":
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(b'{"status":"ok","service":"drug-effects-explorer","uptime":"running"}')
            return
        if self.path == "/":
            self.path = "/index.html"
        # fallback for SPA? serve index.html for unknown routes if 404 file not exists
        return super().do_GET()

def run_server(port: int, directory: str):
    os.chdir(directory)
    # verify index.html exists
    if not os.path.exists("index.html"):
        # try out/
        if os.path.exists("out/index.html"):
            os.chdir("out")
        elif os.path.exists("../out/index.html"):
            os.chdir("../out")
    handler = LoggingHTTPRequestHandler
    # allow reuse
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", port), handler) as httpd:
        print(f"[{datetime.now().isoformat()}] Serving drug-effects-explorer on port {port} dir {os.getcwd()}")
        print(f"[{datetime.now().isoformat()}] Health at http://localhost:{port}/health")
        print(f"[{datetime.now().isoformat()}] Designed to run >=3 days. Use nohup or systemd.")
        sys.stdout.flush()
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("Shutting down")
            httpd.shutdown()

def watchdog(port: int, directory: str, max_days: int = 4):
    """Watchdog that ensures process stays up to max_days."""
    start = datetime.now()
    end = start + timedelta(days=max_days)
    print(f"[watchdog] Started at {start}, will keep alive until {end} ({max_days} days)")
    while datetime.now() < end:
        time.sleep(60)
        # could add health check file writing
        with open(os.path.join(directory, "..", "heartbeat.log") if os.path.exists(os.path.join(directory, "..")) else "heartbeat.log", "a") as f:
            f.write(f"{datetime.now().isoformat()} alive up to {end.isoformat()}\n")
    print(f"[watchdog] Reached end time {end}, exiting watchdog.")

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--port", type=int, default=3000)
    parser.add_argument("--dir", type=str, default="out")
    parser.add_argument("--run-days", type=int, default=4, help="How many days to keep watchdog writing heartbeat")
    args = parser.parse_args()

    # choose serve dir
    serve_dir = args.dir
    if not os.path.isabs(serve_dir):
        serve_dir = os.path.join(os.getcwd(), serve_dir)
    if not os.path.exists(serve_dir):
        # fallback to current
        serve_dir = os.getcwd()
    # ensure out exists logic inside run_server does cd
    # start watchdog thread
    t = threading.Thread(target=watchdog, args=(args.port, serve_dir, args.run_days), daemon=True)
    t.start()

    # retry loop for resilience - 3 days hosting requires auto restart on exception
    while True:
        try:
            run_server(args.port, serve_dir)
        except Exception as e:
            print(f"[{datetime.now().isoformat()}] Server crashed: {e}, restarting in 3s...", file=sys.stderr)
            time.sleep(3)
            continue
        break
