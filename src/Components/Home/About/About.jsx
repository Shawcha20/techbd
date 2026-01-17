import React from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/Utils/Utils";
export default function About() {
  return (
    <motion.section
    className="py-20 px-4 bg-gray-50 dark:bg-black"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
        <div   className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center ">
        <motion.div variants={itemVariants}>
          <h2 className="font-bold text-2xl md:text-4xl mb-3">
            About TechHub
          </h2>
          <p className="mb-4">
            Founded in 2020, TechHub has become a trusted destination for tech
            enthusiasts and professionals seeking high-quality products at
            competitive prices.
          </p>
          <p className="mb-4">
            Our mission is to make premium technology accessible to everyone by
            offering a carefully curated selection of products with exceptional
            customer service.
          </p>
          <p className="mb-4">
            We partner with leading brands worldwide to ensure you get authentic
            products backed by comprehensive warranties.
          </p>
        </motion.div>
        <motion.div className="grid grid-cols-2 gap-4" variants={itemVariants}>
          <div className="bg-blue-100 dark:bg-blue-900 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
              50K+
            </div>
            <p className="text-gray-700 dark:text-gray-300">Happy Customers</p>
          </div>
          <div className="bg-green-100 dark:bg-green-900 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400">1000+</div>
              <p className="text-gray-700 dark:text-gray-300">Products</p>
            </div>
            <div className="bg-purple-100 dark:bg-purple-900 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">99%</div>
              <p className="text-gray-700 dark:text-gray-300">Satisfaction</p>
            </div>
            <div className="bg-orange-100 dark:bg-orange-900 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-orange-600 dark:text-orange-400">24/7</div>
              <p className="text-gray-700 dark:text-gray-300">Support</p>
            </div>
        </motion.div>
      </div>
      </div>
    </motion.section>
  );
}
