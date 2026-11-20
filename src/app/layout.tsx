import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "[PLACEHOLDER] Nutrição materno-infantil e neurodivergência",
  description:
    "[PLACEHOLDER] Nutricionista materno-infantil com foco em crianças neurodivergentes. Atendimento acolhedor para a criança e a família.",
  openGraph: {
    title: "[PLACEHOLDER] Nutrição materno-infantil e neurodivergência",
    description: "[PLACEHOLDER] Descrição para compartilhamento.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
