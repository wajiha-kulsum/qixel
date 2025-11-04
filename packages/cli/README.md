# Qixel CLI

CLI tool for adding animated React components to your project.

## Installation

### Global Installation (Recommended)

```bash
npm install -g @wajiha12/qixel-cli
```

### Or use npx (no installation required)

```bash
npx @wajiha12/qixel-cli init
npx @wajiha12/qixel-cli add magnetic-button
```

## Usage

### Initialize your project

```bash
qixel init
```

This creates a `qixel.json` config file in your project.

### List available components

```bash
qixel list
```

### Add a component

```bash
qixel add magnetic-button
```

This will:
1. Copy the component source to your project
2. Automatically install required dependencies (framer-motion, etc.)

## Example

```bash
# Initialize
qixel init

# Add magnetic button
qixel add magnetic-button

# Use in your React app
import { MagneticButton } from '@/components/qixel/buttons/magnetic-button'

function App() {
  return <MagneticButton>Click me!</MagneticButton>
}
```

## Shadcn-style workflow

Like shadcn/ui, Qixel components are:
- ✅ Copy-pasted directly into your project (you own the code)
- ✅ Fully customizable
- ✅ No package dependency
- ✅ TypeScript ready

---

## For Maintainers: Deploying to npm

To publish updates to npm, use the deployment script:

```bash
cd packages/cli
.\deploy.ps1      # Windows PowerShell
# or
./deploy.sh       # Mac/Linux
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

