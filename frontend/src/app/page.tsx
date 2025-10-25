// src/app/page.tsx
"use client";
import { QuizCard } from "@/components/QuizCard";
import { CategoryCard } from "@/components/CategoryCard";
import React from "react";
import BigScallop from "../components/BigScallop";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import type { Category, Quiz } from "@/types";

export default function Home() {
  // Tạo state để lưu trữ dữ liệu từ API
  const [categories, setCategories] = useState<Category[]>([]); // Mảng rỗng
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Trạng thái loading

  // Dùng useEffect để gọi API khi component Home được tải
  useEffect(() => {
    // 1. Gọi API để fetch dữ liệu quizzes
    const fetchQuizzes = async () => {
      const response = await fetch("http://localhost:3000/quizzes/latest");
      if (!response.ok) {
        throw new Error("Network response was not ok (quizzes)");
      }
      const data: Quiz[] = await response.json();
      setQuizzes(data);
    };

    // 2. Gọi API để fetch dữ liệu categories
    const fetchCategories = async () => {
      const response = await fetch("http://localhost:3000/categories/all");
      if (!response.ok) {
        throw new Error("Network response was not ok (categories)");
      }
      const data: Category[] = await response.json();
      setCategories(data);
    };

    // 3. Gọi cả hai hàm fetch
    const fetchAllData = async () => {
      setIsLoading(true);
      try {
        // Promise.all sẽ chạy cả 2 hàm fetch CÙNG LÚC
        await Promise.all([fetchQuizzes(), fetchCategories()]);
      } catch (error) {
        // Nếu 1 trong 2 API lỗi, nó sẽ nhảy vào đây
        console.error("Lỗi khi fetch data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllData();
  }, []);

  return (
    <div className="min-h-screen w-full relative overflow-hidden z-0">
      {/* Phần nội dung tiêu đề */}
      <main className="relative z-20 flex flex-col items-center justify-center min-h-[70svh] lg:min-h-[120svh] w-full">
        <div className="relative z-10 w-[780px] h-[290px] px-8 lg:mb-16">
          <div className="hidden lg:flex">
            <Image src="/CloudShape.png" alt="Cloud" fill={true} />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h1
              className="font-pacifico font-semibold text-white text-7xl lg:text-8xl lg:drop-shadow-text-outline py-6"
              style={{
                textShadow: "6px 6px 0 rgb(185, 0, 97)",
              }}
            >
              Quiz Verse
            </h1>
            <p className="font-pacifico text-white text-lg ">
              Take cute quizzes & share with friends!
            </p>
          </div>
        </div>

        {/* Thanh tìm kiếm */}
        <div className="bg-blue-50 w-full max-w-xs lg:max-w-lg rounded-full p-2 flex items-center shadow-md mb-10">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="pl-2 text-dark-navy text-base lg:text-2xl"
          />
          <input
            type="text"
            placeholder="Search for any quiz..."
            className="flex-1 min-w-0 flex-grow bg-transparent border-none outline-none text-dark-navy placeholder-dark-navy/70 pl-4 text-base lg:text-lg"
          />
          <button className="bg-hot-pink border-hot-pink text-white font-semibold flex-none py-1 lg:py-2 px-4 lg:px-6 rounded-3xl shadow-xl transform transition duration-200 ease-out hover:bg-white hover:text-hot-pink hover:border-hot-pink border-2 hover:scale-105">
            Search
          </button>
        </div>

        {/* === VIỀN DƯỚI (BOTTOM BORDER) === */}
        <div className="absolute bottom-0 w-full left-0 right-0 h-48 pointer-events-none">
          <BigScallop
            position="bottom"
            colorClass="bg-white"
            className="z-10 translate-y-32 -translate-x-5"
          />
          <BigScallop
            position="bottom"
            colorClass="bg-soft-pink"
            className="z-0 translate-y-20 -translate-x-28"
          />
        </div>
      </main>

      {/* Section danh sách Category */}
      <section className="w-full bg-white py-10 px-4 lg:px-14 mt-10 mb-0 relative z-30">
        <div className="flex justify-center items-center gap-0 ">
          <h2 className="hidden lg:flex text-light-purple text-2xl font-semibold -mt-9">
            ────── ⋆⋅☆⋅⋆ ──────
          </h2>
          <h2
            className="text-center text-xl font-bold text-dark-navy mb-10 rounded-3xl
          py-2 bg-light-purple max-w-lg w-full mx-auto"
            style={{
              boxShadow: "6px 6px 0 rgba(208, 207, 218)",
            }}
          >
            Choose your favourite topic!
          </h2>
          <h2 className="hidden lg:flex text-light-purple text-2xl font-semibold -mt-9">
            ────── ⋆⋅☆⋅⋆ ──────
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-0">
          {isLoading ? (
            <p className="text-dark-navy col-span-full text-center">
              Loading Topic...
            </p>
          ) : (
            // Dùng .map() để lặp qua mảng quizzes trong state
            categories.map((cat) => (
              <CategoryCard
                key={cat.id}
                name={cat.name}
                description={cat.description}
                imageUrl="/Background.png"
                href={cat.href}
              />
            ))
          )}
        </div>
      </section>

      {/* Section danh sách Quiz */}
      <section className="w-full bg-brand-white py-16 px-4 mb-0 relative z-30">
        <h2 className="text-center text-4xl font-pacifico text-dark-navy mb-10">
          Cute Quizzes to Try!
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            <p className="text-dark-navy col-span-full text-center">
              Loading Quizzes...
            </p>
          ) : (
            // Dùng .map() để lặp qua mảng quizzes trong state
            quizzes.map((quiz) => (
              <QuizCard
                key={quiz.id}
                title={quiz.title}
                description={quiz.description}
                imageUrl="/Background.png"
                views={quiz.views}
                tags={quiz.tags}
                href={quiz.href}
                creatorName={quiz.creatorName}
              />
            ))
          )}
        </div>
      </section>
    </div>
  );
}
