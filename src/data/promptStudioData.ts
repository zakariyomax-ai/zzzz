import { PromptItem } from '../types';

export const promptStudioItems: PromptItem[] = [
  {
    id: "cinematic-realistic",
    title: "Kinematografik Realistik Tasvir",
    category: "visual",
    targetAI: "Midjourney v6 / DALL-E 3 / Imagen 3",
    aspectRatio: "16:9",
    description: "Santyagoning quyosh botishidagi kichik yog'och qayiqda chuqur dengiz to'lqinlari o'rtasida o'tirgan dramatik, yuqori darajada batafsil realistik surati.",
    promptText: `Cinematic realistic illustration of an old Cuban fisherman with a weathered face, deep wrinkles, and determined eyes, sitting in a small wooden rowboat in the middle of the deep blue ocean. Sunset lighting, dramatic waves, epic scale, highly detailed, photorealistic, 8k resolution, emotional atmosphere, Hemingway style --ar 16:9`,
    sampleImage: "/assets/images/hero_santiago_ocean.jpg",
    tags: ["Realizm", "Midjourney", "Kinematik", "Santyago"]
  },
  {
    id: "minimalist-poster",
    title: "Minimalistik & Geometrik Poster",
    category: "poster",
    targetAI: "Midjourney / DALL-E 3 / Vector Gen",
    aspectRatio: "4:5 / 3:4",
    description: "To'q ko'k, moviy va quyosh tusidagi olovrang ranglar palitrasidagi zamonaviy abstrakt poster dizayni.",
    promptText: `Modern minimalist poster design for 'The Old Man and the Sea', abstract geometric shapes, a stylized silhouette of an old man in a tiny boat on a vast minimalist blue ocean, a huge fish outline beneath the waves, flat design, clean vector aesthetic, trendy color palette of deep navy blue, teal, and burnt orange, high-end graphic design --ar 4:5`,
    sampleImage: "/assets/images/minimalist_poster_boat.jpg",
    tags: ["Minimalizm", "Plakat", "Vektor", "Geometrik"]
  },
  {
    id: "drone-video-cinematic",
    title: "Sekinlashtirilgan Dron Video & Animatsiya",
    category: "video",
    targetAI: "Runway Gen-3 Alpha / Sora / Google Veo",
    aspectRatio: "16:9 (4K Video)",
    description: "Ochiq ummonda yolg'iz qayiq atrofidan o'tayotgan dron tasviri va suvdan sakrab chiqayotgan bahaybat Moviy Marlin baliq.",
    promptText: `A slow-motion cinematic drone shot of a lonely old fisherman in a small wooden boat in the open ocean. A huge marlin fish breaches the water surface near the boat. Golden hour lighting, atmospheric ocean spray, epic cinematic color grading, 4k video, photorealistic.`,
    sampleImage: "/assets/images/marlin_under_waves.jpg",
    tags: ["Video Animatsiya", "Dron", "Runway Gen-3", "Sora"]
  },
  {
    id: "contemporary-book-cover",
    title: "Zamonaviy Kitob Muqovasi Dizayni",
    category: "cover",
    targetAI: "Midjourney / Adobe Firefly / DALL-E 3",
    aspectRatio: "3:4 (Editorial)",
    description: "Nafis tipografik bo'shliq va abstrakt to'lqinlar bilan tutashgan qarmoq hamda qayiq tasviridagi zamonaviy nashriyot muqovasi.",
    promptText: `Contemporary book cover design for Ernest Hemingway's 'The Old Man and the Sea', editorial typography space, modern graphic illustration, a stylized lone boat with a fish hook merging into an abstract wave pattern, sophisticated and artistic, minimalist composition, muted color scheme`,
    sampleImage: "/assets/images/minimalist_poster_boat.jpg",
    tags: ["Kitob Muqovasi", "Editorial", "Tipografiya", "Nashriyot"]
  },
  {
    id: "sharks-encounter-dusk",
    title: "G'ira-shira Oqshomdagi Akulalar Hujumi",
    category: "visual",
    targetAI: "Midjourney v6 / DALL-E 3",
    aspectRatio: "16:9",
    description: "G'ira-shira osmon va xavfli qora to'lqinlar aro yog'och qayiqqa yaqinlashayotgan akulalarning o'tkir suzgichlari.",
    promptText: `Dramatic ocean dusk scene with predatory shark fins cutting through churning ocean waves approaching a lone wooden skiff in the Gulf Stream, moody twilight lighting, high literary tension, cinematic painting style --ar 16:9`,
    sampleImage: "/assets/images/cuban_coast_sharks.jpg",
    tags: ["Dramatizm", "Akulalar", "Kinematik", "Ziddiyat"]
  },
  {
    id: "3d-claymation-concept",
    title: "Zamonaviy 3D Minimalistik / Stilizatsiya",
    category: "3d",
    targetAI: "Midjourney / Blender Render / 3D Gen",
    aspectRatio: "16:9 / 1:1",
    description: "Mayin pastel ranglar, studiya yorug'ligi va tinch geometrik okean yuzasida suzayotgan qariya koncept-arti (Behance top uslubida).",
    promptText: `Modern 3D claymation and low-poly art style concept art of an old fisherman in a small stylized boat floating on a calm geometric ocean, pastel colors, soft studio lighting, clean minimal background, trendy design aesthetic, behance featured, 8k resolution`,
    tags: ["3D Art", "Claymation", "Low-poly", "Behance"]
  },
  {
    id: "ui-ux-banner-concept",
    title: "UI/UX Veb-sayt / Portfel Banner Konsepsiyasi",
    category: "ui",
    targetAI: "Midjourney / Figma AI / Stable Diffusion",
    aspectRatio: "16:9 (High-Tech)",
    description: "To'q rangli mavzu (Dark mode), chuqur ko'k gradient va neon chiziqlar vositasida ishlangan marlin va qayiq silueti.",
    promptText: `Modern web design banner concept for a literary project about 'The Old Man and the Sea', dark mode UI, deep blue gradient background, glowing neon minimalist line art of a marlin and a fisherman's boat, futuristic artistic storytelling layout, high-tech aesthetic, 4k`,
    tags: ["UI/UX", "Dark Mode", "Neon Line Art", "Veb Dizayn"]
  },
  {
    id: "academic-presentation-prompt",
    title: "Maktab & Universitet Loyiha Matni",
    category: "academic",
    targetAI: "ChatGPT / Claude / Gemini Pro",
    aspectRatio: "Matn / Taqdimot",
    description: "Xemingueyning 'Chol va dengiz' asari bo'yicha to'liq 5 qismli akademik taqdimot va slaydlar tuzilmasini generatsiya qilish so'rovi.",
    promptText: `Menga Ernest Xeminguyeyning 'Chol va dengiz' asari boʻyicha maktab/universitet loyihasi uchun mukammal reja va slaydlar tuzilmasini ishlab chiqib ber. Loyiha quyidagi boʻlimlarni oʻz ichiga olsin:

1. Asar syujeti va qisqacha mazmuni.
2. Bosh qahramon Santyagoning ruhiy va jismoniy obrazi tahlili.
3. Dengiz, baliq va akulalarning ramziy ma'nolari (simvolizm).
4. Asarning asosiy gʻoyasi ('Inson magʻlubiyat uchun yaratilmagan...').
5. Xulosa va asardan olinadigan saboqlar.`,
    tags: ["Akademik", "Taqdimot", "Universitet", "Tahlil"]
  },
  {
    id: "essay-500-words-prompt",
    title: "500 So'zlik Tahliliy Insho Matni So'rovi",
    category: "academic",
    targetAI: "Claude 3.7 / Gemini 2.5 / GPT-4o",
    aspectRatio: "Matn / Maqola",
    description: "Inson va tabiat munosabatlari, matonat va sabr-toqat mavzusida chuqur badiiy-falsafiy insho yaratish prompti.",
    promptText: `Ernest Xeminguyeyning 'Chol va dengiz' qissasidagi inson va tabiat oʻrtasidagi kurash, matonat va sabr-toqat mavzusida 500 ta soʻzdan iborat ta'sirli va chuqur tahliliy insho yozib ber. Inshoda Santyago obrazining ramziy ma'nosiga va asardan olinadigan asosiy xulosalarga alohida urgʻu berilsin.`,
    tags: ["Badiiy Insho", "500 So'z", "Esse", "Falsafa"]
  }
];
