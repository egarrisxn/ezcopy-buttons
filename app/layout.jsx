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
  openGraph: {
    title: "EZ COPY",
    description: "Buttons, Copy, Easy, Next.js, TailwindCSS, React, Vercel",
    url: "https://ezcopy-buttons.vercel.app/",
    siteName: "ezcopybuttons",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevBuild Resume!",
    description: "Buttons, Copy, Easy, Next.js, TailwindCSS, React, Vercel",
    creator: "@eg__xo",
    site: "@eg__xo",
  },
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
          <head>
        <meta name="apple-mobile-web-app-title" content='EZ COPY' />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
