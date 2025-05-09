import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const CompanyLogo = () => {
  const { theme } = useTheme();
  
  const logos = [
    "/assets/slack.png",
    "/assets/amazon.png",
    "/assets/woocommerce.png",
    "/assets/meundies.png",
    "/assets/sitepoint.png"
  ];

  return (
    <div className={`relative w-full overflow-hidden ${theme === 'dark' ? 'bg-slate-900' : 'bg-white'} py-4 transition-colors duration-300`}>
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-center">
          <div className={`w-[300px] shrink-0 px-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} border-l-4 border-blue-500 py-2 z-20 sm:text-base text-xl font-semibold sm:text-left mb-8 sm:mb-0 transition-colors duration-300`}>
            Proud partner at <br /> Hubspot & Segment
          </div>
          
          <div className="relative flex overflow-x-hidden ml-4">
            {/* First scroll */}
            <div className="flex animate-marquee whitespace-nowrap">
              {logos.map((logo, index) => (
                <motion.img
                  key={index}
                  src={logo}
                  alt={`Company Logo ${index + 1}`}
                  className={`mx-12 h-8 w-36 object-contain ${theme === 'dark' ? 'invert grayscale opacity-70' : 'grayscale opacity-70'} hover:grayscale-0 hover:opacity-100 transition-all`}
                  whileHover={{ scale: 1.1 }}
                />
              ))}
            </div>

            {/* Second scroll (seamless loop) */}
            <div className="flex absolute top-0 animate-marquee-reverse whitespace-nowrap">
              {logos.map((logo, index) => (
                <motion.img
                  key={`duplicate-${index}`}
                  src={logo}
                  alt={`Company Logo ${index + 1}`}
                  className={`mx-12 h-8 w-36 object-contain ${theme === 'dark' ? 'invert grayscale opacity-70' : 'grayscale opacity-70'} hover:grayscale-0 hover:opacity-100 transition-all`}
                  whileHover={{ scale: 1.1 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyLogo;