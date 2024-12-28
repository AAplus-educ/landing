import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent } from "react";

export type Stat = {
  title: string;
  value: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
};
