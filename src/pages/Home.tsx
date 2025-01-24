import CountDown from "@/components/CountDown";
import CourseCard from "@/components/Courses/CourseCard";
import Hero from "@/components/Hero";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Courses } from "@/data/courses";
import { Stats } from "@/data/stats";
import { Testimonials } from "@/data/testimonials";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router";

const StarredServices: { id: number; title: string; description: string }[] = [
  {
    id: 1,
    title: "Cursos Técnicos y Profesionales",
    description:
      "Especializaciones en peluquería canina, electricidad residencial, marketing y más.",
  },
  {
    id: 2,
    title: "Programas de Formación Continua",
    description:
      "Diseñados para complementar y actualizar conocimientos de profesionales en ejercicio.",
  },
  {
    id: 3,
    title: "Asesorías Personalizadas",
    description:
      "Apoyo en gestión empresarial, estrategias de marketing y desarrollo de negocios.",
  },
  {
    id: 4,
    title: "Capacitaciones Internacionales",
    description:
      "Colaboración con expertos y organizaciones en mercados extranjeros para preparar a nuestros estudiantes a nivel global.",
  },
];

function Home() {
  return (
    <div className="bg-gradient-to-t from-[#eBC0FD] to-[#D9DED8] dark:from-[#09203F] dark:to-[#537895]">
      <Hero />
      <section className="w-full py-12 md:py-24 lg:py-32 dark:bg-gray-900">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-black dark:text-white">
            Cursos Destacados
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {Courses.filter((course) => course.featured).map((course) => (
              <CourseCard key={course.uuid} course={course} />
            ))}
          </div>
          <Link
            className="mt-12 text-center block"
            to={"/courses"}
            viewTransition
          >
            <Button
              size="lg"
              className="flex items-center justify-center gap-2 mx-auto group"
            >
              <span>Ver todos los cursos</span>
              <ChevronRight className="transition group-hover:translate-x-2" />
            </Button>
          </Link>
        </div>
      </section>
      <CountDown DateIsoFormat="2025-01-20T09:00:00" nextCourse={Courses[0]} />
      <section className="w-full py-12 md:py-24 lg:py-32 bg-transparent">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-black dark:text-white">
            Servicios destacados
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {StarredServices.map((service) => (
              <Card
                className="max-w-[350px] h-full self-stretch transition group relative overflow-hidden"
                key={service.id}
              >
                <div className="absolute transition-all w-full bottom-0 left-0 right-0 h-1 bg-blue-500 dark:bg-yellow-500 group-hover:h-full z-0"></div>
                <CardHeader className="relative z-10">
                  <CardTitle className="group-hover:text-white">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="group-hover:text-white">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 bg-transparent">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-black dark:text-white">
            Nuestro Impacto
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
            {Stats.map((stat, index) => (
              <Card
                key={index}
                className="flex flex-col items-center justify-center p-6 transition group relative overflow-hidden"
              >
                <div className="absolute transition-all w-full top-0 left-0 right-0 h-1 bg-blue-500 dark:bg-yellow-500 group-hover:h-full"></div>
                <stat.icon className="h-12 w-12 mb-4 text-primary transition group-hover:text-white group-hover:scale-110" />
                <CardTitle className="text-4xl font-bold transition group-hover:text-white group-hover:scale-110">
                  {stat.value}
                </CardTitle>
                <CardDescription className="text-xl mt-2 transition group-hover:text-white group-hover:scale-110">
                  {stat.title}
                </CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-transparent">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
            Lo que dicen nuestros estudiantes
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.uuid}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// 2025-01-10T09:00:00 2024-12-27T18:18`:00

export default Home;
