import estateApp from "../assets/projects/estateApp.jpg";
import estateApp2 from "../assets/projects/estateApp2.jpg";
import project2 from "../assets/projects/project-2.jpg";
import Texxas from "../assets/projects/Texxas.jpg";
import SaveBunny from "../assets/projects/SaveBunny.jpg";


export const HERO_CONTENT = `As a dedicated Software Engineering undergraduate, I love using technology to solve real-world problems. I have a strong background in software development and am skilled in building websites and mobile apps. I enjoy working in fast-paced environments and am always eager to learn new things and take on new challenges. My passion for continuous learning helps me contribute effectively to innovative projects.`;

export const ABOUT_TEXT = `Hello! I am a dedicated Software Engineering undergraduate with a passion for using technology to solve real-world problems. My journey in software development has equipped me with strong skills in building both websites and mobile applications. I thrive in fast-paced environments where I can continuously learn and take on new challenges. This enthusiasm for learning and innovation drives me to contribute effectively to projects that push the boundaries of technology. Whether it's coding a sleek mobile app or developing a robust website, I am committed to delivering solutions that make a difference. Let's create something amazing together!`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Estate Agency web app",
    image: estateApp,
    description:
      "Developed a real estate agency web application using the MERN stack (MongoDB, Express.js, React, Node.js). The project includes features such as a real-time chatting system using socket and user authentication to enhance user engagement and security.",
    technologies: ["MongoDB", "ExpressJS", "ReactJS", "Node.js"],
  },
  {
    title: "Tourism Management Website",
    image: estateApp2,
    description:
      "Developed a freelance work model for tour guides and drivers. Utilized Spring Boot (Java) for the backend, MySQL for the database, and Angular for the frontend. Implemented advanced security features using Spring Framework’s web configurations and security protocols to ensure data integrity and user protection.",
    technologies: ["Spring Boot-Java", "MySQL", "Angular"],
  },
  {
    title: "Task Management Mobile App",
    image: project2,
    description:
      "Developed a 'Tasks' Android mobile app for CRUD operations using Kotlin and Android Studio. Implemented Kotlin coroutines for efficient asynchronous operations, following the MVVM architecture for a clean and maintainable codebase. Utilized Room database for local data storage and management.",
    technologies: ["Kotlin", "MVVM", "RoomDB"],
  },

  {
    title: "Save Cute Bunny Mobile Game",
    image: SaveBunny,
    description:
      "Developed an engaging Android game called 'Save cute Bunny' using Android Studio and Kotlin. The game features intuitive touch controls, multiple difficulty levels. High scores are tracked and stored using SharedPreferences, encouraging players to beat their personal best",
    technologies: ["Kotlin", "SharedPreferences", "Android Studio"],
  },

  {
    title: "Online Clothing Shopping Store",
    image: Texxas,
    description:
      "Developed an online shopping store using HTML, CSS, and JavaScript for the frontend, with PHP and MySQL for the backend. Utilized AJAX to enhance user interactions and ensure seamless updates without page reloads. The application features user authentication, product catalog management, and shopping cart functionality. ",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "mySQL"],
  },
];

export const CONTACT = {
  address: "Divulapitiya, Sri Lanka ",
  phoneNo: "+94 76 4344826 ",
  email: "sanjanadeshan0826@gmail.com",
};
