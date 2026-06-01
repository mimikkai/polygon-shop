import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const basePath = process.env.NEXT_BASE_PATH ?? ""

export function assetUrl(path: string): string {
  if (path.startsWith("/")) {
    return `${basePath}${path}`
  }
  return path
}
