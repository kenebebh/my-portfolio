import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <div className="flex flex-col">
      <div className="mb-12">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Stack</p>
          <h2 className={styles.sectionHeadText}>Technologies.</h2>
        </motion.div>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-8">
        {technologies.map((technology) => (
          <div
            className="p-6 shadow-xl rounded-xl bg-black-100 hover:scale-105 ease-in duration-300"
            key={technology.name}
          >
            <div className="flex justify-center items-center">
              <div className="w-12 h-12 mr-6">
                <img src={technology.icon} loading="lazy" alt="" />
              </div>
              <div>
                <h3>{technology.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
