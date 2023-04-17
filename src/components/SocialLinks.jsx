import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";
import { IconContext } from "react-icons";
import "../index.css";

const SocialLinks = () => {
  const style = { color: "#915eff", fontSize: "2.5rem" };

  return (
    <div className="fixed bottom-12 right-0 w-12 h-56 flex flex-col justify-evenly sm:mr-0 md:mr-2">
      <IconContext.Provider value={{ className: "contactIcon" }}>
        <a
          href="https://www.linkedin.com/in/kenebebh-banigo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin style={style} />
        </a>
      </IconContext.Provider>

      <IconContext.Provider value={{ className: "contactIcon" }}>
        <a
          href="https://twitter.com/BanigoKene"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter style={style} />
        </a>
      </IconContext.Provider>

      <IconContext.Provider value={{ className: "contactIcon" }}>
        <a
          href="https://bebh.hashnode.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiHashnode style={style} />
        </a>
      </IconContext.Provider>

      <IconContext.Provider value={{ className: "githubContactIcon" }}>
        <a
          href="https://github.com/kenebebh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub style={style} />
        </a>
      </IconContext.Provider>
    </div>
  );
};

export default SocialLinks;
