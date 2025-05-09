import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/utils/motion";


interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({ className }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (section) {
      section.offsetHeight;
    }
  }, []);

  return (
    <motion.section 
      id="about" 
      ref={sectionRef}
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      className={`py-20 pt-28 flex flex-col md:flex-row items-center gap-8 md:gap-[108px] relative scroll-mt-20 ${className}`}
    >
      <motion.div
        variants={fadeIn('right', 0.3)}
        className="relative w-full md:w-[681px]"
      >
        <Image
          src="/assets/cv.png"
          width={681}
          height={400}
          alt="CV Preview"
          className="rounded-lg relative z-10 hover:scale-[1.10] transition-transform duration-300"
          priority
        />
      </motion.div>

      <motion.div 
        variants={fadeIn('left', 0.3)}
        className="relative w-full md:w-[681px]"
      >
        <h2 className="font-semibold text-[#444750] text-3xl md:text-5xl tracking-[0] leading-tight mb-10">
          Make sure your resume stands out for the right reasons!
        </h2>

        {[
          "Eliminate embarrassing mistakes and typos",
          "Sell yourself effectively by strengthening your content",
          "Improve your design and create a visually appealing resume"
        ].map((text, index) => (
          <motion.div 
            key={index}
            variants={fadeIn('up', 0.4 + index * 0.1)}
            className="flex items-center gap-2.5 mb-4 last:mb-0"
          >
            {/* <CheckmarkCircle className="w-5 h-5 text-blue-600" /> */}
            <p className="font-medium text-primary-text-color">
              {text}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default About;