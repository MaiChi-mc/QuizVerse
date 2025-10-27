// src/app/page.tsx
"use client";
import { QuizCard } from "@/components/QuizCard";
import React from "react";
import { useState, useEffect } from "react";
import type { Quiz } from "@/types";
import { useParams } from "next/navigation";

export default function CategoryQuizPage() {
  const params = useParams();
  const categoryId = params.id;
  const [categoryName, setCategoryName] = useState("");
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Dùng useEffect để gọi API khi component Home được tải
  useEffect(() => {
    if (categoryId) {
      const fetchCategoryData = async () => {
        setIsLoading(true);
        try {
          // Fetch category information
          const categoryResponse = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/categories/${categoryId}`
          );
          if (!categoryResponse.ok) {
            throw new Error("Failed to fetch category");
          }
          const categoryData = await categoryResponse.json();
          setCategoryName(categoryData.name);

          // Fetch quizzes for this category
          const quizzesResponse = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/quizzes/category/${categoryId}`
          );
          if (!quizzesResponse.ok) {
            throw new Error("Failed to fetch quizzes");
          }
          const quizzesData = await quizzesResponse.json();
          setQuizzes(quizzesData);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchCategoryData();
    }
  }, [categoryId]);

  return (
    <div className="min-h-screen bg-brand-white w-full relative overflow-hidden z-0">
      <div
        className="w-full max-w-screen-2xl h-auto object-contain relative z-10"
        style={{
          height: "300px",
          backgroundImage: `url('/Background.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          marginTop: "170px",
        }}
      ></div>

      {/* Section danh sách Quiz theo Category */}
      <section className="w-full bg-brand-white py-16 px-4 mb-0 relative z-30">
        <div className="flex justify-center items-center text-center gap-0 mt-14">
          <h2 className="hidden lg:flex text-light-purple text-2xl text-center font-semibold -mt-20 pl-14">
            ────── ⋆⋅☆⋅⋆ ──────
          </h2>
          <h2
            className="text-center text-xl font-bold text-dark-navy -mt-10 mb-10 rounded-3xl
          py-2 bg-light-purple max-w-32 w-full mx-auto"
            style={{
              boxShadow: "6px 6px 0 rgba(208, 207, 218)",
            }}
          >
            {categoryName}
          </h2>
          <h2 className="hidden lg:flex text-light-purple text-2xl font-semibold -mt-20 pr-14">
            ────── ⋆⋅☆⋅⋆ ──────
          </h2>
        </div>

        <div className="max-w-7xl mx-auto">
          {isLoading ? (
            <div className="text-center">
              <p className="text-dark-navy text-xl">Loading quizzes...</p>
            </div>
          ) : quizzes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {quizzes.map((quiz) => (
                <QuizCard
                  key={quiz.id}
                  title={quiz.title}
                  description={quiz.description}
                  imageUrl={quiz.imageUrl || "/Background.png"}
                  views={quiz.views}
                  tags={quiz.tags}
                  href={quiz.href}
                  creatorName={quiz.creatorName}
                />
              ))}
            </div>
          ) : (
            <div className="text-center">
              <p className="text-gray-500 text-xl">
                No quizzes found for this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
