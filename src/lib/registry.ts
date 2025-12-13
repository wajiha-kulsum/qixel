import { type Registry } from "./types";
import type { ComponentType } from "react";

const navbarCode = `"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

export interface NavbarProps {
  items: NavItem[];
  logo?: React.ReactNode;
  className?: string;
  position?: "top" | "bottom";
  variant?: "glass" | "solid" | "outline";
  activeIndex?: number;
  onItemClick?: (index: number, item: NavItem) => void;
  /** When true, renders inline instead of fixed position */
  static?: boolean;
}

export function Navbar({
  items,
  logo,
  className = "",
  position = "top",
  variant = "glass",
  activeIndex: controlledActiveIndex,
  onItemClick,
  static: isStatic = false,
}: NavbarProps) {
  const [internalActiveIndex, setInternalActiveIndex] = useState(0);
  const activeIndex = controlledActiveIndex ?? internalActiveIndex;

  const handleClick = (index: number, item: NavItem) => {
    if (controlledActiveIndex === undefined) {
      setInternalActiveIndex(index);
    }
    onItemClick?.(index, item);
  };

  const variantStyles = {
    glass: "bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg shadow-black/5",
    solid: "bg-zinc-900 border border-zinc-800 shadow-xl",
    outline: "bg-transparent border-2 border-zinc-300 dark:border-zinc-700",
  };

  const positionStyles = {
    top: "top-4",
    bottom: "bottom-4",
  };

  const positionClasses = isStatic
    ? ""
    : \`fixed left-1/2 -translate-x-1/2 z-50 \${positionStyles[position]}\`;

  return (
    <motion.nav
      initial={{ y: isStatic ? 0 : position === "top" ? -100 : 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={\`\${positionClasses} \${className}\`}
    >
      <div
        className={\`flex items-center gap-1 px-2 py-2 rounded-full \${variantStyles[variant]}\`}
      >
        {logo && (
          <div className="px-3 pr-4 border-r border-white/20 mr-1">
            {logo}
          </div>
        )}
        
        <div className="flex items-center gap-1 relative">
          {items.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleClick(index, item);
              }}
              className={\`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 \${
                activeIndex === index
                  ? variant === "solid"
                    ? "text-white"
                    : "text-zinc-900 dark:text-white"
                  : variant === "solid"
                  ? "text-zinc-400 hover:text-zinc-200"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
              }\`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeIndex === index && (
                <motion.div
                  layoutId="navbar-pill"
                  className={\`absolute inset-0 rounded-full \${
                    variant === "solid"
                      ? "bg-zinc-700"
                      : "bg-white dark:bg-white/20 shadow-sm"
                  }\`}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {item.icon}
                {item.label}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}`;

const magneticButtonCode = [
  '"use client";',
  '',
  'import { motion } from "framer-motion";',
  'import { useState } from "react";',
  '',
  'interface MagneticButtonProps {',
  '  children: React.ReactNode;',
  '  className?: string;',
  '  strength?: number;',
  '  stiffness?: number;',
  '  damping?: number;',
  '}',
  '',
  'export function MagneticButton({',
  '  children,',
  '  className = "",',
  '  strength = 0.3,',
  '  stiffness = 150,',
  '  damping = 15,',
  '}: MagneticButtonProps) {',
  '  const [position, setPosition] = useState({ x: 0, y: 0 });',
  '',
  '  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {',
  '    const rect = e.currentTarget.getBoundingClientRect();',
  '    const x = (e.clientX - rect.left - rect.width / 2) * strength;',
  '    const y = (e.clientY - rect.top - rect.height / 2) * strength;',
  '    setPosition({ x, y });',
  '  };',
  '',
  '  const handleMouseLeave = () => {',
  '    setPosition({ x: 0, y: 0 });',
  '  };',
  '',
  '  return (',
  '    <motion.button',
  '      className={"px-6 py-3 bg-blue-600 text-white rounded-lg font-medium " + className}',
  '      animate={{ x: position.x, y: position.y }}',
  '      transition={{ type: "spring", stiffness, damping }}',
  '      onMouseMove={handleMouseMove}',
  '      onMouseLeave={handleMouseLeave}',
  '    >',
  '      {children}',
  '    </motion.button>',
  '  );',
  '}',
].join('\n');

