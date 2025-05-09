import React from "react";
import { HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/app/utils/motion";

const NewsletterSection = () => {
  return (
    <section
      id="newsletter"
      className="mx-auto px-6 sm:px-12 md:px-16 lg:px-64 py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        className="bg-blue-600 rounded-2xl overflow-hidden relative"
      >
        {/* Background Gradient */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          className="absolute top-0 right-0 w-1/2 h-full bg-blue-700 clip-path-slant hidden md:block"
        ></motion.div>

        <div className="relative px-6 sm:px-12 md:px-16 py-12 md:py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Content */}
            <motion.div
              variants={fadeIn("right", 0.5)}
              className="text-white max-w-lg text-center lg:text-left"
            >
              <motion.h2
                variants={textVariant(0.3)}
                className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4"
              >
                Subscribe to our newsletter
              </motion.h2>
              <motion.p
                variants={fadeIn("up", 0.6)}
                className="text-blue-100 text-sm sm:text-base"
              >
                Get the best updates, news, and exclusive offers straight to your inbox.
              </motion.p>
            </motion.div>

            {/* Email Form */}
            <motion.div
              variants={fadeIn("left", 0.5)}
              className="w-full lg:w-auto md:w-auto lg:ml-auto"
            >
              <motion.div
                variants={fadeIn("up", 0.6)}
                className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0"
              >
                <motion.input
                  variants={fadeIn("right", 0.7)}
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full sm:w-72 md:w-80 px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-l-xl sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-700"
                />
                <motion.button
                  variants={fadeIn("left", 0.7)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-l-none sm:rounded-r-xl hover:bg-green-600 transition-all flex items-center justify-center gap-2"
                >
                  <span>Subscribe</span>
                  <HiArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <style>
        {`
          .clip-path-slant {
            clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
          }
        `}
      </style>
    </section>
  );
};

export default NewsletterSection;
