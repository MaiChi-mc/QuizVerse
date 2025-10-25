// components/CategoryCarousel.tsx

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { CategoryCard } from "@/components/CategoryCard";
import type { Category } from "@/types";

// Import CSS của Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// 1. Định nghĩa props
type CategoryCarouselProps = {
  categories: Category[];
  isLoading: boolean;
};

// 2. Tạo component
export function CategoryCarousel({
  categories,
  isLoading,
}: CategoryCarouselProps) {
  // 3. Xử lý trạng thái loading
  if (isLoading) {
    return (
      <div className="text-center py-10">
        <p className="text-dark-navy">Loading Topic...</p>
      </div>
    );
  }

  // 4. Trả về Swiper
  return (
    <div className="max-w-7xl mx-auto relative px-12">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={16}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {categories.map((cat) => (
          <SwiperSlide key={cat.id}>
            <CategoryCard
              key={cat.id}
              name={cat.name}
              description={cat.description}
              imageUrl="/Background.png"
              href={cat.href}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
