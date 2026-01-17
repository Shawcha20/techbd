"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Toast({ message, type = "success", duration = 3000 }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  const bgColor =
    type === "success" ? "bg-green-500" : type === "error" ? "bg-red-500" : "bg-blue-500";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20, x: 100 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: -20, x: 100 }}
          transition={{ duration: 0.3 }}
          className={`fixed top-6 right-6 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg z-50 max-w-sm`}
        >
          <p className="font-medium">{message}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
