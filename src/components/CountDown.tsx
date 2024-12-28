import { useEffect, useState } from "react";
import confetti from "canvas-confetti"; // Importa la biblioteca de confeti
import { Button } from "./ui/button";
import { Course } from "@/types/course";

type Props = {
  DateIsoFormat: string;
  nextCourse: Course;
};

function CountDown({ DateIsoFormat, nextCourse }: Props) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const targetDate = new Date(DateIsoFormat).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsCompleted(true);
        triggerConfetti(); // Llama al confeti
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [DateIsoFormat]);

  // Función para lanzar el confeti
  const triggerConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }, // Confeti comienza más abajo
    });
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            {nextCourse.title}
          </span>{" "}
          comienza en
        </h2>
        {!isCompleted ? (
          <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <span className="text-4xl font-bold">{timeLeft.days}</span>
                <p className="text-xl">Días</p>
              </div>
              <div>
                <span className="text-4xl font-bold">{timeLeft.hours}</span>
                <p className="text-xl">Horas</p>
              </div>
              <div>
                <span className="text-4xl font-bold">{timeLeft.minutes}</span>
                <p className="text-xl">Minutos</p>
              </div>
              <div>
                <span className="text-4xl font-bold">{timeLeft.seconds}</span>
                <p className="text-xl">Segundos</p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Button size="lg">¡Reserva tu lugar ahora!</Button>
            </div>
          </>
        ) : (
          <div className="text-center">
            <h3 className="text-4xl font-bold">
              ¡{nextCourse.title} ha comenzado! 🎉
            </h3>
          </div>
        )}
      </div>
    </section>
  );
}

export default CountDown;
