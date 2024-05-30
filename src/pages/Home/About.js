import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import pic1 from "../../components/logos/ro3.jpeg";
import mozart from '../../components/logos/mozart.mp3';

function About() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const song = new Audio(mozart);

  useEffect(() => {
    if (isPlaying) {
      song.play();
      setShowAlert(true);
    } else {
      song.pause();
      setShowAlert(false);
    }
    
    return () => {
      // Pause the song when the component is unmounted or isPlaying state changes
      song.pause();
    };
  }, [isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying(prevState => !prevState);
  };

  return (
    <div>
      <SectionTitle title="About" />
      <div className="flex w-full gap-10 items-center sm:flex-col">
        <div className="about-text flex flex-col gap-5" id="outer-div">
          <p className="text-fourth font-mono">
            <i className="ri-play-line"></i>
            Hey there! I'm{" "}
            <span className="text-highlight font-mono">
              Rohan, <button onClick={togglePlayPause}>Mozart of computers.</button>
            </span>
            {" "}I build multi-functional softwares that work like symphony.
          </p>
          <p className="text-fourth font-mono">
            <i className="ri-play-line"></i>I'm from{" "}
            <a href="https://www.google.com/maps/place/Pune,+Maharashtra,+India/@18.524545,73.6981493,11z/data=!3m1!4b1!4m6!3m5!1s0x3bc2bf2e67461101:0x828d43bf9d9ee343!8m2!3d18.5204303!4d73.8567437!16zL20vMDE1eTJx?entry=ttu">
              <span className="text-highlight font-mono">Pune, India,</span>
            </a>{" "}
            where I earned my Bachelor's degree in Computer Science from{" "}
            <a href="https://mituniversity.ac.in/">
              <span className="text-highlight font-mono">
                MIT ADT University.
              </span>
            </a>
          </p>
         
          <p className="text-fourth font-mono">
            <i className="ri-play-line"></i>
            I am a Master's student studying
            Computer Science at{" "}
            <a href="https://www.binghamton.edu/">
              <span className="text-highlight font-mono">
                Binghamton University, NY.
              </span>
            </a>
          </p>
          <p className="text-fourth font-mono">
            <i className="ri-play-line"></i>
            I have explored diverse realms of computer science, but the ones that truly captivated me were{" "}
            <span className="text-highlight font-mono">
              machine learning
            </span>{" "}
            and{" "}
            <span className="text-highlight font-mono">
              software development.
            </span>
          </p>
          <p className="text-fourth font-mono">
            <i className="ri-play-line"></i>
            I have always been a {" "}
            <span className="text-highlight font-mono">
            problem solver. 
            </span>{" "}
            Engineering has been on my mind from the day I started playing with{" "}
            <span className="text-highlight font-mono">
              Legos.
            </span>{" "}
          </p>
          <p className="text-fourth font-mono">
            <i className="ri-play-line"></i>
            I find it truly satisfying to engage my brain in engineering 
            {" "}
            <span className="text-highlight font-mono">
            high-tech products
            </span>{" "}
             and <span className="text-highlight font-mono">
            resolving complex errors.
            </span>{" "}
          </p>
          <p className="text-fourth font-mono">
            <i className="ri-play-line"></i>
            Broadening my {" "}
             <span className="text-highlight font-mono">
             technological horizons
            </span>{" "} by learning new tech while keeping the 
            {" "}
             <span className="text-highlight font-mono">
             mastery
            </span>{" "} of the things I already know is something I do on a daily basis.{" "}
          </p>
        </div>
        <div className="about-me rounded-full border border-fourth">
          <img
            src={pic1}
            alt="Rohan's Portrait"
            className="rounded-full"
            style={{
              minWidth: "100px",
              minHeight: "100px",
              maxWidth: "300px",
              maxHeight: "300px",
            }}
          />
        </div>
      </div>
      {showAlert && (
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 font-mono bg-primary text-fifth px-4 py-2 rounded-md" style={{fontSize:'20px'}}>
          <button onClick={togglePlayPause}><i className="ri-play-line" />Pause Music</button>
        </div>
      )}
    </div>
  );
}

export default About;
