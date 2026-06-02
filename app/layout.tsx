import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Constant Blaszyk — Portfolio | Développeur Full-Stack",
  description:
    "Portfolio de Constant Blaszyk, développeur Full-Stack passionné. Étudiant BUT3 Informatique en alternance chez Maisons & Cités. TypeScript, Java, Flutter, Docker, Kubernetes.",
  keywords: [
    "Constant Blaszyk",
    "développeur",
    "full-stack",
    "portfolio",
    "TypeScript",
    "Java",
    "Flutter",
    "Docker",
    "Kubernetes",
    "BUT Informatique",
  ],
  authors: [{ name: "Constant Blaszyk", url: "https://github.com/Thenoob24" }],
  openGraph: {
    title: "Constant Blaszyk — Portfolio",
    description:
      "Développeur Full-Stack | BUT3 Informatique | Maisons & Cités",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/108570445?v=4",
        width: 400,
        height: 400,
        alt: "Constant Blaszyk",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Constant Blaszyk — Portfolio",
    description:
      "Développeur Full-Stack | BUT3 Informatique | Maisons & Cités",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
