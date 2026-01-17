"use client";
import Feature from "@/Components/Home/Features/Feature";
import Hero from "@/Components/Home/Herosection/Hero";
import { containerVariants, itemVariants } from "@/Utils/Utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");

 
  // // 1. Hero Section
  // const HeroSection = () => (
  //   <motion.section
  //     className="min-h-screen bg-gradient-to-br from-blue-50 dark:from-gray-950 via-white dark:via-black to-green-50 dark:to-gray-950 flex items-center justify-center px-4"
  //     variants={containerVariants}
  //     initial="hidden"
  //     animate="visible"
  //   >
  //     <div className="max-w-4xl mx-auto text-center">
  //       <motion.h1
  //         variants={itemVariants}
  //         className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white
  //          mb-6 leading-tight"
  //       >
  //         Welcome to <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">TechHub</span>
  //       </motion.h1>
  //       <motion.p
  //         variants={itemVariants}
  //         className="text-xl text-gray-700 dark:text-gray-300 
  //         mb-8 max-w-2xl mx-auto"
  //       >
  //         Discover premium tech products carefully curated for professionals and enthusiasts
  //       </motion.p>
  //       <motion.div
  //         variants={itemVariants}
  //         className="flex gap-4 justify-center flex-wrap"
  //       >
  //         <Link href="/items">
  //           <motion.button
  //             whileHover={{ scale: 1.05 }}
  //             whileTap={{ scale: 0.95 }}
  //             className="btn-primary text-lg px-8 py-4"
  //           >
  //             Shop Now
  //           </motion.button>
  //         </Link>
  //         <motion.button
  //           whileHover={{ scale: 1.05 }}
  //           whileTap={{ scale: 0.95 }}
  //           className="btn-outline text-lg px-8 py-4"
  //         >
  //           Learn More
  //         </motion.button>
  //       </motion.div>
  //     </div>
  //   </motion.section>
  // );

  // 2. Features Section
  const FeaturesSection = () => {
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
            Why Choose Us
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-center text-gray-600 dark:text-gray-400 mb-12"
          >
            We provide the best shopping experience with top-quality products
          </motion.p>

          <motion.div
            className="grid md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-900 hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    );
  };


  return (
    <>
      <Hero></Hero>
      <Feature></Feature>
      {/* <AboutSection />
      <StatisticsSection />
      <TestimonialsSection />
      <CTASection />
      <NewsletterSection /> */}
    </>
  );
}
