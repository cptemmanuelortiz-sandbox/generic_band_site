// ============================================================
// SITE CONFIGURATION
// Edit this file to customize the template for your own use.
// ============================================================

const SITE_CONFIG = {
    // ---------- BRANDING ----------
    siteName: "Your Name or Band",           // Shows in browser tab
    tagline: {
        es: "Una descripción breve de quién eres.",
        en: "A short description of who you are.",
        ja: "あなたの短い紹介文。"
    },
    logoPath: "assets/logo.png",
    defaultLanguage: "en",                   // "es" | "en" | "ja"

    // ---------- BACKGROUND VIDEO ----------
    // YouTube video ID (the part after v= in the URL)
    // Set to null to disable video and use a solid background
    backgroundVideoId: null,
    backgroundStartTime: 0,
    backgroundOverlayOpacity: 0.5,

    // ---------- BAND / TEAM MEMBERS ----------
    // Photos live in assets/band-photos/
    // Set photo to null to show a generic user icon
    members: [
        {
            id: "member1",
            photo: "person1.jpg",
            names: {
                es: "Nombre Uno",
                en: "Name One",
                ja: "名前1"
            }
        },
        {
            id: "member2",
            photo: "person2.jpg",
            names: {
                es: "Nombre Dos",
                en: "Name Two",
                ja: "名前2"
            }
        },
        {
            id: "member3",
            photo: null,
            names: {
                es: "Nombre Tres",
                en: "Name Three",
                ja: "名前3"
            }
        }
    ],

    // ---------- SOCIAL MEDIA ----------
    // Leave a value empty ("") to hide that icon.
    social: {
        spotify:   "https://open.spotify.com/artist/EXAMPLE",
        youtube:   "https://www.youtube.com/@EXAMPLE",
        instagram: "https://www.instagram.com/EXAMPLE",
        facebook:  "",
        tiktok:    "https://www.tiktok.com/@EXAMPLE",
        bandcamp:  ""
    },

    // ---------- CONTACT / CTA LINKS ----------
    contactEmail: "hello@example.com",
    showsUrl: "",                            // Empty = shows "coming soon"

    // ---------- AUDIO / PLAYLIST ----------
    // Audio files live in recordings/
    audioFolder: "recordings",
    tracks: [
        {
            file: "track1.mp3",
            titles: {
                es: "Canción Uno",
                en: "Song One",
                ja: "曲1"
            }
        },
        {
            file: "track2.mp3",
            titles: {
                es: "Canción Dos",
                en: "Song Two",
                ja: "曲2"
            }
        },
        {
            file: "track3.mp3",
            titles: {
                es: "Canción Tres",
                en: "Song Three",
                ja: "曲3"
            }
        }
    ],

    // ---------- FOOTER ----------
    copyrightYear: new Date().getFullYear(),
    footerName: "Your Name or Band"
};
