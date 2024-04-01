import React from 'react'
import SectionTitle from "../../components/SectionTitle";

const SkillCloud = ({ skills, title }) => (
    <>
      <h1 className="text-fourth font-mono mt-5">{title}</h1>
      <div className="cloud-container flex flex-wrap gap-5 mt-5">
        {skills.map((skill, index) => (
          <div key={index} className="tech-cloud">
            {" "}
            {/* Ensure unique key */}
            <h1 className="font-mono">{skill}</h1>
          </div>
        ))}
      </div>
    </>
  );
function Skills() {
    const programmingLanguages = ["Python", "Javascript", "C", "C++"];
    const frameworks = [
      "NumPy",
      "Tensorflow",
      "Keras",
      "Pandas",
      "Matplotlib",
      "Scikit-learn",
      "OpenCV",
      "Pytest",
      "Django",
      "REST APIs",
    ];
    const webTechnologies = [
      "Typescript",
      "React.js",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "HTML5",
      "Material UI",
      "Recharts",
    ];
    const tools = [
      "Git",
      "AWS",
      "Docker",
      "MongoDB",
      "MySQL",
      "Kubernetes",
      "Azure",
      "Tableau",
      "PowerBI",
      "Flask",
    ];
    const skills = [
      "Machine-Learning",
      "Data-Analytics",
      "Data-Science",
      "Frontend",
      "Backend",
      "Unit-testing",
      "Agile",
      "Micro-services",
      "CI/CD",
      "SCRUM",
      "DevOps",
    ];
  return (
    <div>
        <SectionTitle title="Skills"></SectionTitle>
    <SkillCloud
    title="Programming Languages I speak"
    skills={programmingLanguages}
  />
  <SkillCloud title="Frameworks I use" skills={frameworks} />
  <SkillCloud title="Web Technologies I know" skills={webTechnologies} />
  <SkillCloud title="Tools & Databases I implement" skills={tools} />
  <SkillCloud title="Skills I have" skills={skills} />
</div>
  )
}

export default Skills