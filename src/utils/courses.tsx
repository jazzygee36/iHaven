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
    description:
      "Learn the building blocks of web development, including HTML, CSS, JavaScript, and modern frameworks like React. Perfect for beginners looking to break into tech.",
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
    description:
      "Master the core of server-side development using Node.js, Express, and databases. Build powerful APIs and backend systems from scratch.",
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
    description:
      "Dive into mobile app development using Flutter and React Native. Build beautiful cross-platform applications with real-world functionality.",
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
    description:
      "Unlock the power of data with Python, Pandas, and machine learning techniques. Ideal for those aiming to work in analytics or AI.",
  },
  {
    id: 5,
    image:Intro,
    title: "Samson",
    course: "Intro to Computer",
    price: "₦50,000",
    duration: "8 Weeks",
    level: "Beginner",
    rating: 4,
    description:
      "Master the core of server-side development using Node.js, Express, and databases. Build powerful APIs and backend systems from scratch.",
  },
];
