// src/components/QuizCard.tsx
import Link from "next/link";
import Image from "next/image";

// 1. Định nghĩa Props cho component
interface QuizCardProps {
  title: string;
  description: string;
  imageUrl: string;
  views: number;
  tags: string[];
  href: string;
  creatorName?: string;
}

// 2. Component với các class của Tailwind
export function QuizCard({
  title,
  description,
  imageUrl,
  views,
  tags,
  href,
  creatorName,
}: QuizCardProps) {
  return (
    <Link
      href={href}
      // Thẻ cha: nền tối, bo góc, có viền, ẩn phần thừa
      className="block bg-soft-pink rounded-2xl overflow-hidden no-underline text-dark-navy border-2
       border-soft-pink shadow-xl transition-transform duration-200 
       hover:bg-brand-white hover:text-hot-pink hover:border-hot-pink hover:scale-105"
    >
      {/* Phần hình ảnh: tỷ lệ 16:9 */}
      <div className="relative w-full pt-[56.25%]">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover" // lấp đầy và giữ tỷ lệ
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Thẻ Tags: nằm đè lên ảnh, ở góc trên bên phải */}
        <div className="absolute top-3 right-3 flex gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              // Tag: nền hồng, bo tròn, chữ nhỏ
              className="bg-pink-500/90 text-white py-1 px-3 rounded-full text-xs font-bold"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Phần nội dung (chữ) */}
      <div className="p-4">
        {/* Tiêu đề */}
        <h3 className="text-lg font-bold mb-2 truncate">{title}</h3>

        {/* Mô tả: giới hạn 2 dòng */}
        <p className="text-sm text-gray-150 mb-3 line-clamp-2">{description}</p>

        <div className="container flex justify-between items-center mx-auto">
          {/* Lượt xem */}
          <div className="text-xs text-gray-150">
            <span>{views.toLocaleString()} views</span>
          </div>
          {/* Tên người tạo (nếu có) */}
          {creatorName && (
            <div className="text-xs text-gray-150 mt-1">
              <span>Created by {creatorName}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
