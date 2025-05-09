import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/app/utils/motion";

const Footer = () => {
  const footerLinks = {
    company: [
      { name: "About", href: "#" },
      { name: "Terms of Use", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "How it Works", href: "#" },
      { name: "Contact Us", href: "#" },
    ],
    getHelp: [
      { name: "Support Career", href: "#" },
      { name: "24h Service", href: "#" },
      { name: "Quick Chat", href: "#" },
    ],
    support: [
      { name: "FAQ", href: "#" },
      { name: "Policy", href: "#" },
      { name: "Business", href: "#" },
    ],
    contact: [
      { name: "WhatsApp", href: "#" },
      { name: "Support 24", href: "#" },
    ],
  };

  return (
    <motion.footer
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      className="bg-gray-50 py-8 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={fadeIn("up", 0.3)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12"
        >
          {/* Brand Column */}
          <motion.div variants={fadeIn("right", 0.4)} className="lg:col-span-4">
            <motion.div variants={fadeIn("down", 0.5)} className="flex items-center gap-2 mb-6">
              <div className="w-4 h-4 bg-blue-600 rounded-full opacity-75"></div>
              <div className="w-4 h-4 bg-red-500 rounded-full -ml-2"></div>
              <span className="text-xl font-semibold ml-1">AI Based Resume Scanning and Job Searching</span>
            </motion.div>
            <motion.p variants={fadeIn("up", 0.6)} className="text-gray-600 mb-6 text-sm md:text-base">
              The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times.
            </motion.p>
            <motion.div variants={fadeIn("up", 0.7)} className="flex gap-4">
              {[FaFacebookF, FaTwitter, FaLinkedinIn].map((Icon, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  href="#"
                  className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Links Columns */}
          <motion.div variants={fadeIn("left", 0.4)} className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                <motion.div key={category} variants={fadeIn("up", 0.3 * (categoryIndex + 1))}>
                  <motion.h3 variants={textVariant(0.2)} className="text-lg font-medium mb-3">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </motion.h3>
                  <motion.ul variants={fadeIn("up", 0.4)} className="space-y-2 text-sm md:text-base">
                    {links.map((link, index) => (
                      <motion.li key={index} variants={fadeIn("up", 0.1 * (index + 1))}>
                        <motion.a
                          whileHover={{ x: 5 }}
                          href={link.href}
                          className="text-gray-600 hover:text-gray-900 transition-all"
                        >
                          {link.name}
                        </motion.a>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div variants={fadeIn("up", 0.8)} className="border-t border-gray-200 mt-10 pt-6">
          <motion.div
            variants={fadeIn("up", 0.9)}
            className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 text-center sm:text-left"
          >
            <motion.p variants={fadeIn("right", 1.0)} className="text-gray-600 text-xs md:text-sm">
              Copyright © {new Date().getFullYear()} dev.smashik
            </motion.p>
            <motion.p variants={fadeIn("left", 1.0)} className="text-gray-600 text-xs md:text-sm">
              Created by Sheikh Muhammad Ashik & Soma Das
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
