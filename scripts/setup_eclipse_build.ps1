# One-click setup for build on Windows 11
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser -Force

# Check Node
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
  Write-Host "Node is not installed. Please install Node LTS (20.x) or use nvm." -ForegroundColor Yellow
  Pause
  exit 1
}

# Install deps
Write-Host "Running npm install..."
npm install

# Build renderer and package
Write-Host "Building and packaging... This may take a while."
npm run build
Write-Host "Done. Check the dist_electron/ folder for artifacts."
