import Tilt from "react-parallax-tilt";
import { styles } from "../style";
import { SectionWrapper } from "./hoc";
import { projects } from "../constants";
import { arrow } from "../assets";

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

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-14 h-14 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={arrow}
                alt="fleche"
                className="object-contain"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
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
          expérience à travers des exemples. Chaque site sont des projets pro ou
          perso.
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
