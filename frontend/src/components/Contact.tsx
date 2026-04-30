import React from "react";

interface ContactProps {
  isOpen: boolean;
  onClose: () => void;
}

const Contact: React.FC<ContactProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-3 text-2xl font-bold text-gray-500 hover:text-black"
        >
          ×
        </button>

        <h2 className="mb-3 text-2xl font-bold text-black">Contact</h2>

        <p className="mb-5 text-gray-600">
          For enquiries, collaborations, or work-related communication, please contact:
        </p>

        <a
          href="mailto:mystrym@gmail.com"
          className="block rounded-xl bg-black px-5 py-3 text-center font-medium text-white transition hover:bg-gray-800"
        >
           mystrym@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Contact;