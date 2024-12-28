import { ThemeProvider } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";
import { isRouteErrorResponse, Link, useRouteError } from "react-router";

function ErrorPage() {
  const error = useRouteError();
  const renderError = isRouteErrorResponse(error)
    ? `La página a la que estás intentando acceder, no existe ${error.status}`
    : `Ha ocurrido un error ${(error as Error).message}`;
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <section className="grid place-items-center min-h-screen bg-white dark:bg-black">
        <div className="bg-white py-4 px-8 rounded-lg shadow-lg dark:bg-white border">
          <div className="text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Upps, algo salió mal</h1>
              <p className="py-6">{renderError}</p>
              <Link to="/" className="btn btn-primary">
                <Button>Regresar al inicio</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}

export default ErrorPage;
