import wallet from '../components/logos/walletio.png'
import tuberculosis from '../components/logos/tuberculosis.png'
import lstm from '../components/logos/lstm.png'
import IntelliPDF from '../components/logos/intellipdf.png'
import globe from '../components/logos/globe.png'

export const projects = [
  {
    id: "630120134042e2d798b59dc4",
    company: "Personal Project",
    title: "Wallet.io",
    period: "2023",
    technologies: [
      "React.js",
      "Material UI",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Redux Toolkit",
      "Typescript",
      "Machine Learning",
      "Tailwind CSS",
    ],
    image:
      wallet,
    link: "https://wallet-io.vercel.app",
    description: (
      <p>
        Built a feature rich financial dashboard frontend using TypeScript and
        React with 10 visually stunning charts created using Recharts and
        Material UI giving information about Profit, Revenue, and Loss on
        monthly basis suggesting a 4% growth. • Engineered the backend
        architecture using Node.js and Express.js with MongoDB as the database
        solution and leveraged machine learning (linear regression) predicting a
        12% annual growth for the company.
      </p>
    ),
  },
  {
    _id: "630120134842e2d798b59dd1",
    company: "Research Project",
    title: "IntelliPDF",
    period: "Aug 2022 - May 2023",
    technologies: ["Python", "Langchain", "Streamlit", "OpenAI API"],
    image:
    IntelliPDF,
    link: "https://intellipdf.streamlit.app",
    description: (
      <p>
        Created an application enabling interactive queries on PDF documents. Extracted over 10,000 tokens using
Langchain, with responses powered by OpenAI API. Implemented in Python with a Streamlit interface, providing a 95.3% accuracy rate in user query responses.
      </p>
    ),
  },
  {
    _id: "630120134842e2d798b59dd2",
    company: "Research Project",
    title: "Population Density Counter",
    period: "Aug 2022 - May 2023",
    technologies: ["React.js", "OpenStreetMap API", "Leaflet.js", "Material UI"],
    image:
      globe,
    link: "https://globe-apps.vercel.app",
    description: (
      <p>
        Engineered an advanced interactive geospatial application featuring population visualization within a selected
circle, dynamic country coloring, and calculation of world travel coverage percentage, utilizing React.js and Leaflet.js with Node.js and Express.js as backend, using RESTful APIs for data from OpenStreetMap and census databases, achieving 92.5% accuracy in population density calculations.

      </p>
    ),
  },

  {
    _id: "630120134042e2d798b59dc3",
    company: "Academic Project",
    title: "Real Time Sign Language to Text Translator",
    period: "Jan 2022 - Jun 2022",
    technologies: ["LSTM", "OpenCV", "Deep Learning"],
    image:
      lstm,
    link: "https://github.com/ron103/sign_language_translator",
    description: (
      <p>
        Engineered a real-time sign language to text translation system using
        Deep-learning, OpenCV, and Long Short-Term Memory (LSTM) networks for
        sequence modeling and prediction with categorical accuracy of 96.43%,
        helping 6.3% of the affected population in the country to communicate.
      </p>
    ),
  },

  {
    _id: "630120134842e2d798b59dc5",
    company: "Research Project",
    title: "Detection of Tuberculosis Using Transfer Learning",
    period: "Aug 2022 - May 2023",
    technologies: [
      "Tensorflow",
      "DenseNet201",
      "EfficientNetB3",
      "ResNet50",
      "UNET",
      "CLAHE",
      "TBX11K",
    ],
    image:
      tuberculosis,
    link: "https://github.com/ron103/Detection-of-Tuberculosis-using-Transfer-Learning",
    description: (
      <p>
        Conducted extensive research and lead a team of 4 students to evaluate
        the effectiveness of transfer learning models, including InceptionV3,
        EfficientNetB3, DenseNet201 and ResNet50, for the identification of
        Tuberculosis (TB) through chest X-ray images. • Enhanced image quality
        using Contrast Limited Adaptive Histogram Equalisation (CLAHE), employed
        semantic segmentation with UNET and GradCAM for interpretability
        acquiring 99.95% accuracy on TBX11K dataset, improving diagnosis for
        over 2.4 million people nationwide.{" "}
      </p>
    ),
  },
  {
    _id: "630120134842e2d798b59dc6",
    company: "Research Project",
    title: "Krypton - Cryptocurrency Statistics Application",
    period: "Aug 2022 - May 2023",
    technologies: ["Android Development", "Java", "API"],
    image:
      "https://i.pinimg.com/564x/70/31/82/703182bc95523ea41290467c3612704b.jpg",
    link: "",
    description: (
      <p>
        Krypton is a Java based cryptocurrency related information website. It
        tracks real time values of the coins and presents it to the users. It is
        a data platform provider that pulls prices from the various exchanges
        worldwide and presents it to the user. The user will be able to search
        up the coins they're looking for and find out about their price, change
        in price, charts, whitepaper, change in volume, market capitalization,
        coin supply (total and circulating) and ROI of the coin.
      </p>
    ),
  },
  {
    _id: "630120134842e2d798b59dc7",
    company: "Research Project",
    title: "Pune House Price Prediction",
    period: "Aug 2022 - May 2023",
    technologies: [
      "Machine Learning",
      "Python",
      "Pandas",
      "Numpy",
      "Scikit-learn",
      "Flask",
    ],
    image:
      "https://i.pinimg.com/564x/99/1c/80/991c8062932bd90ba4f08b04cb2e2b88.jpg",
    link: "https://github.com/ron103/pune_hpp",
    description: (
      <p>
        The Pune House Price Prediction project is a web-based application
        designed to forecast residential property prices in Pune using machine
        learning algorithms. It utilizes GridSearchCV for hyperparameter
        optimization, followed by predictive modeling through Linear Regression,
        Lasso Regression, and Decision Tree Regressor. The model achieves an
        accuracy of 85.7%. Users can input parameters such as site location,
        number of bedrooms and bathrooms, and square footage to receive price
        predictions. The application's front end is developed with HTML, CSS,
        and JavaScript, while Flask serves as the backend framework,
        facilitating interaction between the user interface and the machine
        learning model.
      </p>
    ),
  },
  {
    _id: "630120134842e2d798b59dc8",
    company: "Research Project",
    title: "Majesty.co - Food Ordering System",
    period: "Aug 2022 - May 2023",
    technologies: ["Django", "Flask", "SQL", "Tailwind CSS"],
    image:
      "https://i.pinimg.com/564x/13/f9/e3/13f9e37a703475481fd1633ffb44f817.jpg",
    link: "",
    description: (
      <p>
        Food Ordering System is to manage the details of the Food, Item
        Category, Shopping Cart, Customer, Order. It manages all the information
        about the Food, Delivery Address, Order, Food. The project is totally
        built at the administrative end and thus only the administrator is
        guaranteed the access. The purpose of the project is to build a website
        to reduce manual work for managing the Food, Item Category, Delivery
        Address, Shopping Cart. It tracks all the details about the Shopping
        Cart, Customer, Order.
      </p>
    ),
  },
  {
    _id: "630120134842e2d798b59dc9",
    company: "Research Project",
    title: "Network Optimization & Analysis Suite",
    period: "Aug 2022 - May 2023",
    technologies: ["Rust", "C++", "SSL", "TCP/IP", "Prometheus", "Grafana"],
    image:
      "https://i.pinimg.com/736x/5e/4c/07/5e4c07de0c30d154cdc537e32efe60ad.jpg",
    link: "",
    description: (
      <p>
        Engineered a Rust-based proxy server and a C++ UDP Ping toolkit,
        optimizing network performance with asynchronous IO and TCP/IP
        enhancements, resulting in a 43% speed increase and a 31% boost in
        diagnostic precision. Integrated SSL optimizations for secure data
        handling. Leveraged Prometheus and Grafana for a 26% improvement in
        downtime management through real-time monitoring, coupled with Docker
        and Jenkins to halve deployment times and ensure environment
        consistency.
      </p>
    ),
  },
  {
    _id: "630120134842e2d798b59dd3",
    company: "Research Project",
    title: "AI Vision Board Creator",
    period: "Aug 2022 - May 2023",
    technologies: [
      "HTML5",
      "Tailwind CSS",
      "Javascript",
      "React.js",
      "Node.js",
      "Express.js",
      "AWS",
      "PIL",
      "Python",
      "Tensorflow",
    ],
    image:
      "https://i.pinimg.com/564x/f5/68/9a/f5689ad45ddcb83bad100fb563252b1c.jpg",
    link: "",
    description: (
      <p>
        Developed an automatic vision board creator leveraging ChatGPT and
        DALL-E, to generate personalized vision boards based on user input and
        preferences, implemented in Python. Employed the Flask web framework to
        build a lightweight and flexible backend for the web application and
        HTML, CSS, and JavaScript for frontend development. Utilized TensorFlow
        for model training, fine-tuning, and inference tasks, and PIL for image
        preprocessing and manipulation. Leveraged AWS cloud infrastructure for
        scalable and reliable hosting.
      </p>
    ),
  },
  {
    _id: "630120134842e2d798b59dd2",
    company: "Research Project",
    title: "OMR Sheet scanner",
    period: "Aug 2022 - May 2023",
    technologies: ["Python", "OpenCV", "MongoDB"],
    image:
      "https://i.pinimg.com/736x/87/e6/0b/87e60b5889a506e16a0e84a90ae0a35f.jpg",
    link: "https://github.com/ron103/OMRsheet_scanner",
    description: (
      <p>
        Used OpenCV to scan OMR sheets and grade students correctly. The correct
        answers were retreived from the database for specific OMR sheets using
        MongoDB.
      </p>
    ),
  },
];
