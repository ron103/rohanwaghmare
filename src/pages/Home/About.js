import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import pic1 from "../../components/logos/chibirohan.png";
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
    <section id="about">
      <div>
        <SectionTitle title="About" />
        <div className="flex w-full gap-10 items-center sm:flex-col">
          <div className="about-text flex flex-col gap-5" id="outer-div">
            <p className="text-fourth font-mono">
              <i className="ri-play-line"></i>
              Hey! I’m{" "}
              <span className="text-highlight-main font-mono">
                Rohan, <button onClick={togglePlayPause}>Mozart of computers </button>
               </span>
               — currently building as a Software Engineering Apprentice at Michigan Health Information Network. I’ve previously engineered impactful solutions at{" "}
              <span className="text-highlight font-mono">Binghamton Tech Collective</span> and{" "}
              <span className="text-highlight font-mono">Flow</span>, where I worked with{" "}
              <span className="text-highlight font-mono">React</span>,{" "}
              <span className="text-highlight font-mono">Django</span>, and{" "}
              <span className="text-highlight font-mono">Swift</span>. I hold a Bachelor's in CS from{" "}
              <a href="https://mituniversity.ac.in/"><span className="text-highlight font-mono">MIT ADT University</span></a>{" "}
              and am currently pursuing my Master’s at{" "}
              <a href="https://www.binghamton.edu/"><span className="text-highlight font-mono">Binghamton University, NY</span></a>. 
              As an{" "}
              <span className="text-highlight font-mono">AWS Certified Developer</span> and{" "}
              <a href="https://ieeexplore.ieee.org/document/10112352" target="_blank" rel="noreferrer">
                <span className="text-highlight font-mono">IEEE-published researcher</span>
              </a>, I love building smart systems with{" "}
              <span className="text-highlight font-mono">Python</span>,{" "}
              <span className="text-highlight font-mono">AWS</span>, and{" "}
              <span className="text-highlight font-mono">React</span>.
              <br /><br />
  If you're looking for someone who codes like a composer and thinks like an architect... well, you're already reading this. Coincidence? Probably not.
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
          <div className="music-alert-main fixed bottom-10 left-1/2 transform -translate-x-1/2 font-mono padding-1vh margin-1vh bg-primary text-fifth px-4 py-2 rounded-md" style={{ fontSize: '10px' }}>
            <button className="music-alert" onClick={togglePlayPause}>
              <i className="ri-play-line" />Pause Music
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default About;
