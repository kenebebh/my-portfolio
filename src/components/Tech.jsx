import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
// import { Text3D } from "@react-three/drei";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div
          className="w-32 h-32 flex flex-col items-center"
          key={technology.name}
        >
          <BallCanvas icon={technology.icon} />
          {/* <Text3D smooth={1} lineHeight={0.5} letterSpacing={-0.025}>
            {technology.name}
          </Text3D> */}
          <p>{technology.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
