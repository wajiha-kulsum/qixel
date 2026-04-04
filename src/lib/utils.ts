import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Merges class names intelligently using clsx and tailwind-merge.
 * Resolves tailwind class conflicts and conditionally applies classes.
 * 
 * @param inputs - Array of class values to be merged.
 * @returns A string of merged tailwind classes.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
