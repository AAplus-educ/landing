import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const RouteTitleMap: Record<string, string> = {
  "/": "Home - AAplus official website",
  "/about-us": "About Us - AAplus official website",
  "/courses": "Courses - AAplus official website",
  "/contacts": "Contact - AAplus official website",
};

function DynamicTitle() {
  const location = useLocation();

  useEffect(() => {
    const title = RouteTitleMap[location.pathname] || "AAplus official website";
    document.title = title;
  }, [location.pathname]);

  return null; // No renderiza nada
}

export default DynamicTitle;
