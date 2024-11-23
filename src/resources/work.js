import flow from '../components/logos/flow.jpeg'
import btc from '../components/logos/btc.png'

export const work = [
  {
    id: "630120134042e2d798b59dc4",
    company: "Binghamton Tech Collective",
    title: "Software Engineer",
    period: "Aug 2024 - Present",
    location: "Binghamton, NY",
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "HTML5",
      "Tailwind CSS",
    ],
    image:
      btc,
    link: "https://careertools.binghamton.edu/organizations/tech-collective/",
    description: (
      <p>
       <i className="ri-play-line"></i>Worked on the development of the official club website using React.js and Firebase, achieving a 35% increase in user
engagement, as measured through click-through rates and session duration, by incorporating improved UI/UX designs and
real-time updates.

<br></br>
<i className="ri-play-line"></i>Optimized backend services for an e-commerce platform using Node.js and Redis caching, reducing load times by 30% through the
implementation of asynchronous processing and efficient data retrieval techniques.
<br></br>
<i className="ri-play-line"></i>Contributed to cross-platform development using Flutter, enabling the migration of features from a web application to Android and
iOS platforms, which expanded platform accessibility and increased the user base by 25%.
<br></br>
<i className="ri-play-line"></i>Led sprint planning and collaborated with cross-functional teams in Agile/SCRUM settings, ensuring project milestones were met
within deadlines while promoting team synergy.
<br></br>
<i className="ri-play-line"></i>Assisted in introducing CI/CD pipelines using GitHub Actions to automate deployment and basic integration testing, laying the
foundation for a more efficient development workflow.
      </p>
    ),
  },
  {
    _id: "630120134842e2d798b59dd1",
    company: "Flow",
    title: "Backend Engineer",
    period: "Jul 2024 - Aug 2024",
    location: "Wilmington, DE",
    technologies: ["Python", "Django", "Kafka", "AWS","PostgreSQL", "Docker"],
    image:
    flow,
    link: "https://www.flowai.tech/",
    description: (
      <p>
        <i className="ri-play-line"></i>Optimized backend applications using Django, improving system scalability and reducing API response times by 25% through
efficient query handling and code optimization.
<br></br>
<i className="ri-play-line"></i>Designed a robust data pipeline for aggregating data from Crunchbase, PitchBook, and LinkedIn into PostgreSQL, achieving a
43% reduction in data inconsistencies through schema validation and efficient data integration workflows.
<br></br>
<i className="ri-play-line"></i>Implemented secure RESTful APIs using OAuth2.0 for client authentication, ensuring data integrity and enhancing security.
<br></br>
<i className="ri-play-line"></i>Collaborated in a SCRUM team to refactor legacy codebases, applying object-oriented principles and design patterns, which
improved code readability and maintainability.
<br></br>
<i className="ri-play-line"></i>Preprocessed and managed large datasets stored in AWS S3 for AI model training, optimizing workflows for distributed systems
and reducing processing time.
      </p>
    ),
  },
  
];
