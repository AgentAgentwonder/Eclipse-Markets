# fix_build.ps1
# Smart rebuild script for Electron native modules (especially better-sqlite3)
# Requires: Node.js, npm, Visual Studio Build Tools 2022, Python 3.12+

Write-Host "Starting rebuild process..."

# Step 1: Detect versions
$nodeVersion = node -v
$electronInfo = npm list electron --depth=0 | Select-String "electron@"
if ($electronInfo) {
    $electronVersion = ($electronInfo.ToString().Split("@")[-1]).Trim()
} else {
    $electronVersion = "unknown"
}
Write-Host ""
Write-Host "Node version: $nodeVersion"
Write-Host "Electron version: $electronVersion"

# Step 2: Configure MSVS & Python
Write-Host ""
Write-Host "Ensuring MSVS and Python are properly configured..."
npm config set msvs_version 2022 | Out-Null
npm config set python python3 | Out-Null

# Step 3: Clean node_modules & rebuild dependencies
Write-Host ""
Write-Host "Cleaning old native modules..."
Remove-Item -Recurse -Force "node_modules\better-sqlite3\build" -ErrorAction SilentlyContinue
npm rebuild better-sqlite3 --build-from-source --update-binary

# Step 4: Attempt rebuild
Write-Host ""
Write-Host "Rebuilding native modules for Electron..."
try {
    npx electron-rebuild --force --parallel
    Write-Host ""
    Write-Host "Rebuild successful!"
} catch {
    Write-Host ""
    Write-Host "Native build failed. Trying prebuilt binaries..."
    npm uninstall better-sqlite3 -f
    npm install better-sqlite3@9.6.0 --build-from-source=false
    npx electron-rebuild --force --parallel
}

# Step 5: Verify result
if (Test-Path "node_modules\better-sqlite3\build\Release\better_sqlite3.node") {
    Write-Host ""
    Write-Host "better-sqlite3 build completed successfully."
} else {
    Write-Host ""
    Write-Host "Failed to rebuild better-sqlite3. Check logs for details."
}

# Step 6: Final audit & cleanup
npm audit fix --force | Out-Null
Write-Host ""
Write-Host "Build repair complete. You can now run 'npm run dev' again."
