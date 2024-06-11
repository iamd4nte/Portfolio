import {
  mobile,
  backend,
  creator,
  web,
  docker,
  mongodb,
  nodejs,
  reactjs,
  aws,
  elastic,
  flask,
  jenkins,
  k8,
  pandas,
  python,
  spring,
  sql,
  tableau,
  sbu,
  infintus,
  mh,
  sustainability,
  ac
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Data Science",
    icon: web,
  },
  {
    title: "Full-Stack Development",
    icon: mobile,
  },
  {
    title: "Cloud Computing",
    icon: backend,
  },
  {
    title: "Machine Learning",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Pandas",
    icon: pandas,
  },
  {
    name: "Elastic",
    icon: elastic,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Tableau",
    icon: tableau,
  },
  {
    name: "Jenkins",
    icon: jenkins,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "K8",
    icon: k8,
  },
  {
    name: "Spring",
    icon: spring,
  },
  // {
  //   name: "Flask",
  //   icon: flask,
  // }
];

const experiences = [
  // {
  //   title: "React.js Developer",
  //   company_name: "Starbucks",
  //   icon: starbucks,
  //   iconBg: "#383E56",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Graduate Research Assistant",
    company_name: "Stony Brook University",
    icon: sbu,
    iconBg: "#FFFFFF",
    date: "Jan 2023 - Dec 2023",
    points: [
      "Contributed to a data center sustainability cost modeling project, collecting and analyzing job data to estimate carbon footprints based on power usage to track server CPU, memory, and disk I/O power consumption.",
      "Architected a data processing pipeline incorporating data integration and validation, and conducted exploratory data analysis (EDA) utilizing tools such as Pandas, Seaborn, Excel, and Tableau for data visualization.",
      "Developed various ML and deep learning models for estimating power consumption."
    ],
  },
  {
    title: "Data Scientist",
    company_name: "Infintus Innovations Pvt. Ltd.",
    icon: infintus,
    iconBg: "#FFFFFF",
    date: "Jun 2019 - May 2020",
    points: [
      "Built ETL workflows in Apache Nifi and deployed NER-driven risk analysis, effectively tagging sensitive information in unstructured content. This implementation led to a notable 25% improvement in compliance and privacy measures, leveraging centralized analytics through Kibana for risk monitoring.",
      "Developed an insurance policy recommender system with collaborative filtering techniques (cosine similarity, KNN, Bayesian inference) for personalized recommendations, leading to a 12% sales boost.",
      "Created a Tableau dashboard to analyze sales and performance across insurance providers, enabling data-driven decision-making for optimizing sales strategies and identifying growth opportunities.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Infintus Innovations Pvt. Ltd.",
    icon: infintus,
    iconBg: "#FFFFFF",
    date: "Jan 2019 - Mar 2019",
    points: [
      "Developed stored procedures and created complex views using Joins for robust and fast retrieval of data in SQL Server resulting in 10% performance improvement.",
      "Implemented an automated text classification model for service ticketing, leveraging NLP techniques and tools such as Apache OpenNLP, Spark NLP, and GloVe for feature engineering, reducing manual effort by 30%.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Autonomous Car",
    description:
      "Designed and built an autonomous vehicle using a 9-layer CNN based on NVIDIA’s DAVE-2 architecture, enabling it to navigate from source to destination and avoid collisions solely with camera input, without any sensors.",
    tags: [
      {
        name: "Raspbian",
        color: "blue-text-gradient",
      },
      {
        name: "OpenCV",
        color: "green-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "pink-text-gradient",
      },
    ],
    image: ac,
    source_code_link: "https://github.com/",
  },

  {
    name: "Social Listening for Mental Health",
    description: "A big data solution for identifying individuals needing mental health support using extensive Reddit data from specific subreddits (e.g., ADHD, depression, anxiety) aims to differentiate between posts indicating a need for intervention and those that, despite similar language, do not indicate such distress.",
    tags: [
      {
        name: "PyTorch",
        color: "blue-text-gradient",
      },
      {
        name: "Apache Spark",
        color: "green-text-gradient",
      },
      {
        name: "GCP",
        color: "pink-text-gradient",
      },
    ],
    image: mh,
    source_code_link: "https://github.com/BDA-Social-Listening/Social-Listening-Dev",
  },
  {
    name: "Empirical Evaluation of ML Models for Per-Job Power Prediction",
    description: "This project focuses on evaluating the performance of various machine learning models for predicting the power consumption of individual user jobs in cloud data centers. Unlike previous studies that concentrate on workloads stressing a single resource (like CPU or DRAM), this project addresses modern workloads that stress multiple resources simultaneously.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Bash",
        color: "green-text-gradient",
      },
      {
        name: "Pandas",
        color: "pink-text-gradient",
      },
    ],
    image: sustainability,
    source_code_link: "https://dl.acm.org/doi/pdf/10.1145/3629527.3651418",
  },
];

export { services, technologies, experiences, testimonials, projects };
