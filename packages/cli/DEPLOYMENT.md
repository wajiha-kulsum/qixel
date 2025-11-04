# 🚀 Quick Deployment Guide

## Prerequisites

1. ✅ Make sure you're logged into npm:
   ```bash
   npm login
   ```

2. ✅ Make sure you're in the CLI directory:
   ```bash
   cd packages/cli
   ```

---

## Option 1: Using the Deployment Script (Recommended)

### On Windows (PowerShell):
```powershell
.\deploy.ps1
```

### On Mac/Linux:
```bash
chmod +x deploy.sh
./deploy.sh
```

The script will:
- ✅ Check if you're logged in
- ✅ Build the package
- ✅ Show package info
- ✅ Ask for confirmation
- ✅ Publish to npm
- ✅ Give you the npm link

---

## Option 2: Manual Deployment

If the script doesn't work, run these commands manually:

```bash
# 1. Make sure you're logged in
npm whoami

# 2. Build the package
npm run build

# 3. Publish to npm
npm publish --access public
```

---

## After Publishing

Your package will be live at:
```
https://www.npmjs.com/package/@qixel/cli
```

Anyone can install it:
```bash
# Global install
npm install -g @qixel/cli

# Or use with npx
npx @qixel/cli list
npx @qixel/cli add magnetic-button
```

---

## Updating the Package

When you make changes:

1. **Update the version** in `package.json`:
   ```json
   "version": "0.1.1"  // or 0.2.0, 1.0.0, etc.
   ```

2. **Run the deployment script again**:
   ```bash
   .\deploy.ps1
   ```

---

## Troubleshooting

### Error: "Package name already taken"
Change the package name in `package.json`:
- `@qixel/cli` → `@your-username/qixel-cli`
- Or use an unscoped name: `qixel-cli-your-name`

### Error: "Not logged in"
Run `npm login` and complete authentication

### Error: "Version already published"
Bump the version in `package.json` (e.g., 0.1.0 → 0.1.1)

### Script won't run (PowerShell)
Enable script execution:
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

---

## Need Help?

- npm documentation: https://docs.npmjs.com/
- Check package status: https://www.npmjs.com/package/@qixel/cli
- GitHub issues: https://github.com/wajiha-kulsum/qixel/issues

