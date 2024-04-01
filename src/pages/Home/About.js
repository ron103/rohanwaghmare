import React from "react";
import SectionTitle from "../../components/SectionTitle";
import pic1 from "../../components/logos/ro3.jpeg";



function About() {


  return (
    <div>
      <SectionTitle title="About" />
      <div className="flex w-full gap-10 items-center sm:flex-col">
        <div className="about-text flex flex-col gap-5" id="outer-div">
          <p className="text-fourth font-mono">
            <i class="ri-play-line"></i>
            Hey there! I'm{" "}
            <span className="text-highlight font-mono">Rohan</span>, a{" "}
            <span className="text-highlight font-mono">
              22-year-old software developer.
            </span>
          </p>
          <p className="text-fourth font-mono">
            <i class="ri-play-line"></i>I hail from{" "}
            <a href="https://www.google.com/maps/place/Pune,+Maharashtra,+India/@18.524545,73.6981493,11z/data=!3m1!4b1!4m6!3m5!1s0x3bc2bf2e67461101:0x828d43bf9d9ee343!8m2!3d18.5204303!4d73.8567437!16zL20vMDE1eTJx?entry=ttu">
              <span className="text-highlight font-mono">Pune, India.</span>
            </a>{" "}
            I earned my Bachelor's degree in Computer Science from{" "}
            <a href="https://mituniversity.ac.in/">
              <span className="text-highlight font-mono">
                MIT ADT University, Pune.
              </span>
            </a>
          </p>
          <p className="text-fourth font-mono">
            <i class="ri-play-line"></i>
            Throughout my undergrad journey, I explored diverse realms of
            computer science, but the ones that truly captivated me were{" "}
            <span className="text-highlight font-mono">
              machine learning
            </span>{" "}
            and{" "}
            <span className="text-highlight font-mono">
              software development.
            </span>
          </p>
          <p className="text-fourth font-mono">
            <i class="ri-play-line"></i>
            Upon graduating in 2023, I embarked on my Master's journey in
            Computer Science at{" "}
            <a href="https://www.binghamton.edu/">
              <span className="text-highlight font-mono">
                Binghamton University, NY.
              </span>
            </a>
          </p>
        </div>
        <div className="about-me rounded-full border border-fourth">
          <img
            src={pic1}
            alt="Rohan's Portrait"
            className="rounded-full" // Adjust your CSS for these classes
            style={{
              minWidth: "100px",
              minHeight: "100px",
              maxWidth: "300px",
              maxHeight: "300px",
            }}
          />
        </div>
      </div>
              </div>
  );
}

export default About;
