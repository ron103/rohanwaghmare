import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { experiences } from "../../resources/experiences";

function Experiences() {
  const [selectedItemindex, setSelectedItemIndex] = React.useState(0);
  return (
    <div>
      <SectionTitle title="Experience" />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {experiences.map((experience, index) => (
            <div
              onClick={() => {
                setSelectedItemIndex(index);
              }} className="cursor-pointer"
            >
              <div className="p-5">
                <h1
                  className={`text-xl px-5 ${
                    selectedItemindex === index
                      ? "text-secondary border-secondary border-l-4 -ml-[3px] bg-[#0f3b2b31] py-3"
                      : "text-white"
                  }`}
                >
                  {experience.period}
                </h1>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-5">
            <h1 className="text-secondary text-xl">{experiences[selectedItemindex].title}</h1>
            <h1 className="text-white text-xl">{experiences[selectedItemindex].company}</h1>
            <p className="text-white text-xl">jesfdsdjkbfdjksbfjkdsbfjkdsbf</p>

        </div>
      </div>
    </div>
  );
}

export default Experiences;
