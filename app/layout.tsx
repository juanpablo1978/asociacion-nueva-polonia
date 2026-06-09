import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Importación oficial
import "./globals.css";

// Configuramos la tipografía con los pesos que usaste en Figma
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter", // Variable para inyectar en el CSS
});

export const metadata: Metadata = {
  title: "Asociación Civil Nueva Polonia",
  description: "Sitio institucional y cultural de la Asociación Civil Nueva Polonia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      {/* Inyectamos la clase de la fuente en el body junto con el antialiased */}
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
