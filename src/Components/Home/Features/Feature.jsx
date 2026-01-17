import React from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/Utils/Utils";
export default function Feature() {
  const features = [
    {
      icon: "🚀",
      title: "Fast Shipping",
      description: "Get your products delivered in 2-3 business days",
    },
    {
      icon: "🛡️",
      title: "Secure Payments",
      description: "Your transactions are protected with SSL encryption",
    },
    {
      icon: "♻️",
      title: "Easy Returns",
      description: "30-day return policy for peace of mind",
    },
    {
      icon: "⭐",
      title: "Quality Assured",
      description: "All products are verified and certified",
    },
  ];
  return (
    <motion.section
      className="bg-white dark:bg-black "
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="text-center mx-auto max-w-6xl">
        <motion.h1
          variants={itemVariants}
          className="text-2xl md:text-4xl font-bold leading-tight mb-6"
        >
          Why Choose Us
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-black dark:text-gray-300 mb-12"
        >
          We provide the best shopping experience with top-quality products
        </motion.p>
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center rounded-lg p-6 bg-gray-50 dark:bg-gray-900 hover:shadow-lg transition-shadow "
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="font-bold text-black dark:text-gray-100">{feature.title}</h3>
                <p className="text-gray-400 ">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
