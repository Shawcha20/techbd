'use client'
import React from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/Utils/Utils";
export const NewsletterSection = ({email,setEmail}) => (
    <motion.section
      className="py-20 px-4 bg-gray-50 dark:bg-gray-950"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-2xl mx-auto">
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4"
        >
          Subscribe to Our Newsletter
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-center text-gray-600 dark:text-gray-400 mb-8"
        >
          Get exclusive deals and new product updates delivered to your inbox
        </motion.p>

        <motion.form
          variants={itemVariants}
          onSubmit={(e) => {
            e.preventDefault();
            setEmail("");
            alert("Thank you for subscribing!");
          }}
          className="flex gap-2"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="btn-primary px-8"
          >
            Subscribe
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
