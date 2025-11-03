# Qixel

> Beautiful animated React components that you can copy and paste into your apps.

## 🎯 What is Qixel?

Qixel is a collection of animated UI components built with React, TypeScript, Tailwind CSS, and Framer Motion. Like shadcn/ui, components are **copied directly into your project** - you own the code and can customize it however you want.

## 📦 Project Structure

```
qixel/
├── src/                          # Next.js Website
│   ├── app/                      # App router pages
│   ├── components/
│   │   ├── motioncraft/          # Animated components
│   │   ├── site/                 # Website UI components
│   │   └── ui/                   # shadcn/ui components
│   └── lib/                      # Utils and registry
│
├── packages/
│   ├── cli/                      # CLI tool (@qixel/cli)
│   └── components/               # Component source package
│       ├── src/                  # Component source files
│       └── registry.json         # Component metadata
│
└── README.md
```

## 🚀 Quick Start

### For Users (Installing Components)

**Option 1: Use the CLI** (Recommended)

```bash
# Initialize your project
npx @qixel/cli init

# List available components
npx @qixel/cli list

# Add a component
npx @qixel/cli add magnetic-button
```

**Option 2: Copy & Paste**

Visit [http://localhost:3000/components](http://localhost:3000/components), click a component, and copy the code.

### For Contributors (Development)

```bash
# Install dependencies
npm install

# Start the website
npm run dev

# Build the CLI
cd packages/cli
npm run build
```

## 📚 Available Components

### Buttons
- **Magnetic Button** - Button that follows your cursor with physics

*More components coming soon!*

## 🛠️ Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui
- **Monorepo**: npm workspaces

## 📖 Documentation

### Website Routes

- `/` - Homepage
- `/components` - Browse all components with search & filters
- `/components/[slug]` - Individual component detail page

### CLI Commands

```bash
# Initialize configuration
qixel init

# List all components
qixel list

# Add a component to your project
qixel add <component-slug>
```

## 🎨 Component Structure

Each component includes:
- ✅ Live interactive preview
- ✅ Full source code
- ✅ TypeScript types
- ✅ Props documentation
- ✅ Usage examples
- ✅ Installation instructions
- ✅ Customization options

## 🤝 Contributing

We welcome contributions! To add a new component:

1. Create component in `packages/components/src/<category>/<name>.tsx`
2. Add metadata to `packages/components/registry.json`
3. Update the website registry in `src/lib/registry.ts`
4. Test with `npm run dev`

## 📝 License

MIT © Qixel

## 🔗 Links

- Website: [http://localhost:3000](http://localhost:3000)
- GitHub: [Your Repo URL]
- Documentation: [Your Docs URL]

---

Built with ❤️ by the Qixel team
