import { Member } from "@/types/member";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

type Props = {
  member: Member;
};

function MemberCard({ member }: Props) {
  return (
    <Card className="flex flex-col items-center text-center">
      <div className="group relative w-full h-[300px] overflow-hidden rounded">
        <img
          src={member.image}
          alt={member.name}
          width={300}
          height={400}
          loading="lazy"
          className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle>{member.name}</CardTitle>
        <CardDescription>{member.role}</CardDescription>
      </CardHeader>
    </Card>
  );
}

export default MemberCard;
