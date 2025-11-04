# Qixel CLI Deployment Script (PowerShell)
# Run this script to publish the CLI to npm

Write-Host "🚀 Qixel CLI Deployment Script" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Check if logged in to npm
Write-Host "Step 1: Checking npm login status..." -ForegroundColor Yellow
$npmUser = npm whoami 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Not logged in to npm!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please run: npm login" -ForegroundColor Yellow
    Write-Host "Then run this script again." -ForegroundColor Yellow
    exit 1
}

Write-Host "✅ Logged in as: $npmUser" -ForegroundColor Green
Write-Host ""

# Step 2: Build the package
Write-Host "Step 2: Building the package..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed!" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Build successful!" -ForegroundColor Green
Write-Host ""

# Step 3: Show package info
Write-Host "Step 3: Package Information" -ForegroundColor Yellow
$packageJson = Get-Content package.json | ConvertFrom-Json
$packageName = $packageJson.name
$packageVersion = $packageJson.version

Write-Host "  Name: $packageName" -ForegroundColor Cyan
Write-Host "  Version: $packageVersion" -ForegroundColor Cyan
Write-Host ""

# Step 4: Confirm publish
Write-Host "Ready to publish to npm!" -ForegroundColor Yellow
$confirmation = Read-Host "Continue? (y/n)"
if ($confirmation -ne 'y') {
    Write-Host "❌ Deployment cancelled." -ForegroundColor Red
    exit 0
}
Write-Host ""

# Step 5: Publish to npm
Write-Host "Step 4: Publishing to npm..." -ForegroundColor Yellow
npm publish --access public
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Publish failed!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Common issues:" -ForegroundColor Yellow
    Write-Host "  - Package name already taken (try changing name in package.json)" -ForegroundColor Gray
    Write-Host "  - Version already published (bump version in package.json)" -ForegroundColor Gray
    Write-Host "  - Not logged in (run: npm login)" -ForegroundColor Gray
    exit 1
}

Write-Host ""
Write-Host "🎉 SUCCESS! Package published to npm!" -ForegroundColor Green
Write-Host ""
Write-Host "Your package is now live at:" -ForegroundColor Cyan
Write-Host "  https://www.npmjs.com/package/$packageName" -ForegroundColor Blue
Write-Host ""
Write-Host "Anyone can now install it with:" -ForegroundColor Cyan
Write-Host "  npm install -g $packageName" -ForegroundColor White
Write-Host "  npx $packageName --help" -ForegroundColor White
Write-Host ""
Write-Host "Test it yourself:" -ForegroundColor Yellow
Write-Host "  npx $packageName list" -ForegroundColor White
Write-Host ""

