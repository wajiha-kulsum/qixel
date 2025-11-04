# Publishing Guide for @qixel/cli

This guide explains how to publish the CLI to npm so anyone can use it.

## Prerequisites

1. **npm account**: Create one at https://www.npmjs.com/signup
2. **npm login**: Run `npm login` in your terminal

## Steps to Publish

### 1. Update package.json

Make sure to update the repository URL in `package.json`:

```json
"repository": {
  "type": "git",
  "url": "https://github.com/YOUR_USERNAME/qixel.git",
  "directory": "packages/cli"
}
```

### 2. Check Package Name Availability

The package is currently named `@qixel/cli`. You have two options:

**Option A: Use a scoped package (recommended)**
- Keep `@qixel/cli` if you have npm organization access
- Or change to `@YOUR_USERNAME/qixel-cli`

**Option B: Use an unscoped name**
- Change to something like `qixel-cli` (must be globally unique)

### 3. Build the CLI

```bash
cd packages/cli
npm run build
```

This will:
- Compile TypeScript to JavaScript
- Copy the registry.json to the correct location
- Generate type definitions

### 4. Test Locally Before Publishing

Test the package locally using npm link:

```bash
# In packages/cli directory
npm link

# Now you can test globally
qixel --help
qixel list

# When done testing, unlink
npm unlink -g @qixel/cli
```

### 5. Publish to npm

```bash
cd packages/cli

# For first-time publish of a scoped package (public)
npm publish --access public

# For updates
npm publish
```

### 6. Verify the Package

After publishing, verify it works:

```bash
# Install from npm
npx @qixel/cli list

# Or install globally
npm install -g @qixel/cli
qixel --help
```

## Updating the Package

When you make changes:

1. Update the version in `package.json`:
   - Patch (bug fixes): 0.1.0 → 0.1.1
   - Minor (new features): 0.1.0 → 0.2.0
   - Major (breaking changes): 0.1.0 → 1.0.0

2. Rebuild and publish:
   ```bash
   npm run build
   npm publish
   ```

## Important Notes

- **Package name**: Must be unique on npm or scoped to your username
- **Public access**: Scoped packages are private by default, use `--access public`
- **Version**: Always increment the version before publishing
- **Test**: Always test locally with `npm link` before publishing

## Troubleshooting

### Error: Package name already exists
Change the package name in `package.json` to something unique.

### Error: You must be logged in
Run `npm login` and enter your npm credentials.

### Error: You do not have permission to publish
Make sure you own the package name or have access to the organization.

## Making it Popular

After publishing:
1. ✅ Add a good README with examples
2. ✅ Create a GitHub repository
3. ✅ Add keywords in package.json (already done)
4. Share on Twitter, Reddit, Dev.to
5. Add badges to your README (npm version, downloads, etc.)

