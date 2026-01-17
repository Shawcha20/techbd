'use client'
import React from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/Utils/Utils";
 export const StatisticsSection = () => {
    const stats = [
      { number: "500K+", label: "Products Sold" },
      { number: "98%", label: "Customer Satisfaction" },
      { number: "15+", label: "Years Experience" },
      { number: "180+", label: "Countries Served" },
    ];

    return (
      <motion.section
        className="py-20 px-4 bg-gradient-to-r from-blue-600 to-green-600"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center text-white"
              >
                <motion.div
                  className="text-5xl font-bold mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {stat.number}
                </motion.div>
                <p className="text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    );
  };