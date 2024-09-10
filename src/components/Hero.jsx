import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { slideIn, fadeIn } from "../utils/motion";

const titles = [
  "Frontend Developer",
  "React Native Developer",
  "Technical Writer",
];

const titleVariants = {
  hidden: { opacity: 0, x: "50%", y: "100%" },
  visible: { opacity: 1, x: 0, y: "100%" },
  // exit: { opacity: 0 },
};

const TitleComponent = () => {
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Move to the next title in the array
      setCurrentTitle((prevTitle) => (prevTitle + 1) % titles.length);
    }, 3000); // Change title every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      <motion.p
        key={currentTitle}
        variants={titleVariants}
        // variants={slideIn("right", "spring", 0.1, 0.75)}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 1 }}
        className={`${styles.heroSubText} text-white-100 lg:mr-12`}
      >
        {titles[currentTitle]}
      </motion.p>
    </AnimatePresence>
  );
};

const Hero = () => {
  return (
    <div className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[110px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5 h-auto">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 h-96 violet-gradient" />
        </div>

        <div className="pt-2">
          <motion.h1
            variants={slideIn("down", "spring", "", 0.8)}
            initial="hidden"
            animate="show"
            className={`${styles.heroHeadText} text-white -mb-8`}
          >
            Hi, I'm <span className="text-[#915eff]">Kene</span>
          </motion.h1>
          <TitleComponent />
          {/* <motion.p
            variants={fadeIn("left", "spring", "0.2", 0.8)}
            initial="hidden"
            animate="show"
            className={`${styles.heroSubText} mt-2 text-white-100 lg:mr-12`}
          >
            Whether you're looking to build a custom website, redesign an
            existing one, or optimize its performance, I'm here to help you
            achieve your goals and make your online presence stand out
          </motion.p> */}
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="flex justify-center items-start p-2 w-[35px] h-[64px] rounded-3xl border-4 border-secondary">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
