// src/app/layout.tsx
import type { Metadata } from "next";
// Import font từ Google
import { Pacifico, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";

// Cấu hình font
const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400", // Pacifico chỉ có 1 trọng lượng là 400
  variable: "--font-pacifico", // Đặt tên biến CSS mới
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "QuizVerse",
  description: "Take cute quizzes & share with friends!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        // Chỉ đặt font và màu chữ mặc định. Màu nền chính sẽ do div bên trong đảm nhiệm
        className={`${pacifico.variable} ${poppins.variable} font-sans text-brand-white min-h-screen`}
      >
        {/* 1. LỚP NỀN MÀU (dark-navy) */}
        <div className="fixed inset-0 bg-dark-navy z-[-2]"></div>

        {/* 2. LỚP NỀN PATTERN */}
        <div
          className="fixed inset-0 z-[-1]"
          style={{
            backgroundImage: "url('/Background.png')",
            backgroundRepeat: "repeat",
            backgroundPosition: "center center",
            filter: "invert(1)", // Đảo màu pattern (đen thành trắng)
            opacity: "0.5", // Làm mờ pattern
          }}
        ></div>

        {/* HEADER */}
        <Header />
        <main className="relative z-10 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
