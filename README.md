# Eclipse Market Trading — Full Feature Scaffold (Private)

This scaffold includes the full feature set requested:
- safeStorage vault + secure-config UI
- Auto-rotate key skeleton + rotator service & provider adapters
- RPC fallback manager + latency benchmarker
- Tray menu + auto-launch toggle
- Interactive passphrase / Vault unlock modal
- Diagnostics page and health checks
- Strategy engine skeleton + example strategy
- Export/import encrypted vault
- Auto-build / dev setup PowerShell scripts for Windows 11
- No real secrets included. Use `.env` locally with your keys.

## Quick start (Windows)
1. Extract the ZIP to `C:\Projects\eclipse_market_trading_full_features`.
2. Create `.env` from `.env.example` and paste your private tokens (do not commit).
3. Recommended: install Node 20 via nvm for easiest native binary support, or ensure VS Build Tools + Python 3.12 are installed.
4. In the chosen folder run:
   ```bash
   npm install
   npm run dev
   ```
5. Open the app and go to Settings → Vault to paste keys or use `.env`.

## Scripts
- `npm run dev` - starts Vite + Electron in dev
- `npm run build` - builds renderer and packages windows installer (requires setup)

## Security
- This scaffold never includes real tokens. Add them locally to `.env` or Vault.
- All secrets saved via the UI are encrypted with Electron `safeStorage`.
"# Eclipse-Markets" 
"# Eclipse-Markets" 
