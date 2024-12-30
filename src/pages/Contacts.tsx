import Facebook from "@/components/Icons/Facebook";
import Instagram from "@/components/Icons/Instagram";
import WhatsApp from "@/components/Icons/WhatsApp";
import { ReactNode } from "react";

export type SociadCardProps = {
  name: string;
  url: string;
  icon: ReactNode;
  className?: string;
};

const Socials: SociadCardProps[] = [
  {
    name: "WhatsApp",
    url: "https://instagram.com",
    icon: (
      <WhatsApp
        name="WhatsApp"
        className="w-10 h-10 transition text-[#4dc247] group-hover:text-white dark:text-[#4dc247] dark:group-hover:text-white"
      />
    ),
    className:
      "transition hover:bg-[#4dc247] hover:text-white hover:scale-105 group",
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    icon: (
      <Instagram
        name="Instagram"
        className="w-10 h-10 transition text-black group-hover:text-white dark:text-gray-300 dark:group-hover:text-white"
      />
    ),
    className:
      "transition hover:bg-gradient-to-r hover:from-[#833ab4] hover:via-[#fd1d1d] hover:to-[#fcb045] hover:text-white hover:scale-105 group",
  },
  {
    name: "Facebook",
    url: "https://facebook.com",
    icon: (
      <Facebook
        name="Facebook"
        className="w-10 h-10 transition text-[#3b5998] group-hover:text-white dark:text-[#3b5998] dark:group-hover:text-white"
      />
    ),
    className:
      "transition hover:bg-[#3b5998] hover:text-white hover:scale-105 group",
  },
];

function SocialCard({ name, url, icon, className }: SociadCardProps) {
  return (
    <a
      href={url}
      className={`p-4 rounded-lg bg-gray-200 dark:bg-gray-800 flex flex-col justify-center items-center ${className}`}
    >
      {icon}
      <span className="ml-2 font-semibold">{name}</span>
    </a>
  );
}

function Contacts() {
  return (
    <section className="min-h-screen">
      <div className="flex gap-6 justify-between max-w-screen-2xl mx-auto">
        <section className="flex-1 p-6">
          <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 text-center mb-4">
            Follow Us
          </h2>
          <div className="flex gap-2 justify-evenly">
            {Socials.map((social) => (
              <SocialCard key={social.name} {...social} />
            ))}
          </div>
        </section>
        <section className="flex-1 p-6">
          <form action=""></form>
        </section>
      </div>
    </section>
  );
}

export default Contacts;
