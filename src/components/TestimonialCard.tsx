import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Testimonial } from "@/types/testimonial";

type Props = {
  testimonial: Testimonial;
};

function TestimonialCard({ testimonial }: Props) {
  return (
    <Card
      key={testimonial.uuid}
      className="border-s-4 border-s-blue-500 dark:border-s-yellow-500 transition hover:scale-105 shadow-lg"
    >
      <CardHeader>
        <CardTitle className="flex items-center">
          <Avatar className="h-9 w-9 mr-3">
            <AvatarImage src={testimonial.image} alt={testimonial.name} />
            <AvatarFallback>
              {testimonial.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          {testimonial.name}
        </CardTitle>
        <Badge variant="secondary" className="mt-2 w-fit">
          {testimonial.courseName}
        </Badge>
        <CardDescription className="mt-2">Estudiante</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{testimonial.comment}</p>
      </CardContent>
    </Card>
  );
}

export default TestimonialCard;
