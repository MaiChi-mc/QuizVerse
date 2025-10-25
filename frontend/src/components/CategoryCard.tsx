// src/components/QuizCard.tsx
import Link from "next/link";
import Image from "next/image";

// 1. Định nghĩa Props cho component
interface CategoryCardProps {
  name: string;
  description: string;
  imageUrl: string;
  href: string;
}

// 2. Component với các class của Tailwind
export function CategoryCard({
  name,
  description,
  imageUrl,
  href,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      // Thẻ cha: nền tối, bo góc, có viền, ẩn phần thừa
      className="block w-full max-w-[250px] bg-white rounded-3xl overflow-hidden no-underline
         text-center transition-transform duration-200 hover:scale-105"
    >
      <div>
        <div className="relative w-full aspect-square rounded-3xl overflow-hidden border-4 border-hot-pink">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover" // lấp đầy và giữ tỷ lệ
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Phần nội dung (chữ) */}
        <div className="p-4">
          {/* Tiêu đề */}
          <h3 className="text-lg text-hot-pink font-bold mb-2 truncate">
            {name}
          </h3>
        </div>
      </div>
    </Link>
  );
}