export const registry: Registry = [
  {
    slug: "magnetic-button",
    name: "Magnetic Button",
    category: "buttons",
    description: "Button subtly follows the cursor for a magnetic feel.",
    modulePath: "@/components/qixel/buttons/magnetic-button",
    exportName: "MagneticButton",
    sourceCode: magneticButtonCode,
    install: "npm i framer-motion",
    customization: "Tweak strength, stiffness, damping to change feel.",
    dependencies: ["framer-motion"],
    tags: ["interactive", "hover", "button"],
    props: [
      { name: "children", type: "React.ReactNode", required: true, description: "Button content" },
      { name: "className", type: "string", description: "Additional Tailwind classes" },
      { name: "strength", type: "number", defaultValue: "0.3", description: "Magnetic pull multiplier" },
      { name: "stiffness", type: "number", defaultValue: "150", description: "Spring stiffness" },
      { name: "damping", type: "number", defaultValue: "15", description: "Spring damping" },
    ],
    examples: [
      {
        title: "Default",
        code: "<MagneticButton>Hover Me!</MagneticButton>",
      },
      {
        title: "Soft Feel",
        code: "<MagneticButton strength={0.15} stiffness={120} damping={20}>Soft</MagneticButton>",
      },
    ],
  },
  {
    slug: "navbar",
    name: "Navbar",
    category: "navigation",
    description: "A floating pill-shaped navbar with smooth animations and multiple style variants.",
    modulePath: "@/components/qixel/navigation/navbar",
    exportName: "Navbar",
    sourceCode: navbarCode,
    install: "npm i framer-motion",
    customization: "Choose between glass, solid, or outline variants. Position at top or bottom.",
    dependencies: ["framer-motion"],
    tags: ["navigation", "navbar", "floating", "pill", "animated"],
    props: [
      { name: "items", type: "NavItem[]", required: true, description: "Array of navigation items with label, href, and optional icon" },
      { name: "logo", type: "React.ReactNode", description: "Optional logo element to display" },
      { name: "className", type: "string", description: "Additional Tailwind classes" },
      { name: "position", type: '"top" | "bottom"', defaultValue: '"top"', description: "Position of the navbar" },
      { name: "variant", type: '"glass" | "solid" | "outline"', defaultValue: '"glass"', description: "Visual style variant" },
      { name: "activeIndex", type: "number", description: "Controlled active item index" },
      { name: "onItemClick", type: "(index: number, item: NavItem) => void", description: "Callback when an item is clicked" },
      { name: "static", type: "boolean", defaultValue: "false", description: "When true, renders inline instead of fixed position" },
    ],
    examples: [
      {
        title: "Glass Navbar",
        code: `<Navbar items={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Contact", href: "/contact" }]} />`,
      },
      {
        title: "Solid Dark",
        code: `<Navbar variant="solid" items={[{ label: "Dashboard", href: "/" }, { label: "Settings", href: "/settings" }]} />`,
      },
      {
        title: "Bottom Position",
        code: `<Navbar position="bottom" items={[{ label: "Home", href: "/" }, { label: "Search", href: "/search" }, { label: "Profile", href: "/profile" }]} />`,
      },
    ],
    previewProps: {
      items: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Projects", href: "/projects" },
        { label: "Contact", href: "/contact" },
      ],
      variant: "solid",
      static: true,
    },
  },
];

export async function loadComponentBySlug(slug: string): Promise<ComponentType<any> | null> {
  switch (slug) {
    case "magnetic-button": {
      const mod = await import("@/components/qixel/buttons/magnetic-button");
      return mod.MagneticButton as ComponentType<any>;
    }
    case "navbar": {
      const mod = await import("@/components/qixel/navigation/navbar");
      return mod.Navbar as ComponentType<any>;
    }
    default:
      return null;
  }
}


