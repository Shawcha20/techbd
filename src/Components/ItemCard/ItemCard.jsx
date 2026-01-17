import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ItemCard({ item, index }) {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
      },
    },
    hover: {
      y: -8,
      transition: { duration: 0.2 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.05 },
  };

  return (
    <motion.div
      variants={containerVariants}
      whileHover="hover"
      className="card overflow-hidden h-full flex flex-col"
    >
      <Link href={`/items/${item.id}`}>
        <motion.div
          variants={imageVariants}
          className="relative w-full h-48 overflow-hidden bg-gray-100 dark:bg-gray-800"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
            ${item.price}
          </div>
        </motion.div>
      </Link>

      <div className="p-4 flex-1 flex flex-col">
        <Link href={`/items/${item.id}`}>
          <h3 className="font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors line-clamp-2">
            {item.name}
          </h3>
        </Link>

        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-2 flex-1">
          {item.description}
        </p>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <motion.svg
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(item.rating)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300 dark:text-gray-600"
                }`}
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </motion.svg>
            ))}
          </div>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            ({item.rating})
          </span>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-4 w-full btn-primary text-sm"
        >
          View Details
        </motion.button>
      </div>
    </motion.div>
  );
}
