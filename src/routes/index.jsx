import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Project from "../pages/Project/Project";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound";
import PortFolio from "../layout";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <PortFolio />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "project",
        element: <Project />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
