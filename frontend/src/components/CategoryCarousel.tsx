// components/CategoryCarousel.tsx
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { CategoryCard } from "@/components/CategoryCard";
import type { Category } from "@/types";

// Import CSS của Swiper
import "swiper/css";
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
    <div className="max-w-max lg:mx-16">
      <Swiper
        className="category-swiper"
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        spaceBetween={12}
        slidesPerView={2}
        loop={true}
        loopFillGroupWithBlank={false}
        loopedSlides={categories.length}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {categories.map((cat) => (
          <SwiperSlide key={cat.id} className="py-2 px-2 mx-auto">
            <CategoryCard
              key={cat.id}
              name={cat.name}
              description={cat.description}
              imageUrl="/Background.png"
              href={`/category/${cat.id}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx global>{`

          .category-swiper .swiper-button-next::after {
            background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='white' d='M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z'/></svg>") !important;
          }

          .category-swiper .swiper-button-prev::after {
            background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='white' d='M15.41 7.41L10.83 12l4.58 4.59L14 18l-6-6 6-6z'/></svg>") !important;
          }

          .category-swiper .swiper-button-next:hover,
          .category-swiper .swiper-button-prev:hover {
            border-color: #ff5ca3 !important; /* lighter hot-pink on hover */
            background: white !important; /* lighter hot-pink on hover */
          }
        }
      `}</style>
    </div>
  );
}
