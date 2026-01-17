'use client'
import React from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/Utils/Utils";
export const TestimonialsSection = () => {
    const testimonials = [
      {
        name: "Sarah Johnson",
        role: "Tech Enthusiast",
        content: "Best online shopping experience! Fast delivery and excellent customer service.",
        rating: 5,
      },
      {
        name: "Mike Chen",
        role: "Software Developer",
        content: "Highly recommend TechHub. Great prices and authentic products.",
        rating: 5,
      },
      {
        name: "Emma Wilson",
        role: "Business Owner",
        content: "Reliable supplier for all my tech needs. Will order again!",
        rating: 5,
      },
    ];

    return (
      <motion.section
        className="py-20 px-4 bg-white dark:bg-black"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4"
          >
            What Our Customers Say
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-center text-gray-600 dark:text-gray-400 mb-12"
          >
            Join thousands of satisfied customers
          </motion.p>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  "{testimonial.content}"
                </p>
                <p className="font-semibold text-gray-900 dark:text-white">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonial.role}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    );
  };