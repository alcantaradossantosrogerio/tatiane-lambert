import type { Metadata } from "next";
import { Bodoni_Moda, Pinyon_Script, Montserrat } from "next/font/google";
import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-bodoni",
  style: ["normal", "italic"],
});

const pinyon = Pinyon_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pinyon",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Dra. Tatiane Lambert | Estética Avançada e Natural em Rio Verde - GO",
  description: "Tratamentos estéticos avançados com rigor clínico e naturalidade no Parque dos Buritis, Rio Verde - GO. Botox, Bioestimuladores, Preenchimento Labial e controle de Melasma.",
  keywords: [
    "Dra. Tatiane Lambert",
    "Tatiane Lambert Estética",
    "Estética Rio Verde",
    "Estética Avançada Rio Verde",
    "Botox Rio Verde",
    "Preenchimento Labial Rio Verde",
    "Melasma Rio Verde",
    "Bioestimulador de Colágeno Rio Verde",
    "Harmonização Facial Rio Verde"
  ],
  authors: [{ name: "Dra. Tatiane Lambert" }],
  openGraph: {
    title: "Dra. Tatiane Lambert | Estética Avançada e Natural em Rio Verde - GO",
    description: "Espaço exclusivo de estética clínica avançada. Agende sua consulta avaliativa e realce sua beleza com elegância e segurança.",
    url: "https://tatianelambert.com.br",
    siteName: "Dra. Tatiane Lambert",
    locale: "pt_BR",
    type: "website",
  },
};

import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${bodoni.variable} ${pinyon.variable} ${montserrat.variable} scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-nude-50 text-luxury-black font-sans">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}


