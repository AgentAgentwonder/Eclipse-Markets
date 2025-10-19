# One-click setup for development on Windows 11
# - Installs Node (if missing), Python & VS Build Tools (optional), sets ExecutionPolicy
# - Runs npm install and npm run dev
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser -Force

# Check Node
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
  Write-Host "Node is not installed. Please install Node LTS (20.x) or run nvm and try again." -ForegroundColor Yellow
  Pause
  exit 1
}

# Install npm deps
Write-Host "Running npm install..."
npm install

Write-Host "Starting dev server (Vite + Electron)..."
npm run dev
