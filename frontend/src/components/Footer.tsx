// src/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black text-white py-6 mt-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <p className="text-sm text-gray-400">
          Copyright © 2026{" "}
          <span className="text-white font-semibold">
            Maya Sharma
          </span>{" "}
          - All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;