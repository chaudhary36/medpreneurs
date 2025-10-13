// components/FullScreenLoader.tsx
import React from "react";

const FullScreenLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        <p className="text-white text-lg mt-4 animate-pulse">Loading...</p>
      </div>
    </div>
  );
};

export default FullScreenLoader;
