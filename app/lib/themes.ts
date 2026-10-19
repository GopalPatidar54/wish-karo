export type CardTheme = {
  id: string;
  name: string;
  bgGradient: string;
  textColor: string;
  signatureColor: string;
  accentColor: string;
  borderClass: string;
  /** A small solid color swatch for the theme picker UI */
  previewClass: string;
};

export const cardThemes: CardTheme[] = [
  {
    id: "royal-purple",
    name: "Royal Purple",
    bgGradient: "bg-gradient-to-br from-purple-700 via-purple-600 to-indigo-700",
    textColor: "text-white",
    signatureColor: "text-purple-200",
    accentColor: "text-purple-300",
    borderClass: "border border-purple-400/20",
    previewClass: "bg-gradient-to-br from-purple-600 to-indigo-600",
  },
  {
    id: "warm-sunset",
    name: "Warm Sunset",
    bgGradient: "bg-gradient-to-br from-orange-500 via-rose-500 to-pink-600",
    textColor: "text-white",
    signatureColor: "text-orange-100",
    accentColor: "text-orange-200",
    borderClass: "border border-orange-300/20",
    previewClass: "bg-gradient-to-br from-orange-500 to-pink-500",
  },
  {
    id: "festive-red",
    name: "Festive Red",
    bgGradient: "bg-gradient-to-br from-red-700 via-red-600 to-rose-700",
    textColor: "text-white",
    signatureColor: "text-red-200",
    accentColor: "text-red-300",
    borderClass: "border border-red-400/20",
    previewClass: "bg-gradient-to-br from-red-600 to-rose-600",
  },
  {
    id: "ocean-blue",
    name: "Ocean Blue",
    bgGradient: "bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-700",
    textColor: "text-white",
    signatureColor: "text-blue-200",
    accentColor: "text-blue-300",
    borderClass: "border border-blue-400/20",
    previewClass: "bg-gradient-to-br from-blue-600 to-cyan-600",
  },
  {
    id: "forest-green",
    name: "Forest Green",
    bgGradient: "bg-gradient-to-br from-emerald-700 via-green-600 to-teal-700",
    textColor: "text-white",
    signatureColor: "text-emerald-200",
    accentColor: "text-emerald-300",
    borderClass: "border border-emerald-400/20",
    previewClass: "bg-gradient-to-br from-emerald-600 to-teal-600",
  },
  {
    id: "golden-glow",
    name: "Golden Glow",
    bgGradient: "bg-gradient-to-br from-amber-600 via-yellow-600 to-orange-600",
    textColor: "text-white",
    signatureColor: "text-amber-100",
    accentColor: "text-amber-200",
    borderClass: "border border-amber-300/20",
    previewClass: "bg-gradient-to-br from-amber-500 to-orange-500",
  },
];

export function getThemeById(id: string): CardTheme {
  return cardThemes.find((t) => t.id === id) ?? cardThemes[0];
}

