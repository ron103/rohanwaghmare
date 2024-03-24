import React from "react";
import SectionTitle from "../../components/SectionTitle";
import pic1 from "../../components/logos/ro3.jpeg";

function About() {
    const skills =[
        'Python',
        "Javascript",
        "C",
        "C++",
        "MongoDB",
        "SQL",
        "React.js",
        "Node.js",

    ]
  return (
    <div>
      <SectionTitle title="About Me" />

      <div className="flex w-full gap-10 items-center sm:flex-col">
      <div className="about-text flex flex-col gap-5" id="outer-div">
          <p className="text-fourth font-mono">
          <i class="ri-play-line"></i>
            Born in <a href="https://www.google.com/maps/place/Pune,+Maharashtra,+India/@18.524545,73.6981493,11z/data=!3m1!4b1!4m6!3m5!1s0x3bc2bf2e67461101:0x828d43bf9d9ee343!8m2!3d18.5204303!4d73.8567437!16zL20vMDE1eTJx?entry=ttu"><span className="text-highlight font-mono"> Pune, India</span></a>, I grew up as curious boy playing with legos and engineering games.  
          </p>
          <p className="text-fourth font-mono">
          <i class="ri-play-line"></i>
            Channelled this curiosity into creativity during my Bachelors in Computer Science at <a href="https://mituniversity.ac.in/"><span className="text-highlight font-mono">MIT ADT University, Pune.</span></a> 
          </p>
          <p className="text-fourth font-mono">
          <i class="ri-play-line"></i>
            Amplified my <span className="text-highlight font-mono">deep passion</span> for building projects that create value by learning various technologies.
          </p>
          <p className="text-fourth font-mono">
          <i class="ri-play-line"></i>
            Graduated in 2023 and started my Masters in Computer Science at <a href="https://www.binghamton.edu/"><span className="text-highlight font-mono">Binghamton University, NY</span></a> graduating Spring 2025.  
          </p>

        </div>
        <div className="about-me rounded-full border border-fourth">
          <img
            src={pic1}
            alt="Pic1"
            style={{ minWidth:"100px", minHeight:"100px", maxWidth: "300px", maxHeight: "300px", borderRadius: "100%", width:"auto" }}
          />
        </div>
        
      </div>
      <div className="py-10">
        <h1 className="text-fourth font-mono">Few Technologies I worked with recently</h1>
        <div className="flex flex-wrap gap-5 mt-5">
        {
            skills.map((skill,index)=>(
                <div className="skill border border-secondary rounded-md py-3 px-5">
                    <h1 className="text-secondary font-mono">{skill}</h1>
                </div>
            ))
        }</div>
      </div>
    </div>
  );
}

export default About;
