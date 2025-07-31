import React from "react";
import ResumePDF from "../../components/logos/A-sde-rohanWaghmare.pdf";

function Intro() {
  const handleOpenResume = () => {
    // Create an anchor element
    const link = document.createElement("a");
    link.href = ResumePDF; // Set the href attribute to your resume PDF file
    link.target = "_blank"; // Open the PDF in a new tab/window

    // Append the anchor element to the document body
    document.body.appendChild(link);

    // Trigger the click event on the anchor element
    link.click();

    // Remove the anchor element from the document body
    document.body.removeChild(link);
  };

  return (
    <section id="intro">
      <div className="intro bg-primary flex flex-col items-center justify-center text-center relative">
        <div className="h-[40vh] min-h-[300px] lg:min-h-[50vh] flex flex-col items-center justify-center gap-6 px-5 py-10 relative z-1">
          <h1 className="name text-6xl sm:text-5xl md:text-6xl lg:text-9xl xl:text-8xl text-fourth font-bold">
            Rohan Waghmare
          </h1>
          <h1 className="tag text-3xl sm:text-xl md:text-2xl lg:text-6xl text-fifth font-semibold">
            Persistence. Perseverance. Proficiency.
          </h1>
          <p className="phrase text-sm sm:hidden lg:text-lg xl:text-xl text-fifth opacity-50 font-mono max-w-[100%] sm:max-w-[100%] lg:max-w-[40%]">
            I'm a technology enthusiast with a knack for developing projects that solve a problem. Passionate about learning and
            excelling, I seek to provide the most efficient solutions to any given complex problem.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleOpenResume}
              className="border border-secondary text-secondary px-6 sm:px-8 py-2 sm:py-3 rounded text-sm sm:text-base font-mono resume-button"
            >
              Resume / CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;