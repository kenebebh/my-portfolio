import { motion } from "framer-motion";
import { styles } from "../styles";
import { slideIn, fadeIn } from "../utils/motion";

const Hero = () => {
  return (
    <div className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[100px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
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
            className={`${styles.heroHeadText} text-white`}
          >
            Hi, I'm <span className="text-[#915eff]">Kene</span>
          </motion.h1>
          <motion.p
            variants={fadeIn("left", "spring", "", 0.8)}
            initial="hidden"
            animate="show"
            className={`${styles.heroSubText} mt-2 text-white-100 lg:mr-12`}
          >
            I am a skilled frontend developer dedicated to bringing ideas to
            life through creative and intuitive designs, responsive layouts, and
            dynamic interactions.
          </motion.p>
          <motion.p
            variants={fadeIn("left", "spring", "0.2", 0.8)}
            initial="hidden"
            animate="show"
            className={`${styles.heroSubText} mt-2 text-white-100 lg:mr-12`}
          >
            Whether you're looking to build a custom website, redesign an
            existing one, or optimize its performance, I'm here to help you
            achieve your goals and make your online presence stand out
          </motion.p>
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
