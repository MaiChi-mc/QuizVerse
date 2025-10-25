/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-navy': '#1e2252',
        'light-blue': '#d6e6fd',
        'soft-pink': '#ffbae3',
        'light-purple': '#dcd4fb',
        'hot-pink': '#ee79aa',
        'brand-white': '#f5ecdc',
      },
      fontFamily: {
        // Cấu hình để dùng CSS variable từ next/font
        'sans': ['var(--font-poppins)', 'sans-serif'],
        // Thêm Pacifico để có class `font-pacifico` dùng biến CSS từ next/font
        'pacifico': ['var(--font-pacifico)', 'cursive'],
      },
      dropShadow: {
        'text-outline': [
          '8px 8px 0 rgba(0, 0, 0, 0.25)'
        ],
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'), // Thêm plugin để giới hạn dòng
  ],
}