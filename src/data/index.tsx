import { FaDatabase, FaGlobe, FaNode, FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
// Features Data
export const featuresData = [
  {
    id: 1,
    icon: <FaReact />,
    title: "React Development",
    des: "Creating dynamic and high-performing web applications using React.js.",
  },
  {
    id: 2,
    icon: <FaNode />,
    title: "Backend Development",
    des: "Developing scalable server-side applications and RESTful APIs using Node.js.",
  },
  {
    id: 3,
    icon: <TbBrandRedux />,
    title: "Zustand React & Redux Tool Kit",
    des: "Global store management in React centralizes state, allowing components to share and update data easily. Tools like Redux Toolkit and Zustand make this process efficient and maintainable.",
  },
  {
    id: 4,
    icon: <SiTypescript />,
    title: "Type Script",
    des: "Using TypeScript in both backend and frontend development ensures code consistency and improves maintainability with static typing. It enhances productivity and integrates seamlessly with frameworks like React and Express.js.",
  },
  {
    id: 5,
    icon: <FaDatabase />,
    title: "Database Management",
    des: "Designing databases using MySQL and PostgreSQL, and managing them with ORMs like Prisma.",
  },

  {
    id: 6,
    icon: <FaGlobe />,
    title: "Web Hosting",
    des: "Deploying and managing web applications on various hosting platforms like netlify or vercel.",
  },
];
