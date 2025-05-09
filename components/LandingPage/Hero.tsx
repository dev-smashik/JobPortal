import React from 'react';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from '@/app/utils/motion';
import Link from 'next/link';

// Define props interface if needed
interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <section id="home" className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 pt-16 pb-16 container mx-auto">
      {/* Background Image - Left Side */}
      <div 
        className="absolute top-0 left-0 w-1/2 h-full bg-cover bg-left opacity-40 -z-10" 
        style={{ backgroundImage: `url(/assets/CoverLeftBG.svg)` }}
      />

      {/* Left Column */}
      <div className="w-full md:w-1/2 space-y-8">
        <motion.div variants={fadeIn('right', 0.2)} initial="hidden" whileInView="show">
          {/* Star badge */}
          <div className="flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group">
            <span className="text-blue-600 group-hover:scale-110 transition-transform">★</span>
            <span className="text-sm font-medium">Jump start your growth</span>
          </div>
        </motion.div>

        <motion.h1 
          variants={textVariant(0.3)}
          initial="hidden"
          whileInView="show"
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
        >
          Revolutionizing{' '}
          <span className="text-blue-600 relative inline-block">
            Hiring with AI
            
          </span>{' '}
          Powered Precision
          <span className="inline-block ml-2 animate-pulse">⏰</span>
        </motion.h1>

        <motion.p 
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          className="text-gray-600 text-lg md:text-xl max-w-xl ">
          Our ATS CV Analysis platform streamlines recruitment by analyzing resumes, eliminating bias, and matching candidates to the best-fit roles with smart, data-driven insights.
        </motion.p>

        <motion.div 
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView="show"
          className="flex gap-3 max-w-md"
        >
          {/* Upload CV Form */}
          
        <Link href="/upload-resume">
        <button className="pt-4 pb-4 bg-blue-600 text-white px-6 py-4.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Upload your Resume →
        </button>
      </Link>
        </motion.div>
      </div>

      {/* Right Column - Images */}
      <motion.div 
        variants={fadeIn('left', 0.5)}
        initial="hidden"
        whileInView="show"
        className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12"
      >
        <div className="relative">
          <img
            src="/assets/CoverRight.svg"
            alt="Team meeting"
            className="rounded-lg relative z-10 hover:scale-[1.10] transition-transform duration-300"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero;