"use client";
import { useState } from "react";
import BigScallop from "./BigScallop";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-30">
      <div className="relative w-full">
        {/* === VIỀN TRÊN (TOP BORDER) === */}
        <BigScallop
          position="top"
          colorClass="bg-white"
          className="z-10 -translate-y-24 -translate-x-5 h-16"
        />
        <BigScallop
          position="top"
          colorClass="bg-soft-pink"
          className="z-0 -translate-y-12 -translate-x-28 "
        />

        {/* Nav nằm trong header để dính kèm với ScallopBorder */}
        <nav className="absolute top-0 left-6 right-10 z-40 flex justify-between items-center mx-auto gap-10 pointer-events-auto">
          <h1 className="font-pacifico text-hot-pink text-3xl py-6">
            Quiz Verse
          </h1>
          {/* === MENU DESKTOP === */}
          {/* // <-- THAY ĐỔI 1: Thêm 'hidden' và 'lg:flex'
            // - 'hidden':  Ẩn mặc định (trên mobile)
            // - 'lg:flex': Hiện (dạng flex) trên màn hình 'lg' (desktop) trở lên
          */}
          <div className="hidden lg:flex gap-7 ">
            <button className="bg-hot-pink border-hot-pink text-white font-semibold py-2 px-6 rounded-3xl shadow-xl transform transition duration-200 ease-out hover:bg-[#fef9fb] hover:text-hot-pink hover:border-hot-pink border-2 hover:scale-105">
              Signup
            </button>
            <button className="bg-hot-pink border-hot-pink text-white font-semibold py-2 px-6 rounded-3xl shadow-xl transform transition duration-200 ease-out hover:bg-[#fef9fb] hover:text-hot-pink hover:border-hot-pink border-2 hover:scale-105">
              Login
            </button>
          </div>

          {/* === NÚT HAMBURGER (MOBILE) === */}
          {/* // <-- THAY ĐỔI 2: Thêm nút này
            // - 'flex':      Hiện mặc định (trên mobile)
            // - 'lg:hidden': Ẩn trên màn hình 'lg' (desktop) trở lên
          */}
          <button
            className="flex lg:hidden p-2 text-hot-pink"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} // Cập nhật state
            aria-label="Mở menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </nav>
      </div>

      {/* // <-- THAY ĐỔI 3: Panel Menu Mobile
        // Panel này sẽ chỉ hiện ra khi isMobileMenuOpen là 'true'
        // Bạn có thể tùy chỉnh style cho nó (ví dụ: một menu thả xuống)
      */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-dark-navy/90 backdrop-blur-sm z-20 p-8 shadow-lg">
          {/* Đặt các nút Signup/Login của bạn vào đây */}
          <div className="flex flex-col items-center gap-6">
            <button className="bg-hot-pink ... w-full">Signup</button>
            <button className="bg-hot-pink ... w-full">Login</button>
          </div>
        </div>
      )}
    </header>
  );
}
