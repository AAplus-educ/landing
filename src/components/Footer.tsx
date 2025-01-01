import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t dark:border-none bg-transparent">
      <p className="text-xs text-gray-500">
        © 2024 - {currentYear} AAplus. Todos los derechos reservados.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
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
