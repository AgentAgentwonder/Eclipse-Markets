# Quick diagnostics runner - checks Node, Python, and samples
Write-Host "Node version:"; node -v
Write-Host "NPM version:"; npm -v
Write-Host "Python version:"; python --version
Write-Host "Checking Visual Studio Build Tools via vswhere..."
if (Test-Path "${env:ProgramFiles(x86)}\Microsoft Visual Studio\Installer\vswhere.exe") { & "${env:ProgramFiles(x86)}\Microsoft Visual Studio\Installer\vswhere.exe" -latest -products * -property installationPath } else { Write-Host "vswhere not found" }
