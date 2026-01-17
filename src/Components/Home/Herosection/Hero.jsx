"use client"
import React from "react";
import { motion, scale } from "framer-motion";
import Link from "next/link";
import { Button } from "@/Components/ui/button";
export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: .2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="min-h-screen bg-gradient-to-br from-blue-50 dark:from-gray-900
     via-white dark:via-black to-green-50 dark:to-gray-950 flex items-center justify-center px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <div className="max-w-4xl mx-auto text-center">
        {/* heading */}
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold text-gray-900
         dark:text-white mb-6 leading-tight">
          Welcome to <span className="bg-gradient-to-r from-blue-600 dark:from-red-400  to-green-500 dark:to-gray-400 bg-clip-text text-transparent">TechHub</span>
        </motion.h1>
        {/* paragraph tag for hero section */}
        <motion.p  variants={itemVariants} className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Discover premium tech products carefully curated for professional and
          enthusiastis
        </motion.p>
        <motion.div className="flex justify-center gap-4 flex-wrap" variants={itemVariants}>
          <Link href="/items" >
            <motion.button className="btn btn-primary" whileHover={{scale:1.05}} whileTap={{scale:0.95}}><Button>Shop Now</Button></motion.button>
          </Link>
          <Link href="/" ><motion.button whileHover={{scale:1.05}} whileTap={{scale:0.95}}><Button variant="secondary">Learn More</Button></motion.button></Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
