import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router";

function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
              Aprende. Crece. Triunfa.
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
              Descubre nuestros cursos de alta calidad y da el siguiente paso en
              tu carrera profesional.
            </p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Link to="/courses" viewTransition>
              <Button className="flex items-center gap-2 group">
                <span>Explorar Cursos</span>
                <ChevronRight className="transition group-hover:translate-x-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
