import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";
import { IconContext } from "react-icons";
import "../index.css";

const SocialLinks = () => {
  const style = { color: "#915eff", fontSize: "2.5rem" };

  return (
    <div className="fixed bottom-12 right-0 w-16 h-56 flex flex-col justify-evenly">
      <IconContext.Provider value={{ className: "contactIcon" }}>
        <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin style={style} />
        </a>
      </IconContext.Provider>

      <IconContext.Provider value={{ className: "contactIcon" }}>
        <a href="http://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter style={style} />
        </a>
      </IconContext.Provider>

      <IconContext.Provider value={{ className: "contactIcon" }}>
        <a href="http://hashnode.com" target="_blank" rel="noopener noreferrer">
          <SiHashnode style={style} />
        </a>
      </IconContext.Provider>

      <IconContext.Provider value={{ className: "githubContactIcon" }}>
        <a href="http://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub style={style} />
        </a>
      </IconContext.Provider>
    </div>
  );
};

export default SocialLinks;
