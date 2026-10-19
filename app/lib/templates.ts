export type MessageTemplate = {
  occasionId: string;
  language: "hi" | "en";
  id: number; // 1 to 15
  message: string;
};

// 15 Wishes per festival in both Hindi and English (7 occasions × 2 languages × 15 wishes = 210 wishes)
export const templatesMap: Record<
  string,
  {
    hi: string[];
    en: string[];
  }
> = {
  dussehra: {
    hi: [
      "दशहरे के इस पावन पर्व पर आपके और आपके परिवार के जीवन में सुख, शांति और समृद्धि का वास हो। बुराई पर अच्छाई की विजय हमेशा आपका मार्गदर्शन करे। शुभ दशहरा!",
      "अधर्म पर धर्म की विजय, असत्य पर सत्य की जीत! दशहरा आपके जीवन में नई रोशनी, खुशियाँ और असीम सफलता लाए। विजयादशमी की हार्दिक शुभकामनाएँ!",
      "रावण के पुतले के साथ अपने मन के सारे संशय, डर और निराशा को भी जला दें। आपको और आपके पूरे परिवार को विजय के पावन पर्व दशहरे की शुभकामनाएँ!",
      "प्रभु श्रीराम की कृपा से आपके जीवन के सभी कष्ट मिट जाएँ और सफलता के नए द्वार खुलें। विजयादशमी का पावन पर्व आपके घर में खुशहाली लाए।",
      "जैसे राम जी ने लंका जीती, वैसे ही आप जीवन के हर मोड़ पर विजय प्राप्त करें। दशहरा आपके लिए सौभाग्य और आनंद से भरा हो!",
      "बुराई का नाश हो और अच्छाई का प्रकाश चारों ओर फैले। विजयादशमी के इस पवित्र अवसर पर आपके सभी सपने पूरे हों। शुभ दशहरा!",
      "सत्य की राह पर चलने का संकल्प लें और अपने सपनों को नई उड़ान दें। दशहरा आपके जीवन में सकारात्मक ऊर्जा और आत्मविश्वास भर दे।",
      "माँ दुर्गा और भगवान राम का आशीष आप पर हमेशा बना रहे। विजयादशमी की ढेरों मंगलकामनाएँ आपके और आपके परिजनों के लिए!",
      "विजयादशमी का यह पावन दिन आपके जीवन में सुख, आरोग्य और शांति का नया सवेरा लेकर आए। जय श्री राम! शुभ दशहरा!",
      "क्रोध, लोभ और अहंकार का त्याग कर प्रेम और सद्भाव अपनाएं। यही दशहरे का सच्चा संदेश है। दशहरा मुबारक!",
      "फूलों की सुगंध और अपनों का प्यार, मुबारक हो आपको दशहरे का पावन त्यौहार! जीवन में सदा मुस्कान बनी रहे।",
      "अंधकार कितना भी गहरा हो, सत्य का एक दीपक ही काफी है। इस विजयादशमी पर आपके मन का हर कोना ज्ञान से आलोकित हो।",
      "हर बुराई पर आपकी अच्छाई भारी पड़े, जीवन का हर इम्तिहान आप शान से पास करें। दशहरे की अनंत शुभकामनाएँ!",
      "हर्ष, उल्लास और विजय का पर्व आया है। ईश्वर से प्रार्थना है कि आपकी हर मुराद पूरी हो। हैप्पी दशहरा!",
      "सफलता की नई ऊँचाइयाँ छुएं और सदा धर्म की राह पर चलें। विजयादशमी के इस शुभ अवसर पर आपको दिल से शुभकामनाएँ!",
    ],
    en: [
      "May the triumph of good over evil guide your life towards peace, prosperity, and happiness. Wishing you and your family a blessed Dussehra!",
      "May Lord Rama bless you with strength, wisdom, and courage to conquer all obstacles in life. Happy Vijayadashami!",
      "Burn away all negativity, doubt, and sorrow with the effigy of Ravana. May you rise with fresh confidence and joy. Happy Dussehra!",
      "Wishing you a glorious Dussehra filled with triumph, boundless joy, and meaningful achievements. Have a blessed celebration!",
      "May the auspicious festival of Dussehra illuminate your path with divine blessings, good health, and success.",
      "Just as Lord Rama conquered Lanka, may you achieve triumph in every endeavor you undertake. Happy Dussehra!",
      "Celebrate the victory of truth, honor, and righteousness. Wishing you a cheerful and prosperous Vijayadashami!",
      "May your troubles vanish and your days be filled with smiles and accomplishments. Warmest wishes on Dussehra!",
      "Sending you and your loved ones heartfelt wishes for peace, harmony, and grand celebrations on Vijayadashami.",
      "May this sacred occasion bring good fortune and eternal joy to your home. Have a wonderful Dussehra with family!",
      "Let righteousness and compassion prevail in your heart today and always. Happy Vijayadashami to you and your family!",
      "May the spirit of Dussehra inspire you to lead a life of integrity, truth, and purpose. Best festive wishes!",
      "Embrace the light within and let all shadows fade away. May this Vijayadashami mark the start of your greatest victories!",
      "Wishing you boundless optimism, abundant cheer, and memorable festivities with loved ones this Dussehra.",
      "May good health, everlasting wealth, and abundant peace bless your household this Dussehra and all year round!",
    ],
  },
  diwali: {
    hi: [
      "दीपावली के शुभ अवसर पर आपके घर में सुख, शांति, समृद्धि और खुशियों का दीप सदा जलता रहे। माँ लक्ष्मी का आशीर्वाद आप पर बना रहे। शुभ दीपावली!",
      "दीपों का यह पावन उत्सव आपके जीवन में सफलता, आनंद और नई उमंगों का उजाला भर दे। आपको सपरिवार दीपावली की हार्दिक शुभकामनाएँ!",
      "लक्ष्मी जी का हाथ हो, सरस्वती जी का साथ हो, गणेश जी का वास हो, और खुशियों की बरसात हो! हैप्पी दिवाली!",
      "दीप जलते रहें, मन खिलते रहें, जीवन की हर मुश्किल में आप आगे बढ़ते रहें। दीपावली की ढेरों मंगलकामनाएँ!",
      "सोने का रथ, चाँदी की पालकी, बैठकर जिसमें आई माँ लक्ष्मी! आपके घर खुशियों की बहार लाए। शुभ दीपावली!",
      "पटाखों का शोर नहीं, दिलों में प्यार का शोर हो। इस दिवाली हर घर में खुशियों का नया भोर हो। हैप्पी दिवाली!",
      "रोशनी के इस पावन पर्व पर आपके सारे दुःख दूर हों और जीवन में खुशियों की रोशनी फैले। दीपावली की हार्दिक बधाई!",
      "गणेश-लक्ष्मी जी की कृपा से आपका व्यापार, परिवार और जीवन सदा फलता-फूलता रहे। शुभ दीपावली!",
      "झिलमिलाते दीपों की रोशनी आपके घर-आँगन को महकाए और हर दिन नया उत्साह लाए। दीपावली मुबारक!",
      "मिठाई की मिठास और अपनों का साथ, हमेशा बनी रहे ईश्वर की कृपा आपके साथ। दिवाली की हार्दिक शुभकामनाएँ!",
      "दीपावली का पावन प्रकाश आपके मन के अंधकार को मिटाकर जीवन में ज्ञान और प्रेम भरे। शुभ दीपावली!",
      "इस पावन त्यौहार पर आपके सभी सपने सच हों और घर में सुख-समृद्धि का वास हो। सपरिवार दीपावली की बधाई!",
      "आशा और विश्वास का दीपक सदा जलाए रखें, सफलता आपके कदम चूमेगी। मंगलमय दीपावली!",
      "धन-धान्य, उत्तम स्वास्थ्य और खुशहाली से भरा रहे आपका जीवन। आपको और आपके परिवार को शुभ दिवाली!",
      "प्यार के दिए जलाएं, खुशियों की मिठाई बांटें! यह दिवाली आपके जीवन में यादगार पल लेकर आए। हैप्पी दिवाली!",
    ],
    en: [
      "Wishing you and your family a glowing, prosperous, and joyful Diwali! May divine lights illuminate your path forever.",
      "May the festival of lights brighten your life with boundless peace, health, and abundant prosperity. Happy Diwali!",
      "May Goddess Lakshmi and Lord Ganesha bless your home with eternal joy, warmth, and grand fortune. Happy Deepavali!",
      "Sending you warmest wishes on Diwali! May the gentle glow of diyas bring serene comfort and happiness to your heart.",
      "May this Diwali mark the dawn of an incredible year ahead, filled with sparkling dreams and accomplished goals.",
      "Light up your heart with gratitude, kindness, and love. Wishing you a truly magnificent and blessed Diwali!",
      "May the gleam of golden diyas bring serenity, wealth, and boundless laughter to your family. Happy Diwali!",
      "Celebrate the warmth of togetherness and sweet memories this Diwali. Wishing you a safe and joyful festive season!",
      "May the divine brightness dispel all gloom and paint your life with vibrant colors of delight. Happy Deepavali!",
      "Wishing you sparkling moments, sweet delicacies, and laughter-filled memories this festive season. Happy Diwali!",
      "May your days be blessed with harmony, your home with prosperity, and your heart with pure bliss. Joyous Diwali!",
      "May good fortune knock on your door and stay with you throughout the year. Have a heartwarming Diwali!",
      "Wishing you a festival of lights that radiates positivity, strength, and great breakthroughs. Happy Diwali!",
      "May the sweetness of festive treats and the glow of lamps fill your home with blissful memories. Happy Deepavali!",
      "Warmest festive greetings to you and your loved ones! May this Diwali be the brightest and happiest one yet.",
    ],
  },
  holi: {
    hi: [
      "रंगों और खुशियों के महापर्व होली की हार्दिक शुभकामनाएँ! यह त्योहार आपके जीवन में प्रेम, उमंग और उल्लास के सुंदर रंग भर दे।",
      "गुलाल का रंग, अपनों का संग, ढोलक की ताल पर झूमे हर अंग! आपको सपरिवार होली की बहुत-बहुत बधाई!",
      "मथुरा की खुशबू, गोकुल का हार, मुबारक हो आपको रंगों का पावन त्यौहार! हँसते-मुस्कुराते रहिए। शुभ होली!",
      "पिचकारी की धार, गुलाल की बौछार, अपनों का प्यार, यही है होली का प्यारा त्यौहार। हैप्पी होली!",
      "जीवन के कैनवास पर खुशियों, प्यार और सफलता के खूबसूरत रंग बरसें। होली की हार्दिक मंगलकामनाएँ!",
      "सारे गिले-शिकवे मिटाकर एक-दूसरे को गले लगाएं, और प्रेम के रंगों से इस जीवन को सजाएं। होली मुबारक!",
      "राधा का रंग और कान्हा की पिचकारी, प्यार के रंग से रंग दो दुनिया सारी! शुभ होली!",
      "मीठी गुझिया की तरह आपके जीवन में मिठास घुले, और हर दिन होली जैसा रंगीन हो। बहुत-बहुत शुभकामनाएँ!",
      "फागुन का महीना और रंगों की फुहार, आपके जीवन में लाए खुशियों की बहार। हैप्पी होली!",
      "यह होली आपके स्वास्थ्य, समृद्धि और पारिवारिक सुख के लिए मंगलकारी सिद्ध हो। हार्दिक शुभकामनाएँ!",
      "चंदन की खुशबू, बादाम का स्वाद, होली का रंग और अपनों का साथ! मुबारक हो आपको होली का त्यौहार!",
      "रंगों का यह पावन उत्सव आपके जीवन में नई उमंग, नई ऊर्जा और नए अवसर लेकर आए। शुभ होली!",
      "हँसी-खुशी और सौहार्द का यह पावन पर्व आपके दिल को हमेशा तरोताजा रखे। हैप्पी होली!",
      "गुलाल के हर रंग के साथ आपके जीवन में शांति और सफलता के नए रंग जुड़ते जाएं। होली की बधाई!",
      "प्यार, दोस्ती और खुशियों की कभी न मिटने वाली छाप छोड़े यह होली। आपको और आपके परिवार को होली मुबारक!",
    ],
    en: [
      "Wishing you a vibrant, joyful, and colorful Holi! May this beautiful festival paint your life with peace and cheer.",
      "May the vivid colors of Holi bring laughter, good luck, and cheerful moments into your everyday life. Happy Holi!",
      "Let go of past worries and embrace life with love and bright gulal. Wishing you a joyful and safe Holi!",
      "May your life be as sweet as gujiyas and as colorful as the spring sky. Have a splendid Holi with family and friends!",
      "Sending you warm wishes soaked in shades of joy, health, and prosperity. Happy Holi to you and your family!",
      "May the splashes of festive hues wash away all sadness and illuminate your journey ahead. Have an exhilarating Holi!",
      "Celebrate friendship, harmony, and colorful togetherness on this auspicious spring day. Happy Holi!",
      "May the music of festivities and the charm of bright colors bring boundless positivity to your soul. Joyous Holi!",
      "Wishing you abundant happiness, playful moments, and lovely memories on this blessed day of colors. Happy Holi!",
      "May this Holi fill your home with vibrant energy, sweet conversations, and endless peace. Warm festive greetings!",
      "Let the colors of Holi spread warmth and happiness in every step you take. Wishing you a grand celebration!",
      "May divine blessings paint your world with colors of success, wisdom, and everlasting contentment. Happy Holi!",
      "Drench yourself in the spirit of love and celebration! Wishing you and your near and dear ones a fantastic Holi.",
      "May your relationships grow sweeter and deeper like the festive delicacies of spring. Happy Holi!",
      "Here's wishing you a lively celebration full of laughter, rhythm, and radiant colors. Have a blessed Holi!",
    ],
  },
  birthday: {
    hi: [
      "जन्मदिन की अनंत शुभकामनाएँ! ईश्वर से प्रार्थना है कि आपका आने वाला हर दिन नई उपलब्धियों और खुशियों से महके।",
      "सदा हँसते रहिए, मुस्कुराते रहिए और जीवन के हर मोड़ पर सफलता पाते रहिए। जन्मदिन बहुत-बहुत मुबारक!",
      "ईश्वर आपको लंबी उम्र, उत्तम स्वास्थ्य, और अपार खुशियाँ प्रदान करे। आपका दिन मंगलमय हो! हैप्पी बर्थडे!",
      "खुशियों का हर पल आपके हिस्से आए, आपकी हर मनोकामना ईश्वर तुरंत पूरी करे। जन्मदिन की हार्दिक बधाई!",
      "चाँद-सितारों सी चमक हो आपकी पहचान में, आप हमेशा खुश रहें इस जहाँ में। जन्मदिन की ढेरों शुभकामनाएँ!",
      "यह जन्मदिन आपके जीवन में नई उम्मीदें, नए रास्ते और बड़ी कामयाबियां लेकर आए। बहुत-बहुत मुबारक!",
      "फूलों की तरह महकता रहे आपका जीवन, खुशियों से भरा रहे आपका हर एक क्षण। जन्मदिन मुबारक हो प्रिय!",
      "आप जो भी चाहें, वो आपको मिले, हर कदम पर खुशियों के फूल खिलें। जन्मदिन की अशेष शुभकामनाएँ!",
      "आपके नेक दिल और प्यारे स्वभाव की वजह से आप सबके चहेते हैं। आपका यह दिन बेहद खास और खुशनुमा हो!",
      "सफलता की नई ऊँचाइयों को छुएं और अपने सपनों को सच करें। जन्मदिन की बहुत-बहुत बधाई!",
      "ईश्वर का वरदान बना रहे आप पर सदा, जीवन में कभी कोई ग़म न आए। जन्मदिन की हार्दिक मंगलकामनाएँ!",
      "एक और साल की खूबसूरत यादें और नए सपनों की शुरुआत! आपको जन्मदिन की बहुत-बहुत शुभकामनाएँ!",
      "मुस्कान आपके चेहरे से कभी जुदा न हो, हर दिन उत्सव की तरह बीते। हैप्पी बर्थडे!",
      "आपकी मेहनत रंग लाए और आपकी ज़िंदगी प्यार व सम्मान से सजी रहे। जन्मदिन की ढेरों बधाई!",
      "आज का दिन आपके लिए उतना ही खास और प्यारा हो, जितने खास आप हम सबके लिए हैं। जन्मदिन मुबारक!",
    ],
    en: [
      "Wishing you a very Happy Birthday! May your special day be filled with endless laughter, love, and sweet surprises.",
      "May the coming year bring you immense success, splendid health, and dreams fulfilled. Happy Birthday!",
      "Celebrating you today! May your journey ahead be blessed with wisdom, joy, and peace at every step.",
      "Happy Birthday! May your heart be light, your smiles be bright, and your blessings multiply every day.",
      "Wishing you a year ahead bursting with exciting adventures, great accomplishments, and warm moments.",
      "You bring so much light and kindness into this world. May your birthday return all that happiness back to you!",
      "Here's to another fantastic year of making memories, chasing dreams, and living life to the fullest. Happy Birthday!",
      "May good health, true friendship, and boundless cheer accompany you today and all throughout the year.",
      "Sending you heartfelt wishes on your birthday! May you conquer new heights and stay forever inspired.",
      "Happy Birthday! May all the wonderful dreams you cherish today transform into reality tomorrow.",
      "Count your life by smiles, not tears; count your age by friends, not years. Have a sensational birthday!",
      "May your day be as extraordinary and kind-hearted as you are. Enjoy every second of your celebration!",
      "Warmest thoughts and best wishes for a year filled with love, laughter, and remarkable milestones. Happy Birthday!",
      "Cheers to another year of grace, courage, and growth. Wishing you a blessed and memorable birthday celebration!",
      "May your birthday cake be sweet, your gifts be plenty, and your year ahead be truly extraordinary!",
    ],
  },
  anniversary: {
    hi: [
      "विवाह वर्षगांठ की बहुत-बहुत शुभकामनाएँ! आप दोनों का प्यार और विश्वास हमेशा यूं ही बना रहे।",
      "सात फेरों से बंधा यह पावन बंधन उम्र भर प्यार और खुशियों से महकता रहे। हैप्पी एनिवर्सरी!",
      "दिया और बाती जैसा पवित्र साथ रहे आपका, हर जन्म में एक-दूसरे का हाथ रहे आपका। सालगिरह मुबारक!",
      "आप दोनों की जोड़ी हमेशा सलामत रहे, घर में सुख-समृद्धि और प्रेम की बरकत रहे। वैवाहिक वर्षगांठ की बधाई!",
      "एक-दूसरे का हाथ थामे यूं ही जीवन का हर सफर तय करते रहें। शादी की सालगिरह की हार्दिक शुभकामनाएँ!",
      "प्यार, त्याग और विश्वास की सुंदर मिसाल है आपकी जोड़ी। ईश्वर आप दोनों को सदा खुश और स्वस्थ रखे।",
      "हर सुबह नए प्यार की शुरुआत हो, हर शाम खुशियों की बरसात हो। सालगिरह की अनंत मंगलकामनाएँ!",
      "आप दोनों के रिश्ते की खुशबू समय के साथ और गहरी होती जाए। शादी की वर्षगांठ की ढेरों बधाई!",
      "खुशियों का हर लम्हा आपके कदमों में हो, जीवन का हर रास्ता फूलों से सजा हो। हैप्पी एनिवर्सरी!",
      "सालगिरह का यह शुभ दिन आप दोनों के जीवन में और अधिक अपनापन और आनंद लेकर आए। बहुत-बहुत बधाई!",
      "जैसे नदी और समंदर का मिलन होता है, वैसे ही आपका अटूट साथ रहे। वैवाहिक वर्षगांठ की शुभकामनाएँ!",
      "आप दोनों एक-दूसरे की ताक़त बनकर हमेशा साथ मुस्कुराते रहें। शादी की सालगिरह मुबारक!",
      "ईश्वर की कृपा से आपके घर में सदा आनंद, प्रेम और शांति का बसेरा रहे। हैप्पी एनिवर्सरी!",
      "प्यार का यह बंधन हर साल और मजबूत हो, खुशियों की कोई कमी न रहे। सालगिरह की हार्दिक बधाई!",
      "आप दोनों की प्यारी जोड़ी पर ऊपर वाले की कृपा सदा बनी रहे। शादी की सालगिरह की अशेष शुभकामनाएँ!",
    ],
    en: [
      "Happy Anniversary! Celebrating the enduring love, deep trust, and beautiful bond you both share.",
      "Wishing you both another year of wonderful togetherness, fond memories, and timeless romance.",
      "May the love you share today grow deeper, wiser, and stronger with every passing year. Happy Anniversary!",
      "You two show the world what true companionship looks like. Wishing you countless more years of joy and harmony.",
      "May your home be filled with laughter and your hearts with unconditional love. Happy Wedding Anniversary!",
      "Sending you both warmest congratulations on another milestone year of walking hand in hand. Best wishes!",
      "May every chapter of your shared story be filled with peace, sweet moments, and mutual admiration.",
      "Happy Anniversary! May the warmth of your companionship keep inspiring everyone around you.",
      "Wishing a very Happy Anniversary to a truly wonderful couple. May God bless your journey forever!",
      "Here's to celebrating your unique bond, unforgettable memories, and a future glowing with happiness.",
      "May your hearts beat as one and your smiles reflect the deep happiness you bring into each other's lives.",
      "Happy Anniversary! May your days ahead be graced with good health, prosperity, and unending love.",
      "Another year of shared laughter, mutual support, and pure affection. Have a delightful anniversary celebration!",
      "May the sweet melody of your love song play on forever. Wishing you a joyous wedding anniversary!",
      "Warmest anniversary greetings to the loveliest couple! May your love continue to blossom day by day.",
    ],
  },
  newyear: {
    hi: [
      "नव वर्ष की हार्दिक मंगलकामनाएँ! यह नया साल आपके जीवन में नए अवसर, अपार खुशियाँ और उत्तम स्वास्थ्य लेकर आए।",
      "बीते साल को अलविदा कहें और नई उम्मीदों के साथ नए साल का स्वागत करें। नया साल बहुत-बहुत मुबारक!",
      "नया सवेरा, नई किरण, नया उत्साह और नया उमंग! ईश्वर करे नया साल आपके लिए सौभाग्यशाली साबित हो।",
      "आपके सभी अधूरे सपने इस नए साल में पूरे हों, सफलता आपके कदम चूमे। नव वर्ष की हार्दिक बधाई!",
      "आने वाला हर दिन आपके चेहरे पर मुस्कान और जीवन में तरक्की लाए। हैप्पी न्यू ईयर 2026!",
      "दुःख-दर्द पीछे छूट जाएं, सुख और समृद्धि आपके घर पधारें। नया साल मंगलमय हो!",
      "सकारात्मक सोच और बुलंद हौसलों के साथ नए साल में नई ऊँचाइयों को छुएं। नव वर्ष की शुभकामनाएँ!",
      "ईश्वर आपके परिवार को रोगमुक्त, धन-धान्य से संपन्न और आनंदित रखे। सपरिवार नव वर्ष मुबारक!",
      "365 नए दिन, 365 नए मौके! इस साल को अपने जीवन का सबसे बेहतरीन साल बनाएं। हैप्पी न्यू ईयर!",
      "जैसे फूलों से खुशबू बिखरती है, वैसे ही आपके जीवन में खुशियाँ बिखरें। नए साल की अशेष बधाई!",
      "नए साल का पहला दिन आपके लिए सुनहरी संभावनाओं का द्वार खोले। नव वर्ष की अनंत मंगलकामनाएँ!",
      "शांति, सौहार्द और खुशहाली का नया पैगाम लेकर आए यह नया वर्ष। आपको और आपके परिवार को शुभ नया साल!",
      "आपके जीवन का हर एक पल आनंद और संतोष से परिपूर्ण रहे। नए साल की बहुत-बहुत शुभकामनाएँ!",
      "हर सुबह नई रोशनी लाए, हर शाम सुकून दिलाए। नए साल का हर लम्हा आपके लिए अनमोल हो। हैप्पी न्यू ईयर!",
      "प्यार, दया और सद्भावना के साथ इस नए साल की शुरुआत करें। ईश्वर का आशीष सदा साथ रहे। शुभ नव वर्ष!",
    ],
    en: [
      "Wishing you a Happy, Healthy, and Prosperous New Year! May the coming 365 days bring you joy and fulfilled dreams.",
      "May the New Year open up doors to exciting possibilities, inner peace, and great achievements for you.",
      "Cheers to fresh starts, new adventures, and treasured memories ahead. Wishing you a wonderful New Year!",
      "May you leave behind all worries and step into the New Year with boundless courage and enthusiasm.",
      "Sending you warmest wishes for a peaceful, joyful, and deeply rewarding New Year with your family.",
      "May each day of this coming year bring a reason to smile, celebrate, and be grateful. Happy New Year!",
      "May good health, financial abundance, and lasting contentment bless your life throughout this year.",
      "Welcome the New Year with a thankful heart and high hopes. May all your noble aspirations come true!",
      "Here's to 365 fresh pages of opportunities waiting to be written by you. Make it an extraordinary year!",
      "Wishing you and your loved ones a sparkling, cheerful, and prosperous journey ahead. Happy New Year!",
      "May the magic of new beginnings inspire you to create your best chapter yet. Happy New Year to you!",
      "May kindness guide your steps, courage fuel your ambition, and love surround your soul in this New Year.",
      "Wishing you serene days, restorative rest, and grand triumphs throughout the coming year. Joyous New Year!",
      "May the sunshine of optimism brighten your days and warm your heart all year long. Happy New Year!",
      "Warmest festive greetings on the New Year! May you be blessed with happiness, longevity, and success.",
    ],
  },
  custom: {
    hi: [
      "आपके लिए दिल से ढेर सारी शुभकामनाएँ! आपका हर दिन आनंद, सकारात्मक ऊर्जा और सफलता से परिपूर्ण रहे।",
      "सदा हँसते-मुस्कुराते रहिए, ईश्वर की कृपा से आपके जीवन का हर सफर सुखद और शांतिपूर्ण हो।",
      "जीवन के हर मोड़ पर आपको खुशियाँ, प्यार और सम्मान मिले। आपके सभी सपने साकार हों।",
      "सकारात्मक विचारों और नेक नीयत के साथ आगे बढ़ते रहें, सफलता आपके कदम चूमेगी। शुभकामनाएँ!",
      "आपका स्वास्थ्य उत्तम रहे और परिवार में सदा खुशहाली और प्रेम का वातावरण बना रहे।",
      "मन में नई उमंग और आँखों में नई चमक लेकर आगे बढ़िए। आपको दिल से ढेरों मंगलकामनाएँ!",
      "हर दिन ईश्वर का दिया एक नया उपहार है, इसे पूरी शिद्दत और खुशियों के साथ जिएं।",
      "आपके जीवन का हर एक पल यादगार बने और आप सदा दूसरों के लिए प्रेरणा बने रहें।",
      "मुश्किलें चाहे जो भी हों, आपका हौसला सदा बुलंद रहे। शुभकामनाएँ!",
      "आपके घर-आँगन में खुशियों की बहार हमेशा बनी रहे। दिल से स्नेह और मंगलकामनाएँ!",
      "सच्चाई और अच्छाई के मार्ग पर चलते रहिए, ऊपर वाला हमेशा आपके साथ है।",
      "आप जो भी नेक काम शुरू करें, उसमें आपको शत-प्रतिशत सफलता मिले। ढेरों शुभकामनाएँ!",
      "प्रेम, सौहार्द और संतोष का अमृत आपके जीवन को सदा तृप्त रखे।",
      "आपकी मेहनत रंग लाए और हर सुबह आपके जीवन में नया सवेरा बनकर चमके।",
      "सदा स्वस्थ, दीर्घायु और प्रसन्नचित्त रहें—यही ईश्वर से हमारी सच्ची प्रार्थना है।",
    ],
    en: [
      "Sending you my warmest wishes and positive thoughts! May your life be graced with endless joy and peace.",
      "May your day be filled with cheerful moments, pleasant surprises, and good company.",
      "Wishing you abundant strength, clarity of purpose, and courage to achieve all your heartfelt goals.",
      "May good health, true prosperity, and inner serenity accompany you on every path you choose.",
      "Keep shining your light and spreading kindness wherever you go. Warmest wishes to you always!",
      "May every challenge you face turn into a glorious stepping stone toward wisdom and success.",
      "Sending you a warm hug, heartfelt blessings, and good vibrations for a wonderful day ahead.",
      "May peace dwell in your home, content in your heart, and success in all your honest efforts.",
      "Wishing you endless reasons to smile, celebrate, and appreciate the beauty of life every day.",
      "May your hard work bear the sweetest fruit and your journey be blessed with genuine happiness.",
      "Never lose faith in yourself; great things are in store for your bright future. Best wishes!",
      "Wishing you harmonious relationships, calm moments, and joyous breakthroughs in all you do.",
      "May you always be surrounded by uplifting friends, abundant love, and inspiring opportunities.",
      "Here's wishing you gentle days, restful nights, and a heart full of deep contentment.",
      "Stay blessed, stay humble, and keep inspiring those around you. Warmest thoughts and greetings!",
    ],
  },
};

/**
 * Returns the list of 15 wishes for a given occasion and language.
 * Falls back to "custom" if occasion is not found.
 */
export function getTemplatesList(
  occasionId: string,
  language: "hi" | "en" = "hi"
): string[] {
  const occasionData = templatesMap[occasionId] || templatesMap.custom;
  return occasionData[language] || occasionData.hi;
}

/**
 * Returns a specific template by its 1-indexed ID (1 to 15).
 * If index is invalid, returns the first template.
 */
export function getTemplateByIndex(
  occasionId: string,
  language: "hi" | "en" = "hi",
  index: number = 1
): string {
  const list = getTemplatesList(occasionId, language);
  const normalizedIndex = Math.max(1, Math.min(index, list.length)) - 1;
  return list[normalizedIndex] || list[0];
}

/**
 * Backward compatibility helper for single template lookup.
 */
export function getTemplates(
  occasionId: string,
  language: "hi" | "en"
): MessageTemplate | undefined {
  const message = getTemplateByIndex(occasionId, language, 1);
  return {
    occasionId,
    language,
    id: 1,
    message,
  };
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
