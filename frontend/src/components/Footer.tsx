import React from "react";
import SmallScallop from "./SmallScallop";

const Footer = () => {
  return (
    <footer className="h-32 bg-light-purple relative bottom-0 left-0 right-0 z-30">
      <div className="absolute bottom-0 w-full h-32 overflow-hidden -top-10">
        <SmallScallop
          position="bottom"
          colorClass="bg-soft-pink"
          className="z-10 absolute -translate-y-20"
        />
      </div>
      {/* Nội dung footer ở đây */}
      <div className="p-4 pt-6 text-hot-pink">
        <p>Nội dung footer của bạn ở đây...</p>
        <p>Thêm links, v.v.</p>
      </div>
    </footer>
  );
};

export default Footer;
