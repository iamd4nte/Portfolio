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
  airflow,
  python,
  spring,
  sql,
  tableau,
  jetro,
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
    name: "Airflow",
    icon: airflow,
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
    name: "Flask",
    icon: flask,
  },
  // {
  //   name: "Flask",
  //   icon: flask,
  // }
];

const experiences = [
  {
    title: "Data Scientist",
    company_name: "Jetro - Restaurant Depot",
    icon: jetro,
    iconBg: "#FFFFFF",
    date: "Jul 2024 - Present",
    points: [
      "Developed an ETL pipeline to generate RFM data for customer churn prediction and deployed a Dash app for churn analysis and visualization.",
      "Built a system to compare store spend with market benchmarks, analyzed performance across multiple baselines, and automated monthly regional exception reports using Airflow cron jobs.",
      "Built a Dash app for vendor comparison across all commodities, containerized with Docker for efficient deployment."
    ],
  },
  {
    title: "Graduate Research Assistant",
    company_name: "Stony Brook University",
    icon: sbu,
    iconBg: "#FFFFFF",
    date: "Jan 2023 - Dec 2023",
    points: [
      "Collaborated with Prof. Anshul Gandhi at the PACE Lab to create a secure sustainability accounting framework, tracking the environmental impact (carbon footprint) of individual job processes.",
      "Collected and analyzing job data (CPU, disk I/O, memory usage) across various benchmarks to estimate total power consumption.",
      "Architected a data processing pipeline incorporating data integration and validation, and conducted exploratory data analysis (EDA) utilizing tools such as Pandas, Seaborn, Excel, and Tableau for data visualization.",
      "Developed various ML and deep learning models for estimating power consumption."
    ],
  },
  {
    title: "Data Engineer",
    company_name: "Infintus Innovations Pvt. Ltd.",
    icon: infintus,
    iconBg: "#FFFFFF",
    date: "Jun 2019 - Aug 2020",
    points: [
      "Created ETL workflows in Apache NiFi and utilized Kafka for real-time data streaming in deploying NER-driven risk analysis, effectively tagging sensitive information within unstructured content, resulting in a significant 25% improvement in compliance and privacy measures.",
      "Built an insurance policy recommender system using hybrid filtering techniques for personalized recommendations, leading to a 12% sales boost.",
      "Created a Tableau dashboard to analyze sales and performance across insurance providers, enabling data-driven decision-making for optimizing sales strategies and identifying growth opportunities.",
      "Leveraged GraphQL to develop flexible query endpoints for accessing risk analysis data."
    ],
  },
  {
    title: "Data Engineer Intern",
    company_name: "Infintus Innovations Pvt. Ltd.",
    icon: infintus,
    iconBg: "#FFFFFF",
    date: "Jan 2019 - Mar 2019",
    points: [
      "Developed stored procedures and implemented indexing strategies in SQL Server, resulting in a 10% performance improvement.",
      "Modeled a text classification pipeline for automated service ticketing to predict root cause, utilizing BERT for language representation, PCA, and Spark NLP, leading to a 30% decrease in manual effort.",
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
