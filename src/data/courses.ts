import { Course } from "@/types/course";
import { Categories } from "./Categories";

export const Courses: Course[] = [
  {
    uuid: "1",
    title: "Desarrollo Web Full Stack",
    description: "Aprende a crear aplicaciones web completas desde cero.",
    duration: "12 semanas",
    rating: 4.8,
    image:
      "https://digitalreach.asia/wp-content/uploads/2021/11/placeholder-image.png",
    featured: true,
    category: Categories[0],
  },
  {
    uuid: "2",
    title: "Ciencia de Datos",
    description: "Domina el análisis de datos y el aprendizaje automático.",
    duration: "10 semanas",
    rating: 4.7,
    image:
      "https://digitalreach.asia/wp-content/uploads/2021/11/placeholder-image.png",
    featured: true,
    category: Categories[1],
  },
  {
    uuid: "3",
    title: "Diseño UX/UI",
    description:
      "Crea interfaces atractivas y experiencias de usuario excepcionales.",
    duration: "8 semanas",
    rating: 4.9,
    image:
      "https://digitalreach.asia/wp-content/uploads/2021/11/placeholder-image.png",
    featured: true,
    category: Categories[2],
  },
  {
    uuid: "4",
    title: "Marketing Digital",
    description:
      "Conviértete en un experto en publicidad y estrategias de marketing.",
    duration: "6 semanas",
    rating: 4.6,
    image:
      "https://digitalreach.asia/wp-content/uploads/2021/11/placeholder-image.png",
    featured: false,
    category: Categories[3],
  },
];
