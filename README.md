# 🎨 Artist Landing Page Template

A modern, multilingual, single-page landing site template built with **vanilla HTML, CSS, and JavaScript**. No build step. No dependencies. Just drop it on GitHub Pages and go.

Perfect for musicians, bands, DJs, visual artists, podcasters, or anyone who wants a clean, animated landing page with an integrated audio player.

---

## 📋 Table of Contents

- [Features](#-features)
- [Live Demo](#-live-demo)
- [Quick Start](#-quick-start)
- [Repository Structure](#-repository-structure)
- [Configuration Guide](#️-configuration-guide)
- [Adding Your Assets](#-adding-your-assets)
- [Deploying to GitHub Pages](#-deploying-to-github-pages)
- [Adding a New Language](#-adding-a-new-language)
- [Theming & Customization](#-theming--customization)
- [Troubleshooting](#-troubleshooting)
- [License](#-license)
- [Credits](#-credits)

---

## ✨ Features

- 🎬 **Optional YouTube background video** with mute/unmute toggle
- 🌐 **Trilingual by default** — English, Spanish, Japanese (cycle with one button)
- 👥 **Team/member cards** with graceful image fallbacks
- 🎵 **Built-in audio player page** with custom UI, playlist, seek bar, and volume control
- 📱 **Fully responsive** — mobile-first breakpoints at 768px, 480px, 360px
- 🔗 **Configurable social links** — icons hide automatically when left empty
- 🎨 **Single config file** — customize everything from one place (`config.js`)
- 📄 **Zero dependencies** — pure HTML/CSS/JS, no npm, no build tools
- 🚀 **GitHub Pages ready** — deploy in under 2 minutes
- ♿ **Semantic & accessible** — ARIA labels, keyboard-friendly controls

---

## 🌐 Live Demo

See it in action: **[https://YOUR_USERNAME.github.io/artist-landing-template/](https://YOUR_USERNAME.github.io/artist-landing-template/)**

---

## 🚀 Quick Start

### 1. Get the code

Click the green **"Use this template"** button on GitHub, or clone it:

```bash
git clone https://github.com/YOUR_USERNAME/artist-landing-template.git
cd artist-landing-template
```

### 2. Edit `config.js`

This is the **only file you need to touch** for basic setup. Open it and fill in your name, tagline, social links, members, and tracks. Every option has an inline comment explaining what it does.

### 3. Add your assets

Drop your files into the pre-made folders:

- `assets/logo.png` — your logo (square works best)
- `assets/band-photos/` — member photos (`.jpg` or `.png`)
- `recordings/` — your audio files (`.mp3` recommended)

See [Adding Your Assets](#-adding-your-assets) below for exact filenames.

### 4. Enable GitHub Pages

1. Go to **Settings → Pages** in your repo
2. Source: **Deploy from a branch**
3. Branch: **main** / **root** (`/`)
4. Click **Save**

Your site goes live in ~60 seconds at:

```
https://YOUR_USERNAME.github.io/artist-landing-template/
```

---

## 📁 Repository Structure

```
artist-landing-template/
├── index.html                # Main landing page
├── listen.html               # Audio player page
├── config.js                 # ⭐ ALL customization lives here
├── README.md                 # This file
├── LICENSE                   # MIT license
├── .gitignore
├── assets/
│   ├── logo.png              # Your logo (used on both pages)
│   └── band-photos/
│       ├── .gitkeep          # Placeholder so Git tracks the folder
│       ├── person1.jpg       # Referenced in config.js
│       └── person2.jpg       # Referenced in config.js
└── recordings/
    ├── .gitkeep              # Placeholder so Git tracks the folder
    ├── track1.mp3            # Referenced in config.js
    ├── track2.mp3            # Referenced in config.js
    └── track3.mp3            # Referenced in config.js
```

**Important:** Git does not track empty folders. That's why each asset folder contains a `.gitkeep` file. You can delete the `.gitkeep` once you've added real files.

---

## ⚙️ Configuration Guide

All customization lives in **`config.js`**. Here's the full reference:

### Branding

```javascript
siteName: "Your Name or Band",           // Browser tab title
logoPath: "assets/logo.png",             // Path to your logo
defaultLanguage: "en",                   // "es" | "en" | "ja"
```

### Tagline (hero text)

```javascript
tagline: {
    es: "Una descripción breve de quién eres.",
    en: "A short description of who you are.",
    ja: "あなたの短い紹介文。"
}
```

### Background video

```javascript
backgroundVideoId: null,        // YouTube video ID, e.g. "dQw4w9WgXcQ"
                                 // Leave as null for a solid gradient background
backgroundStartTime: 0,          // Seconds to start the video at
backgroundOverlayOpacity: 0.5    // Dark overlay opacity (0.0–1.0)
```

### Members / Team

```javascript
members: [
    {
        id: "member1",           // Unique ID (must be unique)
        photo: "person1.jpg",    // File in assets/band-photos/ — or null for a fallback icon
        names: {
            es: "Nombre Uno",
            en: "Name One",
            ja: "名前1"
        }
    },
    // Add more members here
]
```

Set `photo: null` to display a generic user icon instead of an image.

### Social links

```javascript
social: {
    spotify:   "https://open.spotify.com/artist/EXAMPLE",
    youtube:   "https://www.youtube.com/@EXAMPLE",
    instagram: "https://www.instagram.com/EXAMPLE",
    facebook:  "",                                 // Empty = icon hidden
    tiktok:    "https://www.tiktok.com/@EXAMPLE",
    bandcamp:  ""                                  // Empty = icon hidden
}
```

Leave any value as `""` (empty string) to hide that icon entirely.

### Contact & CTA links

```javascript
contactEmail: "hello@example.com",   // Used by the "Contact Us" button
showsUrl: "",                        // Empty = shows "coming soon" alert
```

### Audio tracks

```javascript
audioFolder: "recordings",           // Where your MP3s live

tracks: [
    {
        file: "track1.mp3",          // Filename only — folder comes from audioFolder
        titles: {
            es: "Canción Uno",
            en: "Song One",
            ja: "曲1"
        }
    },
    // Add more tracks here
]
```

### Footer

```javascript
copyrightYear: new Date().getFullYear(),   // Auto-updates each year
footerName: "Your Name or Band"            // Shown in the copyright line
```

---

## 🎵 Adding Your Assets

### 1. The logo

Replace `assets/logo.png` with your own logo. Square images work best (the template renders it as a circular avatar). Recommended size: **500×500px or larger**. Format: `.png` with transparency is ideal.

### 2. Member photos

1. Place your photos in `assets/band-photos/`
2. Update the `photo` value in `config.js` to match the exact filename:

```javascript
{ id: "member1", photo: "jane-doe.jpg", names: { ... } }
```

**Filename rules:**
- ✅ Case-sensitive on GitHub Pages (`jane.jpg` ≠ `Jane.jpg`)
- ✅ No spaces in filenames — use `-` or `_` instead
- ✅ Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`

### 3. Audio files

1. Place `.mp3` files in `recordings/`
2. Add entries to the `tracks` array in `config.js`:

```javascript
{ file: "my-first-song.mp3", titles: { en: "My First Song", es: "Mi Primera Canción", ja: "最初の歌" } }
```

**Audio tips:**
- **Format:** `.mp3` is universally supported (`.ogg` and `.wav` also work, but `.mp3` is safest)
- **Bitrate:** 128–192 kbps is fine for web streaming
- **File size:** Try to keep each track under ~5 MB for fast loading
- **GitHub limits:** Individual files max 100 MB; repos recommended under 1 GB

### 4. Removing the `.gitkeep` files

Once you've added at least one real file to a folder, you can safely delete the `.gitkeep` inside it:

```bash
rm assets/band-photos/.gitkeep
rm recordings/.gitkeep
```

---

## 🚀 Deploying to GitHub Pages

### One-time setup

1. Push your repo to GitHub
2. Go to **Settings → Pages**
3. Under **Build and deployment**, choose:
   - **Source:** Deploy from a branch
   - **Branch:** `main` (or `master`)
   - **Folder:** `/ (root)`
4. Click **Save**

### Verify deployment

- GitHub takes 30–90 seconds to build the first time
- Check the **Actions** tab for build status
- Your live URL appears in **Settings → Pages** when ready

### Updating your site

Just `git push` — GitHub Pages automatically rebuilds on every push to the configured branch. No manual rebuild needed.

---

## 🌐 Adding a New Language

The template ships with **English**, **Spanish**, and **Japanese**. Adding a fourth language takes about 5 minutes.

### Step 1 — Add the language to `config.js`

Every `titles` / `tagline` / `names` object needs the new key. For example, to add French (`fr`):

```javascript
tagline: {
    en: "A short description.",
    es: "Una descripción breve.",
    ja: "短い紹介文。",
    fr: "Une courte description."    // 👈 new
}
```

Do this for:
- `tagline`
- Every member's `names`
- Every track's `titles`

### Step 2 — Update `LANG_LABELS` in both HTML files

In `index.html` and `listen.html`, find:

```javascript
const LANG_LABELS = { es: 'Español', en: 'English', ja: '日本語' };
```

Add your new language:

```javascript
const LANG_LABELS = { es: 'Español', en: 'English', ja: '日本語', fr: 'Français' };
```

### Step 3 — Update `LANG_CYCLE` in both HTML files

Find:

```javascript
const LANG_CYCLE = { es: 'en', en: 'ja', ja: 'es' };
```

Update to include your new language in the cycle:

```javascript
const LANG_CYCLE = { es: 'en', en: 'ja', ja: 'fr', fr: 'es' };
```

### Step 4 — Add `<span data-lang="...">` tags for static UI text

Any hardcoded UI text in `index.html` / `listen.html` uses this pattern:

```html
<span data-lang="en">Listen Now</span>
<span data-lang="es">Escuchar Ahora</span>
<span data-lang="ja">今すぐ聴く</span>
```

Add a `<span data-lang="fr">...</span>` sibling for each new translation.

---

## 🎨 Theming & Customization

### Changing the accent color

Search for `#c62828` in both `index.html` and `listen.html` and replace with your brand color. It appears in:
- Buttons
- Section title underlines
- Progress bar fill
- Active playlist item highlight
- Volume slider fill

### Changing fonts

The template uses **Playfair Display** (headings) and **Poppins** (body). To swap them:

1. Edit the Google Fonts `<link>` tags in the `<head>` of both HTML files
2. Update `font-family` in the `<style>` blocks

### Changing the background gradient

When no YouTube video is set, the background falls back to a gradient defined in the `.video-container` styles. Search for:

```css
background: linear-gradient(135deg, #1a1a1a 0%, #000 100%);
```

Replace with your preferred gradient or solid color.

---

## 🛠️ Troubleshooting

### My logo is broken (missing image icon)

- Confirm the file `assets/logo.png` actually exists
- Check that `logoPath` in `config.js` matches the exact path and filename
- Case matters: `logo.png` ≠ `Logo.png` on GitHub Pages

### My member photos aren't showing

- Check `assets/band-photos/` — do the filenames **exactly** match the `photo` values in `config.js`?
- Open the browser console (F12) and look for 404 errors — they'll tell you exactly which path is wrong
- Remember: filenames are case-sensitive on GitHub Pages

### My audio won't play

- Confirm the `.mp3` file exists in `recordings/`
- Check that the `file` value in `config.js` matches the exact filename (with `.mp3` extension)
- Open the browser console — you'll see a 404 if the path is wrong
- Some browsers block autoplay — the user must click **Play** first (this is by design)

### The background video won't autoplay

- This is normal. Modern browsers block unmuted autoplay until the user interacts with the page
- The template shows a "Click to start" overlay in this case — that's the expected behavior
- Alternatively, set `backgroundVideoId: null` for a cleaner, video-free experience

### Language toggle cycles wrong

- Check that `LANG_LABELS` and `LANG_CYCLE` in both `index.html` and `listen.html` are **in sync** — they must use the same set of language keys

### My folders are missing on GitHub after pushing

- Git doesn't track empty folders. Add a `.gitkeep` file inside each one:

```bash
touch assets/band-photos/.gitkeep
touch recordings/.gitkeep
git add .
git commit -m "Add folder structure"
git push
```

### My site works locally but breaks on GitHub Pages

- **Most likely cause:** absolute paths starting with `/`
- This template uses only relative paths (no leading slash) — do **not** add one
- ❌ `logoPath: "/assets/logo.png"` breaks on project-site Pages
- ✅ `logoPath: "assets/logo.png"` works everywhere

---

## 📄 License

This project is released under the **MIT License** — see the [LICENSE](LICENSE) file for details.

You're free to use this template for:
- ✅ Personal projects
- ✅ Client work
- ✅ Commercial applications
- ✅ Educational purposes

Attribution is appreciated but not required.

---

## 🙌 Credits

- **Fonts:** [Google Fonts](https://fonts.google.com/) — Playfair Display & Poppins
- **Icons:** [Font Awesome 6](https://fontawesome.com/) (free tier)
- **Background video:** Any YouTube URL you choose
- **Template design & code:** Original work, released under MIT

---

## 💡 Ideas for Extending the Template

Some natural next steps if you want to grow this further:

- 📅 **Events page** — pull shows from a JSON file
- 📰 **News/blog section** — simple markdown-based posts
- 🛒 **Merch/Shop links** — integrate with Printful, Gumroad, or Bandcamp
- 📸 **Photo gallery** — a masonry grid lightbox
- 📧 **Newsletter signup** — Mailchimp / Buttondown embed
- 🌙 **Dark/light theme toggle** — CSS variables make this easy
- 🔗 **Contact form** — Formspree or Netlify Forms

All of these can be added without a build step, keeping the "drop it on GitHub Pages" simplicity.

---

## ❤️ Contributing

This is a template meant to be forked and customized — not really a library to contribute to. But if you spot a bug or want to suggest an improvement, feel free to open an issue on GitHub.

---

**Made with care. Enjoy, and rock on.** 🎸
