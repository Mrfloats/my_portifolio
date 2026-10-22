export const personalInfo = {
  name: "Obey Kuyangamara",
  title: "Software Engineering Student & Developer",
  institution: "Harare Institute of Technology",
  location: "Harare, Zimbabwe",
  email: "kuyangamaraobeykayz@gmail.com",
  phone: "+263 78 033 6088",
  github: "https://github.com/Mrfloats",
  githubUsername: "Mrfloats",
  status: "Open to Industrial Attachment Opportunities",
  yearOfStudy: "3rd Year",
  degree: "Bachelor of Technology (Honours) in Software Engineering",
  leadBio: "I’m a third-year Software Engineering student at Harare Institute of Technology, seeking a full-time industrial attachment in software development, web development, or IT support. I build responsive web apps and cross-platform mobile solutions with JavaScript, React.js, and Flutter.",
  summary: "Disciplined, dependable, and quick to learn. Experienced in full-cycle web development, mobile applications, relational databases, cloud hosting, and IT infrastructure fundamentals. Ready to deliver immediate value to development teams.",
};

export const stats = [
  { label: "Year of Study", value: "3rd Year" },
  { label: "Institution", value: "HIT Harare" },
  { label: "Core Focus", value: "React & Flutter" },
  { label: "Attachment Ready", value: "Full-Time" },
];

export const skillCategories = [
  "All",
  "Web & Frontend",
  "Mobile Apps",
  "Databases & Cloud",
  "Languages & Tools",
  "Systems & IT",
  "UI/UX Design",
];

export const skills = [
  {
    category: "Web & Frontend",
    title: "Web Development",
    icon: "code",
    description: "Building responsive, component-driven single page applications and REST API integrations.",
    tags: ["JavaScript (ES6+)", "React.js", "HTML5", "CSS3 / Modern CSS", "RESTful APIs", "Responsive Design"],
    proficiency: "Advanced",
  },
  {
    category: "Mobile Apps",
    title: "Cross-Platform Mobile",
    icon: "smartphone",
    description: "Developing cross-platform mobile applications for Android and iOS with Flutter and Dart.",
    tags: ["Flutter", "Dart", "Android", "iOS", "Mobile UI", "State Management"],
    proficiency: "Intermediate",
  },
  {
    category: "Databases & Cloud",
    title: "Databases & Cloud Services",
    icon: "database",
    description: "Relational database schema modeling, querying, and cloud application backend integration.",
    tags: ["SQL", "Firebase Auth", "Cloud Firestore", "Cloud Hosting", "Data Modeling"],
    proficiency: "Intermediate",
  },
  {
    category: "Languages & Tools",
    title: "Languages & Development Workflow",
    icon: "terminal",
    description: "Core programming languages, Git version control, collaboration workflows, and modern tooling.",
    tags: ["JavaScript", "Python", "Java", "TypeScript (Learning)", "Git & GitHub", "VS Code", "Agile Methodologies"],
    proficiency: "Advanced",
  },
  {
    category: "Systems & IT",
    title: "Networking & System Administration",
    icon: "server",
    description: "Data communications, computer network topologies, Windows systems support, and enterprise SAP Basis basics.",
    tags: ["Computer Networking", "TCP/IP & LAN", "Windows OS", "IT Support", "SAP Basis Fundamentals"],
    proficiency: "Foundational",
  },
  {
    category: "UI/UX Design",
    title: "UI/UX & Prototyping",
    icon: "palette",
    description: "Translating user requirements into clear wireframes, interactive prototypes, and clean graphic design assets.",
    tags: ["Wireframing", "UI Prototyping", "User Experience", "Graphic Design", "Information Architecture"],
    proficiency: "Intermediate",
  },
];

export const projectCategories = ["All", "Web", "Mobile", "Systems"];

