// src/components/CloudShape.tsx
import React from "react";

interface CloudShapeProps {
  className?: string;
}

// Đây là component chứa hình dạng SVG của đám mây
const CloudShape: React.FC<CloudShapeProps> = ({ className }) => (
  <svg
    viewBox="0 0 100 100" // Tỉ lệ của đám mây
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="currentColor" // 'currentColor' cho phép ta đổi màu bằng class 'text-...'
      d="M83.7,20.3c-0.2-1.2-0.4-2.4-0.8-3.5c-3.1-9.1-11.8-15.3-21.6-15.3c-7.9,0-15.1,4.2-19,10.6c-2.4-1-4.9-1.5-7.6-1.5c-10.9,0-19.8,8.9-19.8,19.8c0,1,0.1,2,0.3,3c-6.2,1.3-10.8,6.7-10.8,13.2c0,7.5,6.1,13.6,13.6,13.6h65.1c8.4,0,15.2-6.8,15.2-15.2C100,27.9,92.8,20.8,83.7,20.3z"
    />
  </svg>
);

export default CloudShape;
