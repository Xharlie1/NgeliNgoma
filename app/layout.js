import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

// Load fonts
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});

// SEO & metadata config
export const metadata = {
  title: "Ngeli Ngoma | Model & Advocate",
  description:
    "Ngeli Ngoma is a young model and passionate advocate for the rights and welfare of street children in her community.",
  keywords: [
    "Ngeli Ngoma",
    "Ngeli Ngoma young model",
    "street kids advocate",
    "Little miss Africa toto category winner 2024",
    "ngweli ngoma modeling",
    "Ngeli Ngoma ",
  ],
  creator: "Ngeli Ngoma",
  authors: [{ name: "Ngeli Ngoma", url: "https://ngelingoma.vercel.app/" }],
  metadataBase: new URL("https://ngelingoma.vercel.app/"), 
  openGraph: {
    title: "Ngeli Ngoma | Model & Advocate",
    description:
      "Follow Ngeli Ngoma, a young fashion model and strong voice for homeless and street-connected children.",
    url: "https://ngelingoma.vercel.app/",
    siteName: "Ngeli Ngoma",
    images: [
      {
        url: "https://ngelingoma.vercel.app/BG.jpg", 
        width: 1200,
        height: 630,
        alt: "Ngeli Ngoma posing as a model and helping kids",
      },
    ],
    locale: "en_ZM",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ngeli Ngoma | Model & Advocate",
    description:
      "Model. Activist. Changemaker. Ngeli Ngoma is changing the world for street kids.",
    creator: "@NgeliNgoma", // Replace with real handle
    images: ["https://ngelingoma.vercel.app/BG27.jpg"],
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${ovo.variable}`}>
      <body
        className="font-sans antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white"
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
