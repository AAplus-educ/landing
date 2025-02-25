import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronRight, Clock, Star, BookCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Course } from "@/types/course";
import { Badge } from "../ui/badge";

type Props = {
  course: Course;
};

function CourseCard({ course }: Props) {
  return (
    <Card className="flex flex-col transition hover:scale-105 shadow-lg max-w-sm w-full mx-auto">
      <img
        src={course.image}
        alt={course.title}
        width={300}
        height={200}
        className="object-cover w-full h-[200px]"
        style={{ viewTransitionName: `CourseImage-${course.uuid}` }}
      />
      <CardHeader>
        <CardTitle className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 font-bold font-sans">
          {course.title}
        </CardTitle>
        <CardDescription className="font-serif">
          {course.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4 text-sm">
          <Badge
            variant="outline"
            className="flex items-center bg-cyan-400 text-gray-700 dark:bg-transparent dark:text-white"
          >
            <Clock className="mr-1 h-4 w-4" />
            {course.duration}
          </Badge>
          <Badge
            variant="outline"
            className="flex items-center bg-blue-400 text-white dark:bg-white dark:text-black"
          >
            <BookCheck className="mr-1 h-4 w-4" />
            {course.category.title}
          </Badge>
        </div>
      </CardContent>
      <CardFooter className="mt-auto flex justify-between">
        <div className="flex items-center">
          <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span>{course.rating}</span>
        </div>
        <div className="flex items-center gap-2">
          <Button
            className="flex items-center gap-2 group dark:bg-blue-600 dark:hover:bg-blue-500"
            size={"sm"}
            variant={"outline"}
          >
            <span>Ver curso</span>
            <ChevronRight className="transition group-hover:translate-x-2" />
          </Button>
          <Button
            className="flex items-center gap-2 group bg-[#FF723B] hover:bg-[#fd7c49]"
            size={"sm"}
          >
            <span>Inscribirse</span>
            <ChevronRight className="transition group-hover:translate-x-2" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default CourseCard;
