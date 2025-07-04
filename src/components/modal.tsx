"use client";

import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 bg-opacity-50">
      <div className="bg-white w-[95%] md:max-w-[50%] rounded-2xl shadow-lg p-12 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-xl"
        >
          ×
        </button>
        {title && <h2 className="text-[25px] text-center text-[#020817] font-semibold mb-4">{title}</h2>}
        <div>{children}</div>
      </div>
    </div>
  );
};
