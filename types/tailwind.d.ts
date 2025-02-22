declare module 'tailwindcss/lib/util/flattenColorPalette' {
  function flattenColorPalette(colors: Record<string, unknown>): Record<string, string>;
  export default flattenColorPalette;
} 