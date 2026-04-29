import { useEffect } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      ></div>

      <div className="relative bg-white rounded-xl p-6 w-full max-w-lg z-10 shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500"
        >
          ✕
        </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;