import CourseCard from "@/components/Courses/CourseCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Courses } from "@/data/courses";
import { Course } from "@/types/course";
import { Search } from "lucide-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  search: z.string(),
});

type FormFields = z.infer<typeof schema>;

function CoursesIndex() {
  const [courses, setCourses] = useState<Course[]>(Courses);
  const { register, handleSubmit } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = ({ search }) => {
    if (!search) {
      setCourses(Courses);
      return;
    }
    setCourses(
      Courses.filter((course) =>
        course.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  return (
    <section className="min-h-screen">
      <div className="max-w-screen-2xl mx-auto py-6 px-2">
        <form
          className="relative mb-6 max-w-lg mx-auto"
          method="get"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            type="search"
            className="py-6 rounded-full"
            placeholder="Filter courses by name"
            {...register("search")}
          />
          <Button
            type="submit"
            variant="ghost"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full"
            size="sm"
          >
            <Search className="w-5 h-5" />
          </Button>
        </form>
        <section className="flex justify-center gap-6 flex-wrap">
          {courses.length > 0 ? (
            courses.map((course) => (
              <CourseCard key={course.uuid} course={course} />
            ))
          ) : (
            <div>No se encontraron cursos</div>
          )}
        </section>
      </div>
    </section>
  );
}

export default CoursesIndex;
