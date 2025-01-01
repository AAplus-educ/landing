import { ThemeProvider } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";
import { isRouteErrorResponse, Link, useRouteError } from "react-router";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Ghost } from "lucide-react";

function ErrorPage() {
  const error = useRouteError();
  const renderError = isRouteErrorResponse(error)
    ? `La página a la que estás intentando acceder, no existe ${error.status}`
    : `Ha ocurrido un error ${(error as Error).message}`;
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="h-screen w-full flex items-center justify-center bg-background dark:bg-gray-900">
        <Card className="w-[420px] shadow-lg border-2 border-primary/20 dark:border-primary/10">
          <CardHeader>
            <div className="flex justify-center">
              <Ghost className="h-24 w-24 text-primary dark:text-primary/90" />
            </div>
            <CardTitle className="text-3xl font-bold text-center mt-4 dark:text-white">
              404 - Página no encontrada
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-muted-foreground dark:text-gray-300">
              {renderError}
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button
              asChild
              className="dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90"
            >
              <Link to="/">Volver a la página principal</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </ThemeProvider>
  );
}

export default ErrorPage;
