import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BlackHacksTech — Samuel Oladapo | SDET & AI Engineer",
  description:
    "Portfolio of Oluwaferanmi Samuel Oladapo — SDET & AI Engineer specialising in intelligent automation, backend testing frameworks, and Generative AI integration. Available for hire.",
  keywords: [
    "SDET",
    "AI Engineer",
    "Software Developer",
    "BlackHacksTech",
    "Samuel Oladapo",
    "Playwright",
    "LangChain",
    "Full Stack Developer",
    "Test Automation",
    "MERN Stack",
  ],
  authors: [{ name: "Oluwaferanmi Samuel Oladapo" }],
  openGraph: {
    title: "BlackHacksTech — Samuel Oladapo",
    description: "SDET & AI Engineer building intelligent automation systems.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "BlackHacksTech — Samuel Oladapo",
    description: "SDET & AI Engineer building intelligent automation systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Intercept unhandled extension errors to avoid Next.js dev overlay crash
                window.addEventListener('error', function(event) {
                  if (
                    event.filename && (
                      event.filename.indexOf('chrome-extension://') !== -1 ||
                      event.filename.indexOf('moz-extension://') !== -1
                    )
                  ) {
                    event.stopImmediatePropagation();
                  }
                  if (event.message && event.message.indexOf('ethereum') !== -1) {
                    event.stopImmediatePropagation();
                  }
                }, true);
                
                window.addEventListener('unhandledrejection', function(event) {
                  if (
                    event.reason && 
                    event.reason.stack && (
                      event.reason.stack.indexOf('chrome-extension://') !== -1 ||
                      event.reason.stack.indexOf('moz-extension://') !== -1
                    )
                  ) {
                    event.preventDefault();
                  }
                }, true);
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
