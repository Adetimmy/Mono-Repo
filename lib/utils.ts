import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalizeFirstLetter(str: string) {
  const firstChar = str.at(0)?.toUpperCase();
  const restChar = str.substring(1);
  if(!str) return ''
  return firstChar + restChar;
}
