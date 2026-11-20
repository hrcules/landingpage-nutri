import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "[NOME DA NUTRICIONISTA] | Nutrição materno-infantil",
  description:
    "Acompanhamento nutricional materno-infantil, com olhar atento para crianças neurodivergentes e suas famílias.",
  openGraph: {
    title: "[NOME DA NUTRICIONISTA] | Nutrição materno-infantil",
    description: "Alimentação com cuidado e respeito ao ritmo da sua criança.",
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
