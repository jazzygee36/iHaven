import { CourseProps } from "./interface";
import Frontend from "@/assets/images/frontend.jpg";
import Backend from "@/assets/images/backend.png";
import Intro from "@/assets/images/intro.jpg";

export const courses: CourseProps[] = [
  {
    id: 1,
    image: Frontend,
    title: "Samson",
    course: "Frontend Development",
    price: "₦50,000",
    duration: "8 Weeks",
    level: "Beginner",
    rating: 4,
    description: "Learn HTML, CSS, JS, and React.",
    progress: 65,
    curriculum: [
      {
        section: "Introduction to Web Development",
        topics: [
          "What is Web Development?",
          "Frontend vs Backend",
          "Web Browsers & How the Internet Works",
        ],
      },
      {
        section: "HTML & CSS",
        topics: [
          "HTML Elements and Structure",
          "CSS Selectors and Box Model",
          "Flexbox and Grid",
          "Responsive Design with Media Queries",
        ],
      },
      {
        section: "JavaScript Basics",
        topics: [
          "Variables, Data Types & Operators",
          "Functions and Scope",
          "DOM Manipulation",
          "ES6+ Features (let/const, arrow functions, destructuring)",
        ],
      },
      {
        section: "React.js",
        topics: [
          "JSX and Component Architecture",
          "Props & State",
          "Event Handling",
          "React Hooks (useState, useEffect)",
          "Conditional Rendering & Lists",
        ],
      },
      {
        section: "Project & Deployment",
        topics: [
          "Building a Portfolio Project",
          "Version Control with Git & GitHub",
          "Deploying with Vercel or Netlify",
        ],
      },
    ],
  },

  {
    id: 2,
    image: Backend,
    title: "Samson",
    course: "Backend Development",
    price: "₦50,000",
    duration: "8 Weeks",
    level: "Beginner",
    rating: 4,
    description: "Master server-side development.",
    progress: 100,
    curriculum: [
      {
        section: "Node.js & Environment Setup",
        topics: [
          "Introduction to Node.js",
          "Installing Node.js and npm",
          "Understanding Package.json",
          "Basic Node Modules",
        ],
      },
      {
        section: "Express.js Framework",
        topics: [
          "Routing and Middleware",
          "Handling Requests and Responses",
          "Error Handling",
          "REST API Architecture",
        ],
      },
      {
        section: "Databases with MongoDB",
        topics: [
          "Introduction to NoSQL",
          "CRUD Operations with MongoDB",
          "Mongoose ODM Basics",
          "Data Validation & Relationships",
        ],
      },
      {
        section: "Authentication & Security",
        topics: [
          "JWT Authentication",
          "Password Hashing with bcrypt",
          "Role-Based Access Control",
          "Securing APIs",
        ],
      },
      {
        section: "Testing & Deployment",
        topics: [
          "API Testing with Postman",
          "Project Structuring Best Practices",
          "Deploying Backend with Render or Railway",
        ],
      },
    ],
  },

  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&h=400",
    title: "Gbenga",
    course: "Mobile Development",
    price: "₦50,000",
    duration: "6 Weeks",
    level: "Intermediate",
    rating: 5,
    description: "Build cross-platform apps.",
    progress: 30,
    curriculum: [
      {
        section: "Introduction to Mobile App Development",
        topics: [
          "What is Mobile Development?",
          "Native vs Cross-Platform",
          "Setting Up Development Environment",
        ],
      },
      {
        section: "React Native Basics",
        topics: [
          "Understanding Components",
          "Navigation with React Navigation",
          "Handling User Input",
          "Flexbox for Layout",
        ],
      },
      {
        section: "State Management",
        topics: [
          "Using useState and useEffect",
          "React Context API",
          "Persisting State with AsyncStorage",
        ],
      },
      {
        section: "Integrating APIs & Firebase",
        topics: [
          "Fetching Data with Axios",
          "User Authentication with Firebase",
          "Storing Data in Firestore",
        ],
      },
      {
        section: "Publishing & Deployment",
        topics: [
          "Building for Android & iOS",
          "Testing Apps",
          "Publishing to Google Play Store",
        ],
      },
    ],
  },

  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=400",
    title: "Feranmi",
    course: "Data Science",
    price: "₦50,000",
    duration: "10 Weeks",
    level: "Advanced",
    rating: 4,
    description: "Learn Python, Pandas & ML.",
    progress: 100,
    curriculum: [
      {
        section: "Python for Data Science",
        topics: [
          "Data Types, Loops & Functions",
          "Working with NumPy",
          "Data Cleaning with Pandas",
        ],
      },
      {
        section: "Data Visualization",
        topics: [
          "Plotting with Matplotlib",
          "Using Seaborn",
          "Interactive Charts with Plotly",
        ],
      },
      {
        section: "Exploratory Data Analysis",
        topics: [
          "Handling Missing Values",
          "Outlier Detection",
          "Correlation & Trends",
        ],
      },
      {
        section: "Machine Learning Basics",
        topics: [
          "Supervised vs Unsupervised Learning",
          "Regression & Classification",
          "Model Evaluation (Accuracy, Precision)",
        ],
      },
      {
        section: "Capstone Project",
        topics: [
          "Building a Real-World Prediction Model",
          "Presenting Findings with Dashboards",
          "Project Deployment using Streamlit",
        ],
      },
    ],
  },

  {
    id: 5,
    image: Intro,
    title: "Samson",
    course: "Intro to Computer",
    price: "₦50,000",
    duration: "8 Weeks",
    level: "Beginner",
    rating: 4,
    description: "Fundamentals of computer science.",
    progress: 0,
    curriculum: [
      {
        section: "Computer Basics",
        topics: [
          "History of Computers",
          "Types of Computers",
          "Hardware vs Software",
        ],
      },
      {
        section: "Operating Systems & File Management",
        topics: [
          "Introduction to OS (Windows/Linux)",
          "Creating, Saving & Organizing Files",
          "Basic Troubleshooting",
        ],
      },
      {
        section: "Microsoft Office Tools",
        topics: [
          "MS Word: Typing and Formatting",
          "MS Excel: Basic Formulas",
          "MS PowerPoint: Presentation Slides",
        ],
      },
      {
        section: "Internet & Email",
        topics: [
          "What is the Internet?",
          "Using Web Browsers",
          "Creating and Using Email",
        ],
      },
      {
        section: "Digital Safety & Career Awareness",
        topics: [
          "Cybersecurity Basics",
          "Online Etiquette",
          "Introduction to Tech Careers",
        ],
      },
    ],
  },
];
