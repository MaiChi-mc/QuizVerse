// src/components/SmallScallop.tsx
import React from "react";

interface SmallScallopProps {
  position?: "top" | "bottom";
  colorClass: string; // Prop mới: ví dụ 'bg-soft-pink'
  className?: string; // Prop mới: để truyền z-index, offset
}

const SmallScallop: React.FC<SmallScallopProps> = ({
  position = "top",
  colorClass,
  className = "", // Giá trị mặc định là chuỗi rỗng
}) => {
  const scallopShapeClass =
    position === "top" ? "rounded-b-full" : "rounded-t-full";
  const positionClass = position === "top" ? "top-0" : "bottom-0";

  return (
    <div
      // Áp dụng các class vị trí, z-index, và offset (translate) từ prop
      // Thêm pointer-events-none để các phần trang bên dưới không bị chặn hover/ click
      className={`absolute ${positionClass} left-0 w-full flex pointer-events-none ${className}`}
    >
      {/* Lặp lại các vảy */}
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          // Áp dụng màu sắc từ prop `colorClass`
          // Thêm pointer-events-none để các phần trang bên dưới không bị chặn
          className={`w-16 h-9 flex-shrink-0 ${scallopShapeClass} ${colorClass} pointer-events-none`}
        />
      ))}
    </div>
  );
};

export default SmallScallop;
