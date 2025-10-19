# publish_release.ps1
# PowerShell helper to build and publish a release locally.
# Usage:
#   $env:GH_TOKEN = "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"
#   ./publish_release.ps1 -Version v1.0.0

param (
  [Parameter(Mandatory = $true)]
  [string]$Version
)

Write-Host "=== Building and publishing version $Version ==="

# Step 1: Update version in package.json (without git tag)
npm version $Version --no-git-tag-version

# Step 2: Clean install dependencies
npm ci

# Step 3: Build the app (both renderer and Electron)
npm run build

# Step 4: Ensure GH_TOKEN is available
if (-not $Env:GH_TOKEN) {
  Write-Error "Error: GH_TOKEN environment variable not set. Set it first using:`n`$env:GH_TOKEN='ghp_xxx'"
  exit 1
}

# Step 5: Publish with electron-builder
npx electron-builder --win nsis --publish always

Write-Host ""
Write-Host "============================================================="
Write-Host "SUCCESS: Version $Version has been built and published."
Write-Host "Check your GitHub Releases page for uploaded artifacts."
Write-Host "============================================================="
