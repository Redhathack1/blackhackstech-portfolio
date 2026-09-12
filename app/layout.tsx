import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BlackHacksTech — Samuel Oladapo | Full-Stack Engineer | SDET & AI Automation Engineer",
  description:
    "Portfolio of Oluwaferanmi Samuel Oladapo — Full-Stack Engineer, SDET & AI Automation Engineer specialising in enterprise web applications, intelligent test automation, and Generative AI systems. Available for hire.",
  keywords: [
    "Full-Stack Engineer",
    "SDET",
    "AI Automation Engineer",
    "AI Engineer",
    "Software Developer",
    "BlackHacksTech",
    "Samuel Oladapo",
    "Playwright",
    "LangChain",
    "Test Automation",
    "React",
    "Node.js",
    "MERN Stack",
  ],
  authors: [{ name: "Oluwaferanmi Samuel Oladapo" }],
  openGraph: {
    title: "BlackHacksTech — Samuel Oladapo",
    description: "Full-Stack Engineer, SDET & AI Automation Engineer building intelligent systems.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "BlackHacksTech — Samuel Oladapo",
    description: "Full-Stack Engineer, SDET & AI Automation Engineer building intelligent systems.",
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
