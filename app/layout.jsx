import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  metadataBase: new URL("https://ezcopy-buttons.vercel.app"),
  title: "EZ COPY",
  description: "click. paste. done.",
  referrer: "origin-when-cross-origin",
  keywords: ["Buttons, Copy, Paste, CSS, Next.js, NEXT, JavaScript, JS, React, Vercel"],
  creator: "https://egxo.dev.",
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: false,
    googleBot: {
      index: true,
      follow: false,
    },
  },
  openGraph: {
    title: "EZ COPY",
    description: "Buttons, Copy, Easy, Next.js, TailwindCSS, React, Vercel",
    url: "https://devbuild-resume.vercel.app/",
    siteName: "ezcopybuttons",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Buttons, Copy, Easy, Next.js, TailwindCSS, React, Vercel",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevBuild Resume!",
    description: "Buttons, Copy, Easy, Next.js, TailwindCSS, React, Vercel",
    creator: "@eg__xo",
    site: "@eg__xo",
    images: [
      {
        url: "/twitter-image.png",
        width: 1200,
        height: 630,
        alt: "Buttons, Copy, Easy, Next.js, TailwindCSS, React, Vercel",
      },
    ],
  },
  icons: {
    icon: [
      {url: "/favicon.ico", sizes: "32x32", type: "image/x-icon"},
      {url: "/icon.png", sizes: "96x96", type: "image/png"},
      {url: "/icon.svg", type: "image/svg+xml"},
    ],
    apple: [{url: "/apple-icon.png", sizes: "180x180", type: "image/png"}],
  },
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
