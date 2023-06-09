import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { TbCircleArrowUpRight } from "react-icons/tb";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  live_link,
  source_code_link,
}) => {
  const style = { fontSize: "1.5rem" };
  return (
    <motion.div variants={fadeIn("left", "spring", index * 0.5, 0.75)}>
      <div className="bg-tertiary md:pr-4 rounded-2xl w-full h-full flex flex-col hover:bg-[#151030b4] transition-all duration-700 md:flex-row">
        <div className="relative w-full h-full basis-1/2">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl rounded-b-none md:rounded-l-2xl md:rounded-r-none"
          />

          <div className="absolute top-0 right-0 flex flex-col gap-y-2 m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            <div
              onClick={() => window.open(live_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <TbCircleArrowUpRight style={style} />
            </div>
          </div>
        </div>

        <div className="py-8 lg:py-12 md:pt-4 px-8 lg:px-10 basis-1/2 flex justify-between flex-col">
          <div>
            <h3 className="text-white font-bold text-[32px]">{name}</h3>
            <p className="mt-2 text-secondary md:text-[15px] text-[16px] lg:text-[16px] ">
              {description}
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="
        mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. They reflect my ability to
          solve complex problems, work with different technologies, and manage
          projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap justify-center gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
