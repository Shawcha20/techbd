import clsx from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * cn() – merge Tailwind class names safely
 *
 * - Handles conditional classes
 * - Prevents Tailwind conflicts (p-2 + p-4)
 * - Keeps JSX clean
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
