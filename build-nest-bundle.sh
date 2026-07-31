#!/bin/bash
set -e
APP_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$APP_DIR"

echo "Building Nest Lightweight ESM bundle..."

# Use esbuild via npx (needs npm install of esbuild)
if [ ! -d node_modules/esbuild ]; then
  /opt/homebrew/bin/npm install esbuild --save-dev
fi

# Entry point for lightweight app - simple wrapper that exports static HTML string
cat > nest-lightweight-entry.js <<'JS'
import html from "./out/index.html" with { type: "text" };
// Fallback for older: read via fs if import with type fails in bundle
export default {
  async fetch(req) {
    // Simple response with the built index.html
    return new Response(html, { headers: { "content-type": "text/html; charset=utf-8" } });
  }
};
// For compat with nest-lightweight expecting default export function
export function render() {
  return html;
}
JS

# If out/index.html doesn't exist, build first
if [ ! -f out/index.html ]; then
  /opt/homebrew/bin/npm run build
fi

# Bundle with esbuild to single ESM
npx esbuild nest-lightweight-entry.js --bundle --format=esm --outfile=nest-bundle.mjs --platform=browser --loader:.html=text --minify

echo "Bundle created at $APP_DIR/nest-bundle.mjs size $(du -h nest-bundle.mjs | cut -f1)"
echo ""
echo "To publish to Nest Lightweight platform (from devserver, not laptop):"
echo "  meta nest-lightweight.app create --name drug-effects-explorer --bundle-file=file://$APP_DIR/nest-bundle.mjs --source-commit=\$(hg id -i) --title='Substance Effects Archive' --description='Educational drug effects + interaction mixer' --oncall=nest"
echo ""
echo "Note: This command is disabled on laptops per Meta CLI warning. Run from a devserver with auth."
