"use client";

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
  /** When true, renders inline instead of fixed position (useful for previews) */
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
    : `fixed left-1/2 -translate-x-1/2 z-50 ${positionStyles[position]}`;

  return (
    <motion.nav
      initial={{ y: isStatic ? 0 : position === "top" ? -100 : 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={`${positionClasses} ${className}`}
    >
      <div
        className={`flex items-center gap-1 px-2 py-2 rounded-full ${variantStyles[variant]}`}
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
              className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                activeIndex === index
                  ? variant === "solid"
                    ? "text-white"
                    : "text-zinc-900 dark:text-white"
                  : variant === "solid"
                  ? "text-zinc-400 hover:text-zinc-200"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeIndex === index && (
                <motion.div
                  layoutId="navbar-pill"
                  className={`absolute inset-0 rounded-full ${
                    variant === "solid"
                      ? "bg-zinc-700"
                      : "bg-white dark:bg-white/20 shadow-sm"
                  }`}
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
}

