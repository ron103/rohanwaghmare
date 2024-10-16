import React from "react";
import ResumePDF from "../../components/logos/awe-rohan-modern-res.pdf";

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
        <div className="h-[40vh] flex flex-col items-center justify-center gap-5 py-10 relative z-1">
          <h1 className="name text-7xl lg:text-8xl text-fourth font-bold">
            Rohan Waghmare
          </h1>
          <h1 className="tag text-3xl lg:text-4xl text-fifth font-semibold">
            Persistence. Perseverance. Proficiency.
          </h1>

          <p className="phrase text-fifth opacity-50 lg:text-sm font-mono w-[60%]">
            I'm a technology enthusiast with a knack for developing projects that solve a problem. Passionate about learning and excelling, I seek to provide the most efficient solutions to any given complex problem.
          </p>
          <div className="flex gap-5">
            <button
              onClick={handleOpenResume}
              className="border-[1px] mt-5 text-sm sm:text-sm font-mono border-secondary text-secondary px-10 py-2 rounded resume-button"
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