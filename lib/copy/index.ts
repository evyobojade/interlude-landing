import en, { type Copy } from './en'

export type { Copy }

// English only for now. Each new language will be added here as a file with the same shape.
export function getCopy(): Copy {
  return en
}

// Fills placeholders such as {count} in a line of copy
export function fill(text: string, values: Record<string, string | number>) {
  return text.replace(/\{(\w+)\}/g, (match, key) => (key in values ? String(values[key]) : match))
}
