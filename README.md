# 🎉 Wish Karo — Festival Greetings & Personalized Wishes

> **"Share Happiness, Spread Wishes"**  
> A festive, mobile-first Next.js web application for creating beautiful personalized greeting cards and sharing them through WhatsApp.

[![Next.js](https://img.shields.io/badge/Next.js-16.4-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3-blue?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript)](https://www.typescriptlang.org/)

---

## ✨ Features

- 🎊 **Festival & Occasion Templates**: Ready-to-use themes and greetings for **Dussehra, Diwali, Holi, Birthday, Anniversary, New Year, and Custom Wishes**.
- 💌 **Personalized Shareable Links**:
  - Encodes sender name (`from`), recipient name (`to`), festival (`occasion`), message, and theme into safe URL query parameters.
  - When shared on WhatsApp, sends **only** a warm short invitation and the private greeting link (the full greeting text is not leaked in the chat).
- 🌸 **Rich Festive Animations**:
  - Full-screen gently falling flower petals (🌸, 🌺, 🌼, 🏵️, 🍂) and sparkles (✨).
  - Floating ambient particles and drifting decorative festival emojis.
  - Animated pulsing heart flourish (`❤️`) on sender signatures.
  - Accessible `@media (prefers-reduced-motion)` mode for sensitive users.
- 🎨 **Card Customization & Themes**:
  - 6 color themes: *Royal Purple*, *Warm Sunset*, *Festive Red*, *Ocean Blue*, *Forest Green*, and *Golden Glow*.
  - Hindi (🇮🇳) and English (🇬🇧) message templates.
  - Option to **Choose a Template** or **Write My Own Message**.
- 👁️ **Live Real-Time Preview**: Card updates dynamically as the user types sender/recipient names, selects themes, or customizes messages.
- 📲 **Seamless WhatsApp Sharing**: One-tap share button formatted with `https://wa.me/?text=` + a **Copy Wish Link** button.
- 💖 **Viral "Create Your Own Wish" Flow**: Recipients can open their greeting card, enjoy the animation, and tap the CTA at the bottom to create and share their own wish with family and friends.
- 📢 **Google AdSense Integration**: Pre-configured responsive banner ad units with fallback states.

---

## 🚀 Quick Start

### 1. Prerequisites
Ensure you have **Node.js 18+** installed on your system.

### 2. Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/wish-karo.git
cd wish-karo
npm install
```

### 3. Environment Variables (Optional for Production)
Create a `.env.local` file:

```env
# Domain used when generating WhatsApp share links (defaults to current window.location.origin)
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### 4. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ Project Structure

```text
app/
├── components/
│   ├── ui/
│   │   ├── Button.tsx          # Reusable button (primary, outline, whatsapp, ghost)
│   │   ├── Input.tsx           # Accessible text input with label and validation
│   │   ├── Select.tsx          # Styled festival dropdown selector
│   │   ├── Textarea.tsx        # Styled textarea with character counter
│   │   └── Toast.tsx           # Floating toast notification system
│   ├── AdBanner.tsx            # Google AdSense responsive ad component
│   ├── FallingPetals.tsx       # GPU-accelerated falling flower petals & sparkles
│   ├── FestivalCard.tsx        # Festival grid selection card on homepage
│   ├── FloatingElements.tsx    # Ambient drifting festival emojis
│   ├── Footer.tsx              # Application footer
│   ├── GreetingPreview.tsx     # Central greeting card preview component
│   ├── Navbar.tsx              # Sticky header with branding and action CTA
│   ├── ParticleBackground.tsx  # CSS-only rising ambient particle dots
│   ├── ShareActions.tsx        # WhatsApp share and copy link controls
│   └── ThemeSelector.tsx       # Radio palette theme picker
├── create/
│   └── page.tsx                # Wish creation & customization page (Client Component)
├── lib/
│   ├── festivals.ts            # Festival metadata, emojis, and gradient styles
│   ├── templates.ts            # Hindi and English wish message templates
│   ├── themes.ts               # Card color schemes and theme configurations
│   └── utils.ts                # URL query encoding, WhatsApp invite builder & clipboard
├── wish/
│   ├── WishViewerClient.tsx    # Interactive full-screen greeting card view
│   └── page.tsx                # Dynamic /wish page reading URL searchParams
├── globals.css                 # Tailwind CSS v4, custom keyframe animations & theme variables
├── layout.tsx                  # Root layout with Geist font and AdSense script
└── page.tsx                    # Landing homepage with hero and festival browser
```

---

## 🔗 URL Query Parameters Specification

The greeting viewer (`/wish`) parses these URL parameters safely:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `from` | `string` | **Yes** | Sender name signed on the card (max 50 chars). |
| `to` | `string` | No | Recipient name (e.g. `Rahul`). Defaults to `मित्र` if omitted. |
| `occasion` | `string` | No | Festival ID (`dussehra`, `diwali`, `holi`, `birthday`, etc.). |
| `message` | `string` | **Yes** | Festive wish message body (URL encoded). |
| `theme` | `string` | No | Card theme palette ID (defaults to `royal-purple`). |

**Example Link**:
```
https://your-domain.com/wish?from=Gopal&to=Rahul&occasion=dussehra&message=...&theme=royal-purple
```

---

## 📦 Scripts

- `npm run dev` — Starts local development server with Turbopack.
- `npm run build` — Creates an optimized production build.
- `npm run start` — Starts production server.
- `npm run lint` — Runs ESLint checks.

---

## 🛡️ Security & Privacy
- **Zero Database Required**: All personalized data is encoded client-side via URL parameters without storing user personal information.
- **Untrusted Input Sanitization**: Text inputs are capped, stripped of malformed strings, and rendered as safe plain text (no HTML injection risk).

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
