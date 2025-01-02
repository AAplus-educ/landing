import Facebook from "@/components/Icons/Facebook";
import Instagram from "@/components/Icons/Instagram";
import WhatsApp from "@/components/Icons/WhatsApp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SociadCardProps } from "@/types/socialCard";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState } from "react";
import Loader from "@/components/ui/loader";

const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const emailJsPublicId = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const recaptchaPublicKey = import.meta.env.VITE_RECAPTCHA_KEY;

const schema = z.object({
  fullname: z
    .string()
    .nonempty("El nombre completo es obligatorio")
    .min(3, "El nombre completo debe tener al menos 3 caracteres")
    .max(80, "El nombre completo no puede exceder los 80 caracteres"),
  email: z
    .string()
    .email("Dirección de correo electrónico no válida")
    .nonempty("El correo electrónico es obligatorio"),
  subject: z
    .string()
    .nonempty("El asunto es obligatorio")
    .min(3, "El asunto debe tener al menos 3 caracteres")
    .max(80, "El asunto no puede exceder los 80 caracteres"),
  message: z
    .string()
    .nonempty("El mensaje es obligatorio")
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .max(500, "El mensaje no puede exceder los 500 caracteres"),
});

type FormFields = z.infer<typeof schema>;

const Socials: SociadCardProps[] = [
  {
    name: "WhatsApp",
    url: "https://instagram.com",
    icon: (
      <WhatsApp
        name="WhatsApp"
        className="w-6 h-6 md:w-10 md:h-10 transition text-[#4dc247] group-hover:text-white dark:text-[#4dc247] dark:group-hover:text-white"
      />
    ),
    className:
      "transition hover:bg-[#4dc247] dark:hover:bg-[#4dc247] hover:text-white hover:scale-105 group",
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    icon: (
      <Instagram
        name="Instagram"
        className="w-6 h-6 md:w-10 md:h-10 transition text-black group-hover:text-white dark:text-gray-300 dark:group-hover:text-white"
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
        className="w-6 h-6 md:w-10 md:h-10 transition text-[#3b5998] group-hover:text-white dark:text-[#3b5998] dark:group-hover:text-white"
      />
    ),
    className:
      "transition hover:bg-[#3b5998] dark:hover:bg-[#3b5998] hover:text-white hover:scale-105 group",
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isValidRecaptcha, setIsValidRecaptcha] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });
  const handleCaptcha = (value: string | null) => {
    setIsValidRecaptcha(value ? true : false);
  };

  const onSubmit: SubmitHandler<FormFields> = () => {
    setIsSubmitting(true);
    recaptchaRef.current?.reset();
    setIsValidRecaptcha(recaptchaRef.current?.getValue() ? true : false);
    try {
      emailjs
        .sendForm(emailJsServiceId, emailJsTemplateId, "#contactForm", {
          publicKey: emailJsPublicId,
        })
        .then(
          (response) => {
            toast.success("Message sent successfully!", {
              duration: 5000,
            });
            reset();
            return response;
          },
          (error) => {
            toast.error("Failed to send message!", {
              duration: 5000,
            });
            return error;
          }
        );
    } catch (error) {
      toast.error("Failed to send message!", { duration: 5000 });
      return error;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-t from-[#eBC0FD] to-[#D9DED8] dark:from-[#09203F] dark:to-[#537895]">
      <div className="flex gap-6 justify-between max-w-screen-2xl mx-auto flex-wrap">
        <section className="flex-1 p-6">
          <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 text-center mb-4">
            Síguenos en nuestras redes sociales
          </h2>
          <div className="flex gap-2 justify-evenly flex-wrap">
            {Socials.map((social) => (
              <SocialCard key={social.name} {...social} />
            ))}
          </div>
        </section>
        <section className="flex-1 p-6">
          <form
            id="contactForm"
            method="post"
            onSubmit={handleSubmit(onSubmit)}
          >
            <section className="form-header flex flex-col gap-1 mb-4 items-center">
              <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                Contactanos
              </h2>
              <p className="text-gray-400 dark:text-gray-500">
                Tienes alguna pregunta o comentario? Escríbenos!
              </p>
            </section>
            <section className="form-body flex flex-col gap-4">
              <section className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-between items-start">
                <div className="grid w-full mx-auto items-center gap-1.5 flex-1">
                  <Label htmlFor="fullname">Nombre</Label>
                  <Input
                    type="text"
                    id="fullname"
                    placeholder="John Doe"
                    className="w-full"
                    {...register("fullname")}
                  />
                  {errors.fullname && (
                    <p className="text-red-500 text-sm font-semibold">
                      {errors.fullname.message}
                    </p>
                  )}
                </div>
                <div className="grid w-full  mx-auto items-center gap-1.5 flex-1">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Email"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm font-semibold">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </section>
              <div className="grid w-full  mx-auto items-center gap-1.5 flex-1">
                <Label htmlFor="subject">Asunto</Label>
                <Input
                  type="text"
                  id="subject"
                  placeholder="Asunto del mensaje"
                  {...register("subject")}
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm font-semibold">
                    {errors.subject.message}
                  </p>
                )}
              </div>
              <div className="grid w-full  mx-auto gap-1.5">
                <Label htmlFor="message-2">Mensaje</Label>
                <Textarea
                  placeholder="Escribe aquí tu mensaje"
                  id="message-2"
                  {...register("message")}
                />
                <p className="text-sm text-muted-foreground">
                  Escribe tu mensaje de al menos 10 caracteres y máximo 500.
                </p>
                {errors.message && (
                  <p className="text-red-500 text-sm font-semibold">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <div className=" mx-auto">
                <ReCAPTCHA
                  sitekey={`${recaptchaPublicKey}`}
                  ref={recaptchaRef}
                  onChange={handleCaptcha}
                />
                {!isValidRecaptcha && (
                  <p className="text-red-500 text-sm mt-2 font-semibold">
                    Por favor, verifica que no eres un robot.
                  </p>
                )}
              </div>
            </section>
            <Button
              disabled={!isValidRecaptcha || isSubmitting}
              type="submit"
              className={`w-full mt-4`}
            >
              {isSubmitting ? (
                <>
                  <Loader size="w-6 h-6" />
                  Enviando...
                </>
              ) : (
                "Enviar"
              )}
            </Button>
          </form>
        </section>
      </div>
    </section>
  );
}

export default Contacts;