export const projects = [
  {
    id: "hit-campussync",
    category: "Web",
    title: "CampuSync HIT - Student & Resource Portal",
    subtitle: "Web Application",
    description: "A centralized campus web portal tailored for Harare Institute of Technology students to access departmental notices, timetables, and peer-to-peer academic resources in real-time.",
    highlights: [
      "Real-time Firestore sync for instant announcement notifications",
      "Firebase Authentication for secure student role verification",
      "Fully responsive mobile-first UI built with modern CSS",
    ],
    tags: ["React.js", "JavaScript", "Firebase Auth", "Firestore", "Modern CSS"],
    github: "https://github.com/Mrfloats",
    demo: "#",
    color: "#0A6E69",
    type: "Featured Web Project",
  },
  {
    id: "pulsefit-app",
    category: "Mobile",
    title: "PulseFit - Cross-Platform Habit & Workout Tracker",
    subtitle: "Mobile Application",
    description: "Cross-platform mobile application built with Flutter & Dart enabling students and athletes to log daily workouts, track hydration, and maintain activity streaks with local offline caching.",
    highlights: [
      "Smooth 60fps Flutter UI with custom health metric cards",
      "Offline-first architecture with SQLite local data persistence",
      "Cross-platform compilation for Android and iOS targets",
    ],
    tags: ["Flutter", "Dart", "SQLite", "Mobile UI", "Cross-Platform"],
    github: "https://github.com/Mrfloats",
    demo: "#",
    color: "#0284C7",
    type: "Featured Mobile App",
  },
  {
    id: "smart-inventory",
    category: "Systems",
    title: "Enterprise Asset & Network Monitor",
    subtitle: "Full-Stack System",
    description: "An internal IT hardware tracking and network equipment monitoring dashboard designed to streamline asset assignment, status tracking, and maintenance logs.",
    highlights: [
      "Relational SQL schema designed for hardware tracking",
      "Python backend REST endpoints with JSON reporting",
      "Network device ping status & maintenance logging",
    ],
    tags: ["Python", "SQL", "REST API", "Networking", "React Dashboard"],
    github: "https://github.com/Mrfloats",
    demo: "#",
    color: "#D97706",
    type: "Systems & Backend",
  },
  {
    id: "agrilink-portal",
    category: "Web",
    title: "AgriLink Marketplace & Produce Discovery",
    subtitle: "Responsive Web Platform",
    description: "A lightweight web marketplace prototype designed for local farming cooperatives to list fresh produce batches and connect with urban buyers across Harare and Mashonaland.",
    highlights: [
      "Optimized for low-bandwidth cellular mobile browsers",
      "Categorized catalog with instant search & filter",
      "Direct WhatsApp and call integration for fast deals",
    ],
    tags: ["React.js", "JavaScript", "Responsive Design", "CSS3"],
    github: "https://github.com/Mrfloats",
    demo: "#",
    color: "#059669",
    type: "Web Application",
  },
];

export const educationHistory = [
  {
    period: "2024 — Present",
    degree: "Bachelor of Technology (Honours) in Software Engineering",
    institution: "Harare Institute of Technology",
    location: "Harare, Zimbabwe",
    status: "Currently in 3rd Year (Seeking Industrial Attachment)",
    description: "Rigorous honours curriculum focusing on software architecture, algorithms, modern web technologies, database design, and mobile application engineering.",
    coursework: [
      "Software Architecture & Design",
      "Database Systems & SQL",
      "Data Structures & Algorithms",
      "Object-Oriented Programming (Java/Python)",
      "Web Technologies & Mobile Application Development",
      "Computer Networks & Data Communications",
      "Software Requirements Engineering",
      "Software Project Management & Agile",
    ],
  },
  {
    period: "2018 — 2023",
    degree: "Advanced & Ordinary Level Certificates (ZIMSEC)",
    institution: "Murereka High School",
    location: "Chinhoyi, Zimbabwe",
    status: "Completed with Merit",
    description: "Strong academic foundation with an emphasis on sciences, analytical reasoning, and mathematics, qualifying for direct university admission into Software Engineering at HIT.",
    coursework: ["Pure Mathematics", "Computer Science Foundations", "Physical Sciences"],
  },
];

export const personalStrengths = [
  "Analytical problem-solving and structured algorithmic thinking",
  "Team collaboration, active listening, and peer pair programming",
  "Clear technical communication and thorough documentation",
  "Time management, work ethic, and dependable delivery",
  "Curiosity and rapid adaptation to emerging technologies and frameworks",
];

export const languages = [
  { language: "English", level: "Fluent / Professional Working" },
  { language: "Shona", level: "Native Proficiency" },
];

export const interests = [
  { title: "Volleyball", icon: "activity", desc: "Active player; team coordination and agility" },
  { title: "Football & Darts", icon: "target", desc: "Focus, tactical thinking, and recreation" },
  { title: "Personal Coding", icon: "laptop", desc: "Exploring TypeScript, UI micro-interactions, and open-source tools" },
];
