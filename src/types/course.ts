import { Category } from "./category";

export type Course = {
  uuid: string;
  title: string;
  description: string;
  duration: string;
  rating: number;
  image: string;
  featured: boolean;
  category: Category;
};
