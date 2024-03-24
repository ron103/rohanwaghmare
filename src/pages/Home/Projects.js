import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { projects } from "../../resources/projects";

function Projects() {
  const [selectedItemindex, setSelectedItemIndex] = React.useState(0);
  const technologies = projects[selectedItemindex].technologies || [];
  return (
    <div >
      <SectionTitle title="Projects" />
      <div className="flex py-10 gap-10 sm:flex-col align-center justify-center">
        <div className=" flex flex-col w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {projects.map((project, index) => (
            <div
              onClick={() => {
                setSelectedItemIndex(index);
              }} className=" cursor-pointer"
            >
              <div className="p-2">
                <h1
                  className={`proj-title px-5 ${
                    selectedItemindex === index
                      ? "text-secondary border-secondary border-l-2 bg-[#00e5fe02] py-2"
                      : "text-fifth"
                  }`}
                  style={{ width: "250px" }}
                >
                  {project.title}
                </h1>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-10 sm:flex-col">
        <div className="relative">
            <img
              src={projects[selectedItemindex].image}
              alt={projects[selectedItemindex].title}
              className="proj-img h-100 w-100 rounded-md"
              style={{ maxHeight: "300px", maxWidth: "auto" }}
            />
          </div>
        <div className="flex flex-col gap-5 justify-center">
            <h1 className="text-fourth text-xl">{projects[selectedItemindex].title}
            <a href={projects[selectedItemindex].link}>
            <i
              class="ri-share-circle-line absolute"
            ></i>
            </a>
            </h1>
            <div className="cloud-container">
              {technologies.map((tech, index) => (
                <div className="tech-cloud" key={index}>
                  {tech}
                </div>
              ))}
            </div>
            <p className="text-fifth">{projects[selectedItemindex].description}</p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
