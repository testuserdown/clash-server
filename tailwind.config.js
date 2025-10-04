/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        // tailwind.config.js örneği
        extend: {
            colors: {
                background: "#1a0f0a",
                card: "#2a1a12",
                primary: {
                    DEFAULT: "#ff9c3c",
                    foreground: "#fff6e0",
                },
                accent: {
                    DEFAULT: "#ffcc66",
                    foreground: "#1a0f0a",
                },
                secondary: {
                    DEFAULT: "#332218",
                },
                border: "#e48c3c55",
                foreground: "#fff6e0",
                "muted-foreground": "#c8a68f",
            },
            // colors: {
            //     background: "#0e0e10",        // Çok koyu gri-siyah, noir zemin
            //     card: "#1a1a1f",              // Daha açık gri-siyah, kart arkaplanı
            //     primary: {
            //         DEFAULT: "#3aa7ff",         // Neon mavi (karakter aksesuarlarında görülen parlak mavi)
            //         foreground: "#e6f7ff",      // Açık mavi-beyaz metin
            //     },
            //     accent: {
            //         DEFAULT: "#ff3c3c",         // Kan kırmızı (Clash of Clans logosu + detaylar)
            //         foreground: "#1a0f0a",      // Kontrast için koyu fon
            //     },
            //     secondary: {
            //         DEFAULT: "#2c2c34",         // Orta koyulukta gri
            //     },
            //     border: "#3aa7ff55",          // Yarı şeffaf neon mavi çizgiler
            //     foreground: "#f5f5f5",        // Genel metin için açık gri-beyaz
            //     "muted-foreground": "#a1a1a8", // Pasif metinler için gri
            // }
            // colors: {
            //     background: "#0e0e10",        // Çok koyu siyah-gri zemin
            //     card: "#1a1a1f",              // Kart arka planı, koyu gri
            //     primary: {
            //         DEFAULT: "#ff3c3c",         // Ana kırmızı (butonlar, başlıklar)
            //         foreground: "#fff0f0",      // Açık kırmızımsı beyaz metin
            //     },
            //     accent: {
            //         DEFAULT: "#3aa7ff",         // Neon mavi (küçük ikonlar, efektler)
            //         foreground: "#e6f7ff",      // Açık mavi-beyaz kontrast
            //     },
            //     secondary: {
            //         DEFAULT: "#2c2c34",         // Orta koyulukta gri
            //     },
            //     border: "#ff3c3c55",          // Yarı şeffaf kırmızı kenarlıklar
            //     foreground: "#f5f5f5",        // Ana metin rengi (açık gri-beyaz)
            //     "muted-foreground": "#a1a1a8", // Soluk gri, açıklama metinleri için
            // }

        }

    },
    plugins: [],
}
