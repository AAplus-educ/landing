import { Stat } from "@/types/stat";
import { BookOpen, Trophy, UserCheck, Users } from "lucide-react";

export const Stats: Stat[] = [
  { title: "Estudiantes capacitados", value: "+100", icon: Users },
  { title: "Tasa de Empleabilidad", value: "+85%", icon: UserCheck },
  { title: "Emprendimientos", value: "+100", icon: BookOpen },
  { title: "Años de Experiencia", value: "+2", icon: Trophy },
];
