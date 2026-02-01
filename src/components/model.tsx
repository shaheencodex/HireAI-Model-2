import React from "react";
import { motion, AnimatePresence } from "framer-motion";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  anchorRect?: DOMRect;
}
export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  anchorRect,
}: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal box */}
          <motion.div
            className="fixed z-50"
            style={{
              top: anchorRect ? anchorRect.bottom + 8 : "50%",
              left: anchorRect ? anchorRect.left : "50%",
              transform: anchorRect ? "none" : "translate(-50%, -50%)",
            }}
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
          >
            <div className="bg-[#292d3a] rounded-2xl shadow-xl w-[90%] max-w-md p-6 relative">
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                onClick={onClose}
              >
                ✖
              </button>
              {title && (
                <h2 className="text-xl font-semibold mb-4 text-gray-100">
                  {title}
                </h2>
              )}
              <div>{children}</div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
