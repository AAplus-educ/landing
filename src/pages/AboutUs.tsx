import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Faqs } from "@/data/faqs";
import { Members } from "@/data/members";
import MemberCard from "@/components/MemberCard";

const CorporationValues: { id: number; title: string; description: string }[] =
  [
    {
      id: 1,
      title: "Innovación",
      description:
        "Incorporamos las últimas tendencias y tecnologías en nuestros programas de capacitación.",
    },
    {
      id: 2,
      title: "Compromiso",
      description:
        "Nos dedicamos a formar profesionales que impacten positivamente en su entorno.",
    },
    {
      id: 3,
      title: "Accesibilidad",
      description: "Diseñamos programas que están al alcance de todos.",
    },
    {
      id: 4,
      title: "Calidad",
      description:
        "Aseguramos que cada curso cumpla con los estándares más altos de enseñanza.",
    },
  ];

const AboutUs = () => {
  return (
    <section className="min-h-screen bg-gradient-to-t from-[#eBC0FD] to-[#D9DED8] dark:from-[#09203F] dark:to-[#537895]">
      <div className="bg-gray-200 dark:bg-black py-20 mb-8">
        <div className="flex gap-6 flex-wrap justify-between max-w-screen-2xl mx-auto min-h-[50vh] px-2 ">
          <section className="flex-1 flex flex-col gap-8">
            <h1 className="scroll-m-20 text-2xl font-bold tracking-tight">
              About us
            </h1>
            <div>
              <h2 className="scroll-m-20 text-4xl font-semibold tracking-tight lg:text-6xl mb-4">
                Tenemos el compromiso de
              </h2>
              <p className="leading-7 ms-4 text-gray-500 dark:text-gray-400 max-w-2xl">
                Proveer formación técnica y profesional que combine excelencia
                académica, enfoque práctico y accesibilidad, preparando a
                nuestros estudiantes para enfrentar los desafíos del mercado
                laboral con ética, responsabilidad y compromiso con la calidad.
              </p>
            </div>
            <div>
              <h2 className="scroll-m-20 text-4xl font-semibold tracking-tight lg:text-6xl mb-4">
                En el futuro preveemos
              </h2>
              <p className="leading-7 ms-4 text-gray-500 dark:text-gray-400 max-w-2xl">
                Convertirnos en el referente nacional e internacional en
                capacitación técnica y profesional, expandiendo nuestras
                metodologías y programas hacia nuevos mercados, y siendo
                reconocidos por nuestro impacto en la transformación social y
                económica de nuestros estudiantes.
              </p>
            </div>
            <div className="flex gap-4 flex-wrap">
              <Button className="flex items-center gap-2">
                <span>Contactanos Ahora</span>
                <ChevronRight />
              </Button>
            </div>
          </section>
          <section className="flex-1 relative px-4 pt-10 flex flex-col justify-center items-center gap-4">
            <figure className="group border border-red-500 dark:border-yellow-300 rounded-full w-24 h-24 overflow-hidden">
              <img
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
                src="https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Img small"
              />
            </figure>
            <figure className="group border border-red-500 dark:border-yellow-300 rounded-full w-44 h-44 overflow-hidden">
              <img
                className="object-cover w-full h-full relative z-10 group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
                src="https://images.unsplash.com/photo-1695192577284-fd1b10529579?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Img medium"
              />
            </figure>
            <figure className="group border border-red-500 dark:border-yellow-300 rounded-full w-64 h-64 overflow-hidden">
              <img
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
                src="https://images.unsplash.com/photo-1695192699177-f98215c7bc4c?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Img Large"
              />
            </figure>
          </section>
        </div>
        <section className="max-w-screen-2xl mx-auto py-8">
          <h3 className="scroll-m-20 text-3xl font-bold tracking-tight text-center">
            Valores corporativos
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center mt-8 px-4">
            {CorporationValues.map((value) => (
              <Card
                className="max-w-[350px] h-full self-stretch "
                key={value.id}
              >
                <CardHeader>
                  <CardTitle>{value.title}</CardTitle>
                  <CardDescription>{value.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>
      </div>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-transparent">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4 text-black dark:text-white">
            Nuestro Equipo
          </h2>
          <p className="leading-7 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-center mb-12">
            Contamos con una gran variedad de docentes altamente calificados.
            Con su experiencia, dedicación y pasión por la enseñanza, estos
            educadores forman a los estudiantes con excelencia técnica y valores
          </p>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {Members.map((member) => (
              <MemberCard key={member.uuid} member={member} />
            ))}
          </div>
        </div>
      </section>
      <div className="max-w-screen-2xl mx-auto min-h-[50vh] px-2">
        <section className="">
          <h2 className="scroll-m-20 text-2xl font-bold tracking-tight mb-6 text-center">
            FAQ
          </h2>
          <h3 className="scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl mb-6 text-center">
            The Qualified and Highly Equipped Instructors
          </h3>
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-md mx-auto"
          >
            {Faqs.map((faq) => (
              <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </div>
    </section>
  );
};

export default AboutUs;
