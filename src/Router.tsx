import App from "./App.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import Home from "./pages/Home.tsx";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/courses",
        element: <div>Courses</div>,
      },
      {
        path: "/courses/:coursesId",
        element: <div>Course</div>,
      },
      {
        path: "/contacts",
        element: <div>Contact</div>,
      },
    ],
  },
]);
