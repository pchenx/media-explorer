import ReactDOM from "react-dom";
import { useEffect } from "react";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ onClose, children }: ModalProps) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const modalContainer = document.querySelector(".modal-container");

  if (!modalContainer) return null;

  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="fixed inset-0 sm:inset-40 p-10 bg-white">
        <div className="flex flex-col justify-between h-full">{children}</div>
      </div>
    </div>,
    modalContainer
  );
}
