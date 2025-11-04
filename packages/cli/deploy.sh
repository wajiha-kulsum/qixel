#!/bin/bash
# Qixel CLI Deployment Script (Bash)
# Run this script to publish the CLI to npm

echo "🚀 Qixel CLI Deployment Script"
echo "================================"
echo ""

# Step 1: Check if logged in to npm
echo "Step 1: Checking npm login status..."
npm_user=$(npm whoami 2>&1)
if [ $? -ne 0 ]; then
    echo "❌ Not logged in to npm!"
    echo ""
    echo "Please run: npm login"
    echo "Then run this script again."
    exit 1
fi

echo "✅ Logged in as: $npm_user"
echo ""

# Step 2: Build the package
echo "Step 2: Building the package..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi
echo "✅ Build successful!"
echo ""

# Step 3: Show package info
echo "Step 3: Package Information"
package_name=$(node -p "require('./package.json').name")
package_version=$(node -p "require('./package.json').version")

echo "  Name: $package_name"
echo "  Version: $package_version"
echo ""

# Step 4: Confirm publish
echo "Ready to publish to npm!"
read -p "Continue? (y/n) " -n 1 -r
echo ""
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Deployment cancelled."
    exit 0
fi
echo ""

# Step 5: Publish to npm
echo "Step 4: Publishing to npm..."
npm publish --access public
if [ $? -ne 0 ]; then
    echo "❌ Publish failed!"
    echo ""
    echo "Common issues:"
    echo "  - Package name already taken (try changing name in package.json)"
    echo "  - Version already published (bump version in package.json)"
    echo "  - Not logged in (run: npm login)"
    exit 1
fi

echo ""
echo "🎉 SUCCESS! Package published to npm!"
echo ""
echo "Your package is now live at:"
echo "  https://www.npmjs.com/package/$package_name"
echo ""
echo "Anyone can now install it with:"
echo "  npm install -g $package_name"
echo "  npx $package_name --help"
echo ""
echo "Test it yourself:"
echo "  npx $package_name list"
echo ""

