# 🎨 Artist Landing Page Template

A modern, multilingual, single-page landing site template built with vanilla HTML, CSS, and JavaScript. No build step, no dependencies — just drop it on GitHub Pages.

## ✨ Features

- 🎬 **Optional YouTube background video** with mute/unmute toggle
- 🌐 **Trilingual by default** (English, Spanish, Japanese) — cycle with one button
- 👥 **Team/member cards** with graceful image fallbacks
- 🎵 **Built-in audio player page** with custom UI, playlist, and progress bar
- 📱 **Fully responsive** (mobile-first breakpoints)
- 🔗 **Configurable social links** — icons hide automatically when left empty
- 📄 **Zero dependencies** — pure HTML/CSS/JS
- 🚀 **GitHub Pages ready** — no build required

## 🚀 Quick Start

### 1. Get the code

Use this template (click the green **"Use this template"** button on GitHub) or clone it:

```bash
git clone https://github.com/YOUR_USERNAME/artist-landing-template.git
cd artist-landing-template
```

### 2. Edit `config.js`

This is the **only file you need to touch** for basic setup. Fill in your name, tagline, social links, members, and tracks.

### 3. Add your assets

- `assets/logo.png` — your logo (square works best)
- `assets/band-photos/person1.jpg`, etc. — member photos
- `recordings/track1.mp3`, etc. — your audio files

### 4. Enable GitHub Pages

1. Go to **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** / **root**
4. Save

Your site will be live at:

```
https://YOUR_USERNAME.github.io/artist-landing-template/
```

## ⚙️ Configuration Reference

All customization lives in `config.js`. Every option has a comment. Highlights:

| Key | Purpose |
| --- | --- |
| `siteName` | Browser tab title |
| `tagline` | Hero text (per language) |
| `logoPath` | Path to your logo image |
| `backgroundVideoId` | YouTube video ID, or `null` to disable |
| `members[]` | Array of team members |
| `social{}` | Social URLs (empty = icon hidden) |
| `contactEmail` | Used by the "Contact" button |
| `showsUrl` | Used by the "Shows" button |
| `tracks[]` | Audio playlist entries |

## 🎵 Adding Audio

1. Place `.mp3` files in the `recordings/` folder.
2. Reference them in `config.js` under `tracks`:

```javascript
{ file: "my-song.mp3", titles: { en: "My Song", es: "Mi Canción", ja: "私の歌" } }
```

## 🌐 Adding a Language

The template ships with **English**, **Spanish**, and **Japanese**. To add another:

1. Add it to every `titles` / `tagline` / `names` object in `config.js`.
2. Add the label to `LANG_LABELS` in both HTML files.
3. Add it to `LANG_CYCLE` in both HTML files.
4. Add `<span data-lang="xx">Your text</span>` for any static UI labels.

## 📁 File Structure

```
.
├── index.html
├── listen.html
├── config.js
├── README.md
├── LICENSE
├── assets/
│   ├── logo.png
│   └── band-photos/
│       └── (member photos)
└── recordings/
    └── (audio files)
```

## 🎨 Theming

Colors are centralized in CSS custom properties (edit once, applies everywhere):

| Color | Default | Used for |
| --- | --- | --- |
| Accent | `#c62828` | buttons, highlights |
| Overlay | `rgba(0,0,0,0.5)` | video dimmer |
| Background | `#1a1a1a` | fallback bg |

## 📄 License

MIT — free for personal and commercial use. Attribution appreciated but not required.

## 🙌 Credits

- Fonts: [Google Fonts](https://fonts.google.com/) — Playfair Display & Poppins
- Icons: [Font Awesome](https://fontawesome.com/)
- Background video: any YouTube URL
