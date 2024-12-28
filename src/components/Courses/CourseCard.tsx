import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Course } from "@/types/course";
import { Badge } from "../ui/badge";

type Props = {
  course: Course;
};

function CourseCard({ course }: Props) {
  return (
    <Card className="flex flex-col transition hover:scale-105 shadow-lg">
      <img
        src={course.image}
        alt={course.title}
        width={300}
        height={200}
        className="object-cover w-full h-[200px]"
      />
      <CardHeader>
        <CardTitle>{course.title}</CardTitle>
        <CardDescription>{course.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4 text-sm">
          <Badge variant="outline" className="flex items-center">
            <Clock className="mr-1 h-4 w-4" />
            {course.duration}
          </Badge>
        </div>
      </CardContent>
      <CardFooter className="mt-auto flex justify-between">
        <div className="flex items-center">
          <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span>{course.rating}</span>
        </div>
        <Button>Inscribirse</Button>
      </CardFooter>
    </Card>
  );
}

export default CourseCard;
