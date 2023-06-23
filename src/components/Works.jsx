import Tilt from "react-parallax-tilt";
import { styles } from "../style";
import { SectionWrapper } from "./hoc";
import { projects } from "../constants";
import { arrow } from "../assets";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";

const ProjectCard = ({ name, description, tags, image, source_code_link }) => {
  return (
    <div>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360] w-full"
      >
        <div className="relative w-full h-[400px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full rounded-2xl object-cover object-center"
          />
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
          <button
            onClick={() => window.open(source_code_link, "_blank")}
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl cursor-pointer mt-2 flex"
          >
            Voir le site
            <img
              src={arrow}
              alt="fleche en haut à droite"
              className="mt-1 ml-3"
              width={15}
              height={15}
            />
          </button>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className="`text-[14px] ${tag.color}`}">
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </div>
  );
};

const Works = () => {
  return (
    <>
      <div>
        <p className={styles.sectionSubText}>Mes créations</p>
        <h2 className={styles.sectionHeadText}>Projets.</h2>
      </div>

      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Les sites internet suivants présentent mes compétences et mon
          expérience dans la création de sites web.
        </p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projets");
