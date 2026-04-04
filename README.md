# Qixel

[![npm version](https://badge.fury.io/js/@wajiha12%2Fqixel-cli.svg)](https://www.npmjs.com/package/@wajiha12/qixel-cli)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> Add animated React components to your project with one command.

A shadcn-style CLI tool that copies animated components directly into your React project. You own the code, you customize it.

---

## 🚀 Quick Start

```bash
# Install globally
npm install -g @wajiha12/qixel-cli

# Or use with npx (no installation)
npx @wajiha12/qixel-cli init
npx @wajiha12/qixel-cli add magnetic-button
```

---

## 📦 Installation

### Option 1: Global Installation (Recommended)

```bash
npm install -g @wajiha12/qixel-cli
```

Then use anywhere:

```bash
qixel init
qixel list
qixel add magnetic-button
```

### Option 2: Use with npx (No Installation)

```bash
npx @wajiha12/qixel-cli init
npx @wajiha12/qixel-cli list
npx @wajiha12/qixel-cli add magnetic-button
```

---

## 🎯 Usage

### 1. Initialize Your Project

```bash
qixel init
```

This creates a `qixel.json` config file in your project.

### 2. List Available Components

```bash
qixel list
```

See all available animated components.

### 3. Add Components

```bash
qixel add magnetic-button
```

This will:
- ✅ Copy the component source to your project
- ✅ Automatically install required dependencies (framer-motion, etc.)
- ✅ Place it in your configured components directory

### 4. Use in Your App

```tsx
import { MagneticButton } from '@/components/qixel/buttons/magnetic-button'

function App() {
  return <MagneticButton>Click me!</MagneticButton>
}
```

---

## 🎨 Available Components

### Buttons
- **magnetic-button** - Button that subtly follows the cursor for a magnetic feel

*More components coming soon! ✨*

---

## 💡 Philosophy (Shadcn-style)

Like shadcn/ui, Qixel components are:

- ✅ **Copy-pasted directly into your project** (you own the code)
- ✅ **Fully customizable** (modify as you wish)
- ✅ **No package dependency** (not a component library)
- ✅ **TypeScript ready** (fully typed)

---

## 🛠️ Commands

| Command | Description |
|---------|-------------|
| `qixel init` | Initialize your project for Qixel components |
| `qixel list` | List all available components |
| `qixel add <component>` | Add a component to your project |
| `qixel --help` | Show help |
| `qixel --version` | Show version |

---

## 📁 Project Structure

```
qixel/
├── packages/
│   ├── cli/              # CLI tool (published to npm)
│   └── components/       # Component registry
└── src/
    ├── app/              # Next.js website
    └── components/       # Website components
```

---

## 🌐 Links

- **npm Package:** https://www.npmjs.com/package/@wajiha12/qixel-cli
- **GitHub Repository:** https://github.com/wajiha-kulsum/qixel
- **Issues:** https://github.com/wajiha-kulsum/qixel/issues

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

- 🐛 Report bugs
- 💡 Suggest new components
- 🔧 Submit pull requests
- 📖 Improve documentation

---

## 📄 License

MIT © [Wajiha Kulsum](https://github.com/wajiha-kulsum)

---

## 🙏 Credits

Built with:
- [Commander.js](https://github.com/tj/commander.js) - CLI framework
- [Chalk](https://github.com/chalk/chalk) - Terminal styling
- [Ora](https://github.com/sindresorhus/ora) - Elegant terminal spinners
- [Prompts](https://github.com/terkelg/prompts) - Beautiful CLI prompts

Inspired by [shadcn/ui](https://ui.shadcn.com/)

---

## 📊 Stats

- ⚡ Package size: 4.3 kB
- 📦 Dependencies: 5
- 🎯 Components: Growing!
- 🔄 Latest version: 0.1.1

---

**Made with ❤️ for the React community**

---

## ⚠️ Note

If you previously installed the unscoped `qixel` package, please switch to the official scoped package:

```bash
npm uninstall -g qixel
npm install -g @wajiha12/qixel-cli
```

<!-- Minor update for activity -->
