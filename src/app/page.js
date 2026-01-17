"use client";
import About from "@/Components/Home/About/About";
import { CTASection } from "@/Components/Home/CTA/cta";
import Feature from "@/Components/Home/Features/Feature";
import Hero from "@/Components/Home/Herosection/Hero";
import { NewsletterSection } from "@/Components/Home/NewsSettler/NewsSettler";
import { TestimonialsSection } from "@/Components/Home/Testimonial/Testimonial";
import { StatisticsSection } from "@/Components/Home/Statistic/Statistic";
import { containerVariants, itemVariants } from "@/Utils/Utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");





  return (
    <>
      <Hero></Hero>
      <Feature></Feature>
      <About></About>
      <StatisticsSection></StatisticsSection>
  <TestimonialsSection></TestimonialsSection>
    <CTASection></CTASection>
      <NewsletterSection email={email} setEmail={setEmail}/>
    </>
  );
}
