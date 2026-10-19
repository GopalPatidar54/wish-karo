export type MessageTemplate = {
  occasionId: string;
  language: "hi" | "en";
  message: string;
};

export const templates: MessageTemplate[] = [
  // ── Dussehra ──
  {
    occasionId: "dussehra",
    language: "hi",
    message:
      "दशहरे के इस पावन पर्व पर आपके और आपके परिवार के जीवन में सुख, शांति और समृद्धि का वास हो।\nबुराई पर अच्छाई और सत्य की विजय हमेशा आपका मार्गदर्शन करे।\nआपका जीवन खुशियों और सफलता से भरा रहे।",
  },
  {
    occasionId: "dussehra",
    language: "en",
    message:
      "Wishing you a joyous and blessed Dussehra!\nMay the triumph of good over evil bring abundant happiness, good health, and success to you and your loved ones.",
  },

  // ── Diwali ──
  {
    occasionId: "diwali",
    language: "hi",
    message:
      "दीपावली के शुभ अवसर पर आपके घर में सुख, शांति, समृद्धि और खुशियों का दीप सदा जलता रहे।\nमाँ लक्ष्मी और भगवान गणेश का आशीर्वाद आप पर हमेशा बना रहे।\nशुभ दीपावली!",
  },
  {
    occasionId: "diwali",
    language: "en",
    message:
      "Wishing you and your family a gleaming and joyous Diwali!\nMay the divine lights illuminate your path with boundless happiness, health, and prosperity.",
  },

  // ── Holi ──
  {
    occasionId: "holi",
    language: "hi",
    message:
      "रंगों और खुशियों के महापर्व होली की हार्दिक शुभकामनाएँ!\nयह त्योहार आपके जीवन में प्रेम, उमंग और उल्लास के सुंदर रंग भर दे।\nहँसते-मुस्कुराते रहिए!",
  },
  {
    occasionId: "holi",
    language: "en",
    message:
      "Wishing you a vibrant, joyful, and colorful Holi!\nMay this beautiful festival paint your days ahead with peace, friendship, and endless cheerful moments.",
  },

  // ── Birthday ──
  {
    occasionId: "birthday",
    language: "hi",
    message:
      "जन्मदिन की अनंत शुभकामनाएँ!\nईश्वर से प्रार्थना है कि आपका आने वाला हर दिन नई उपलब्धियों और खुशियों से महके।\nआप हमेशा स्वस्थ, सफल और प्रसन्न रहें।",
  },
  {
    occasionId: "birthday",
    language: "en",
    message:
      "A very Happy Birthday to you!\nMay your special day be filled with laughter, love, and wonderful moments.\nWishing you another fantastic year of good health and success!",
  },

  // ── Anniversary ──
  {
    occasionId: "anniversary",
    language: "hi",
    message:
      "विवाह वर्षगांठ की बहुत-बहुत शुभकामनाएँ!\nआप दोनों का प्यार और विश्वास हमेशा यूं ही बना रहे।\nजीवन का हर सफर साथ में सुखद और मंगलमय हो।",
  },
  {
    occasionId: "anniversary",
    language: "en",
    message:
      "Happy Anniversary!\nCelebrating the special love and bond you share.\nMay your togetherness continue to blossom with every passing year.",
  },

  // ── New Year ──
  {
    occasionId: "newyear",
    language: "hi",
    message:
      "नव वर्ष की हार्दिक मंगलकामनाएँ!\nयह नया साल आपके जीवन में नए अवसर, अपार खुशियाँ और उत्तम स्वास्थ्य लेकर आए।\nआपके सभी संकल्प साकार हों।",
  },
  {
    occasionId: "newyear",
    language: "en",
    message:
      "Wishing you a Happy, Healthy, and Prosperous New Year!\nMay the coming 365 days bring you exciting beginnings, joy, and fulfilled dreams.",
  },

  // ── Custom ──
  {
    occasionId: "custom",
    language: "hi",
    message:
      "आपके लिए दिल से ढेर सारी शुभकामनाएँ!\nआपका हर दिन आनंद, सकारात्मक ऊर्जा और सफलता से परिपूर्ण रहे।\nहमेशा मुस्कुराते रहिए।",
  },
  {
    occasionId: "custom",
    language: "en",
    message:
      "Sending you my warmest wishes and positive thoughts!\nMay your life be graced with endless joy, peace, and meaningful accomplishments.",
  },
];

export function getTemplates(
  occasionId: string,
  language: "hi" | "en"
): MessageTemplate | undefined {
  return templates.find(
    (t) => t.occasionId === occasionId && t.language === language
  );
}

export function fillTemplate(
  template: string,
  sender?: string,
  recipient?: string
): string {
  let filled = template;
  if (sender) {
    filled = filled.replace(/\{sender\}/g, sender);
  }
  if (recipient) {
    filled = filled.replace(/\{recipient\}/g, recipient);
  }
  return filled;
}
