# Development Guide

## 🏗️ Clean Architecture

### Single Source of Truth

- **Component Files**: `packages/components/src/` - Raw component code
- **Component Registry**: `packages/components/registry.json` - CLI metadata
- **Website Registry**: `src/lib/registry.ts` - Website metadata
- **Component Display**: `src/components/motioncraft/` - Components for website

### Why Two Registries?

1. **CLI Registry** (`packages/components/registry.json`)
   - Used by the CLI to copy components
   - Contains file paths and raw source code
   - Simple JSON format

2. **Website Registry** (`src/lib/registry.ts`)
   - Used by the Next.js website
   - Contains props, examples, and metadata
   - TypeScript format with dynamic imports

## 🔄 Workflow

### Adding a New Component

1. **Create the component**
   ```bash
   # Add to packages/components/src/<category>/<name>.tsx
   packages/components/src/buttons/shimmer-button.tsx
   ```

2. **Update CLI registry**
   ```json
   // packages/components/registry.json
   {
     "name": "Shimmer Button",
     "slug": "shimmer-button",
     "category": "buttons",
     "files": [{ "name": "shimmer-button.tsx", "content": "..." }]
   }
   ```

3. **Copy to website**
   ```bash
   # Copy the component to src/components/motioncraft/
   src/components/motioncraft/buttons/shimmer-button.tsx
   ```

4. **Update website registry**
   ```typescript
   // src/lib/registry.ts
   export const registry: Registry = [
     {
       slug: "shimmer-button",
       name: "Shimmer Button",
       modulePath: "@/components/motioncraft/buttons/shimmer-button",
       sourceCode: "...",
       props: [...],
       examples: [...]
     }
   ];
   ```

5. **Add loader**
   ```typescript
   // src/lib/registry.ts
   export async function loadComponentBySlug(slug: string) {
     switch (slug) {
       case "shimmer-button": {
         const mod = await import("@/components/motioncraft/buttons/shimmer-button");
         return mod.ShimmerButton;
       }
     }
   }
   ```

## 🧪 Testing

### Test the CLI
```bash
cd packages/cli
npm run build
node dist/index.js list
node dist/index.js add magnetic-button
```

### Test the Website
```bash
npm run dev
# Visit http://localhost:3000/components
```

## 📁 File Structure Explained

```
qixel/
├── src/                              # Website codebase
│   ├── app/
│   │   ├── page.tsx                  # Homepage
│   │   ├── layout.tsx                # Root layout
│   │   └── components/
│   │       ├── page.tsx              # Component grid
│   │       └── [slug]/page.tsx       # Component detail
│   │
│   ├── components/
│   │   ├── motioncraft/              # Animated components (for website)
│   │   │   └── buttons/
│   │   │       └── magnetic-button.tsx
│   │   │
│   │   ├── site/                     # Website UI
│   │   │   ├── component-grid.tsx    # Grid layout
│   │   │   ├── component-preview.tsx # Preview wrapper
│   │   │   ├── code-block.tsx        # Code display
│   │   │   └── copy-button.tsx       # Copy button
│   │   │
│   │   └── ui/                       # shadcn/ui
│   │       ├── button.tsx
│   │       └── card.tsx
│   │
│   └── lib/
│       ├── registry.ts               # Website registry
│       ├── types.ts                  # TypeScript types
│       └── utils.ts                  # Utilities
│
├── packages/
│   ├── cli/                          # CLI tool
│   │   ├── src/
│   │   │   ├── index.ts              # Entry point
│   │   │   ├── commands/
│   │   │   │   ├── init.ts           # qixel init
│   │   │   │   ├── list.ts           # qixel list
│   │   │   │   └── add.ts            # qixel add
│   │   │   └── utils/
│   │   │       ├── registry.ts       # Load registry
│   │   │       └── fs.ts             # File operations
│   │   │
│   │   └── dist/                     # Built CLI
│   │       └── index.js
│   │
│   └── components/                   # Component source
│       ├── src/                      # Raw components
│       │   ├── buttons/
│       │   │   └── magnetic-button.tsx
│       │   └── index.ts
│       │
│       └── registry.json             # CLI registry
│
├── package.json                      # Root package
└── README.md                         # Main docs
```

## 🎯 Best Practices

1. **Component Naming**: Use kebab-case for slugs, PascalCase for component names
2. **Props**: Always include TypeScript interfaces
3. **Styling**: Use Tailwind CSS classes
4. **Animation**: Use Framer Motion for all animations
5. **Dependencies**: Minimize external dependencies
6. **Documentation**: Include props table and examples

## 🐛 Common Issues

### CLI can't find registry
- Ensure `packages/components/registry.json` exists
- Check path resolution in `packages/cli/src/utils/registry.ts`

### Component not showing on website
- Check if component is in `src/components/motioncraft/`
- Verify registry entry in `src/lib/registry.ts`
- Add loader in `loadComponentBySlug()` function

### Build errors
- Run `npm install` in root
- Clear `.next` folder: `rm -rf .next`
- Rebuild CLI: `cd packages/cli && npm run build`

## 🚀 Deployment

### Website (Vercel)
```bash
npm run build
vercel --prod
```

### CLI (npm)
```bash
cd packages/cli
npm run build
npm publish
```

---

**Need help?** Check the main [README.md](./README.md) or open an issue.

