import CountDown from "@/components/CountDown";
import CourseCard from "@/components/Courses/CourseCard";
import Hero from "@/components/Hero";
import MemberCard from "@/components/MemberCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Courses } from "@/data/courses";
import { Members } from "@/data/members";
import { Stats } from "@/data/stats";
import { Testimonials } from "@/data/testimonials";

function Home() {
  return (
    <>
      <Hero />
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
            Cursos Destacados
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {Courses.map((course) => (
              <CourseCard key={course.uuid} course={course} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button size="lg">Ver todos los cursos</Button>
          </div>
        </div>
      </section>
      <CountDown DateIsoFormat="2025-01-10T09:00:00" nextCourse={Courses[0]} />
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
            Nuestro Equipo
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {Members.map((member) => (
              <MemberCard key={member.uuid} member={member} />
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-black">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
            Nuestro Impacto
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {Stats.map((stat, index) => (
              <Card
                key={index}
                className="flex flex-col items-center justify-center p-6 border-t-4 border-t-blue-500 dark:border-t-yellow-500 group"
              >
                <stat.icon className="h-12 w-12 mb-4 text-primary transition group-hover:scale-110" />
                <CardTitle className="text-4xl font-bold transition group-hover:scale-110">
                  {stat.value}
                </CardTitle>
                <CardDescription className="text-xl mt-2 transition group-hover:scale-110">
                  {stat.title}
                </CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-black">
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
    </>
  );
}

// 2025-01-10T09:00:00 2024-12-27T18:18`:00

export default Home;
