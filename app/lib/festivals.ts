export type Festival = {
  id: string;
  name: string;
  nameHi: string;
  emoji: string;
  decorEmojis: string[];
  gradient: string;
  cardGradient: string;
  description: string;
  descriptionHi: string;
};

export const festivals: Festival[] = [
  {
    id: "dussehra",
    name: "Dussehra",
    nameHi: "दशहरा",
    emoji: "🏹",
    decorEmojis: ["🏹", "🔥", "✨", "🪔", "🎯", "⚔️"],
    gradient: "from-orange-500 via-red-500 to-rose-600",
    cardGradient: "from-orange-50 via-red-50 to-rose-50",
    description: "Victory of good over evil",
    descriptionHi: "बुराई पर अच्छाई की जीत",
  },
  {
    id: "diwali",
    name: "Diwali",
    nameHi: "दीवाली",
    emoji: "🪔",
    decorEmojis: ["🪔", "✨", "🎆", "🎇", "🌟", "💫"],
    gradient: "from-amber-400 via-orange-500 to-yellow-500",
    cardGradient: "from-amber-50 via-orange-50 to-yellow-50",
    description: "Festival of lights",
    descriptionHi: "रोशनी का त्योहार",
  },
  {
    id: "holi",
    name: "Holi",
    nameHi: "होली",
    emoji: "🎨",
    decorEmojis: ["🎨", "🌈", "💜", "💙", "💚", "🧡"],
    gradient: "from-pink-500 via-purple-500 to-cyan-500",
    cardGradient: "from-pink-50 via-purple-50 to-cyan-50",
    description: "Festival of colors",
    descriptionHi: "रंगों का त्योहार",
  },
  {
    id: "birthday",
    name: "Birthday",
    nameHi: "जन्मदिन",
    emoji: "🎂",
    decorEmojis: ["🎂", "🎈", "🎁", "🥳", "🎉", "🎊"],
    gradient: "from-blue-500 via-indigo-500 to-purple-600",
    cardGradient: "from-blue-50 via-indigo-50 to-purple-50",
    description: "Happy Birthday celebration",
    descriptionHi: "जन्मदिन की बधाई",
  },
  {
    id: "anniversary",
    name: "Anniversary",
    nameHi: "सालगिरह",
    emoji: "💍",
    decorEmojis: ["💍", "❤️", "💐", "🥂", "💝", "🌹"],
    gradient: "from-rose-400 via-pink-500 to-fuchsia-500",
    cardGradient: "from-rose-50 via-pink-50 to-fuchsia-50",
    description: "Celebrating love & togetherness",
    descriptionHi: "प्यार और साथ का जश्न",
  },
  {
    id: "newyear",
    name: "New Year",
    nameHi: "नया साल",
    emoji: "🎆",
    decorEmojis: ["🎆", "🎇", "🥂", "🎉", "✨", "🌟"],
    gradient: "from-indigo-600 via-blue-600 to-sky-500",
    cardGradient: "from-indigo-50 via-blue-50 to-sky-50",
    description: "Welcome the New Year",
    descriptionHi: "नए साल का स्वागत",
  },
  {
    id: "custom",
    name: "Custom Wish",
    nameHi: "शुभकामना",
    emoji: "💌",
    decorEmojis: ["💌", "✨", "🌸", "🌺", "💫", "🦋"],
    gradient: "from-teal-500 via-emerald-500 to-green-500",
    cardGradient: "from-teal-50 via-emerald-50 to-green-50",
    description: "Send a personalized wish",
    descriptionHi: "अपनी शुभकामना भेजें",
  },
];

export function getFestivalById(id: string): Festival | undefined {
  return festivals.find((f) => f.id === id);
}

export function getDefaultFestival(): Festival {
  return festivals[0];
}

