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
       <i className="ri-play-line"></i>Collaborated with a team of 6 to design, build, and maintain the official club website, utilizing HTML, CSS, JavaScript,
and React to ensure a seamless user experience.

<br></br>
<i className="ri-play-line"></i>Managed and updated the backend of an ecommerce application, implementing efficient code and maintaining data integrity
to enhance app performance and user satisfaction.
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
        <i className="ri-play-line"></i>Led and managed a team of 12 engineers, building a comprehensive data pipeline integrating web scraping, Kafka,
Amazon S3, data transformation, PostgreSQL, AI models, and MongoDB, containerized with Docker.
<br></br>
<i className="ri-play-line"></i>Developed web scrapers for Crunchbase, Pitchbook, LinkedIn, and CSV files to standardize and combine data from
multiple sources, reducing inconsistency by 33%.
<br></br>
<i className="ri-play-line"></i>Implemented Kafka for data streaming, validated JSON data, and achieved 99% data integrity through schema validation
and deduplication. Managed secure data backups in Amazon S3 with AES encryption, and designed storage solutions in
Redshift Data Warehouse.
<br></br>
<i className="ri-play-line"></i>Integrated and labeled data for AI model training, improving AI performance. Developed API calls for AI models using
Django, enhancing backend functionality.
<br></br>
<i className="ri-play-line"></i>Collaborated on cloud platform design and maintenance, contributing to reduced downtime. Conducted code reviews,
testing, and troubleshooting, improving live production deployment efficiency.
      </p>
    ),
  },
  
];
