import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from '@/app/utils/motion';
import { useTheme } from "next-themes";

const FeaturesSection = () => {
  const { theme } = useTheme();
  
  const features = [
    {
      icon: "🔍", 
      title: "AI-Powered Task Completion",
      description: "Get step-by-step guidance from our AI to prioritize and complete tasks efficiently"
    },
    {
      icon: "⚙️",
      title: "Seamless Collaboration", 
      description: "Keep team communication and collaboration within your workflow using built-in chat tools."
    },
    {
      icon: "🚀",
      title: "Improved Transparency",
      description: "Easily track deadlines, dependencies and Progress with Gantt charts and timelines."
    }
  ]

  return (
    <motion.section 
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      className={`max-w-7xl mx-auto px-4 py-16 ${theme === 'dark' ? 'bg-slate-900/900' : 'bg-slate-100/10'} transition-colors duration-300`}
    >
      <motion.div 
        variants={fadeIn('up', 0.3)}
        className="text-center mb-12"
      >
        <motion.h2 
          variants={textVariant(0.2)}
          className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
        >
          AI Based free and fast algorithm that generates <br/> a tailored resume review report
        </motion.h2>
        <motion.p 
          variants={fadeIn('up', 0.4)}
          className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}
        >
          Upload your resume and you'll get a personalized email with an actionable tasklist. Here's the run-down of how it works.
        </motion.p>
      </motion.div>
      
      <motion.div 
        variants={fadeIn('up', 0.5)}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            variants={fadeIn('up', 0.3 * (index + 1))}
            className={`flex flex-col items-center p-6 rounded-xl ${theme === 'dark' ? 'bg-slate-800' : 'bg-white'} transition-colors duration-300`}
          >
            <motion.div 
              variants={fadeIn('down', 0.4 * (index + 1))}
              className="w-24 h-24 rounded-full mb-6 flex items-center justify-center" 
              style={{ 
                backgroundColor: theme === 'dark' 
                  ? 'rgba(255, 255, 255, 0.1)' 
                  : index === 0 ? '#F1EFFD' 
                  : index === 1 ? '#FFE7E7' 
                  : '#FFF3E4'
              }}
            >
              <motion.div 
                variants={fadeIn('up', 0.5 * (index + 1))}
                className="text-3xl"
              >
                {feature.icon}
              </motion.div>
            </motion.div>
            <motion.h3 
              variants={textVariant(0.3)}
              className={`text-2xl font-medium mb-3 flex items-center gap-2 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
            >
              {feature.title}
            </motion.h3>
            <motion.p 
              variants={fadeIn('up', 0.6 * (index + 1))}
              className={`text-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'} transition-colors duration-300`}
            >
              {feature.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        variants={fadeIn('up', 0.7)}
        className="text-center mt-12"
      >
        <motion.button 
          variants={fadeIn('up', 0.8)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white cursor-pointer px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors relative"
        >
          Become a Partner
          <div className={`absolute -z-10 w-full h-full rounded-full ${theme === 'dark' ? 'bg-blue-400/30' : 'bg-blue-600/30'} blur-xl top-0 left-0`}></div>
        </motion.button>
      </motion.div>
    </motion.section>
  )
}

export default FeaturesSection