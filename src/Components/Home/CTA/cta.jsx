'use client'
import React from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/Utils/Utils";
import Link from "next/link";
 export const CTASection = () => (
    <motion.section
      className="py-20 px-4 bg-gradient-to-r from-blue-600 to-green-600"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto text-center text-white">
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold mb-4"
        >
          Ready to Upgrade Your Tech?
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-xl mb-8"
        >
          Browse our collection of premium products and find exactly what you need.
        </motion.p>
        <motion.div variants={itemVariants}>
          <Link href="/items">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Start Shopping
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );