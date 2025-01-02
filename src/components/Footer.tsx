import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full items-center justify-between px-4 md:px-6 border-t dark:border-none bg-transparent">
      <p className="text-xs text-gray-500">
        © 2024 - {currentYear} AAplus. Todos los derechos reservados.
      </p>
      <p className="text-xs text-gray-400">
        Developed by{" "}
        <a
          href="https://junior-dev.vercel.app/"
          target="_black"
          className="hover:underline"
        >
          Junior Ruiz
        </a>
      </p>
      <nav className="flex gap-4 sm:gap-6">
        <Link
          className="text-xs hover:underline underline-offset-4"
          to="/terms"
        >
          Términos de Servicio
        </Link>
        <Link
          className="text-xs hover:underline underline-offset-4"
          to="/privacy"
        >
          Privacidad
        </Link>
      </nav>
    </footer>
  );
}

export default Footer;
