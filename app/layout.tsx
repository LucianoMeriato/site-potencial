import type { Metadata } from "next";
import { Inter, Fraunces, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "+Potencial Ensino Multidisciplinar | Direção certa para sua aprovação",
  description:
    "Preparação completa para ENEM, vestibulares, redação e acompanhamento escolar com metodologia, presença e foco em resultados.",
  keywords: [
    "ENEM",
    "Vestibular",
    "Redação",
    "Cursinho",
    "Ensino Multidisciplinar",
    "+Potencial",
    "UFMG",
    "UFV",
    "CEFET",
  ],
  openGraph: {
    title: "+Potencial Ensino Multidisciplinar",
    description:
      "Direção certa. Estudo inteligente. Aprovação com presença.",
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${fraunces.variable} ${caveat.variable}`}>
      <body className="font-sans antialiased text-navy bg-paper">
        {children}
      </body>
    </html>
  );
}
