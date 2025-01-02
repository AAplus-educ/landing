import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Faqs } from "@/data/faqs";

const AboutUs = () => {
  return (
    <section className="min-h-screen bg-gradient-to-t from-[#eBC0FD] to-[#D9DED8] dark:from-[#09203F] dark:to-[#537895]">
      <div className="bg-gray-200 dark:bg-black py-20 mb-8">
        <div className="flex gap-6 flex-wrap justify-between max-w-screen-2xl mx-auto min-h-[50vh] px-2 ">
          <section className="flex-1 flex flex-col gap-8">
            <h1 className="scroll-m-20 text-2xl font-bold tracking-tight">
              About us
            </h1>
            <h2 className="scroll-m-20 text-4xl font-semibold tracking-tight lg:text-6xl">
              The Qualified and Highly Equipped Instructors
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6 text-gray-500 dark:text-gray-400 max-w-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              earum modi porro accusantium vel vero velit, ipsa provident
              laborum, molestiae ea autem consectetur, explicabo similique
              deserunt. Ab nam corporis maiores?
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button className="flex items-center gap-2">
                <span>Read More</span>
                <ChevronRight />
              </Button>
            </div>
          </section>
          <section className="flex-1 relative px-4 pt-10">
            <figure className="rounded-full w-24 h-24 border border-red-500 dark:border-yellow-300 overflow-hidden group">
              <img
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
                src="https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Img medium"
              />
            </figure>
            <figure className="w-44 h-44 overflow-hidden rounded-full bg-gray-200 dark:bg-black relative z-10 p-4 ml-6">
              <div className="group rounded-full w-full h-full overflow-hidden border border-red-500 dark:border-yellow-300">
                <img
                  className="object-cover  w-full h-full relative z-10 group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1695192577284-fd1b10529579?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Img small"
                />
              </div>
            </figure>
            <figure className="group border border-red-500 dark:border-yellow-300 rounded-full w-64 h-64 overflow-hidden absolute top-0 right-[24rem] z-0">
              <img
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
                src="https://images.unsplash.com/photo-1695192699177-f98215c7bc4c?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Img Large"
              />
            </figure>
          </section>
        </div>
      </div>
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
