import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

// import { Text3D } from "@react-three/drei";

const Tech = () => {
  return (
    <div className="flex flex-col">
      <div className="mb-12">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Stack</p>
          <h2 className={styles.sectionHeadText}>Technologies.</h2>
        </motion.div>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div
            className="w-32 h-32 flex flex-col items-center"
            key={technology.name}
          >
            <BallCanvas icon={technology.icon} />
            <p>{technology.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
