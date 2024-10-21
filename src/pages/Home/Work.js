import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { work } from "../../resources/work";

function Work() {

  return (
    <section id="work">
    <div >
      <SectionTitle title="Work Experience" />

      <div className="flex py-10 gap-10 sm:flex-col align-center justify-center">
        <div className=" flex flex-col gap-10">
        {work.map((project,index)=>(
                    <div className="flex flex-col gap-10">
        
                    <div className="relative">
                        <img
                          src={work[index].image}
                          alt={work[index].title}
                          className="proj-img h-100 w-100 rounded-md"
                          style={{ maxHeight: "100px", maxWidth: "auto" }}
                        />
                        
                      </div>
                    <div className="flex flex-col gap-5 justify-center">
                        <div>
                        <a href={work[index].link}><h1 className="text-fourth company text-2xl  ">{work[index].company}
                        </h1></a>
                        <h1 className="text-fourth text-l">{work[index].title}</h1>
                        <h1 className="text-fifth text-xs m-0.5">{work[index].period}</h1>
                        <h1 className="text-fifth text-xs  m-0.5">{work[index].location}</h1>
                        </div>
                        <div className="cloud-container">
                          {work[index].technologies.map((tech, index) => (
                            <div className="tech-cloud" key={index}>
                              {tech}
                            </div>
                          ))}
                        </div>
                        
                        <p className="text-fifth font-mono">{work[index].description}</p>
                    </div>
                    </div>
            ))}

     
    </div>
    </div>
    </div>
    </section>
  );
}

export default Work;
