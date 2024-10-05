import { createBrowserRouter } from "react-router-dom";
// import Home from "../pages/Home/Home";

import NotFound from "../pages/NotFound";
import MainLayout from "../layout/MainLayout";
import About from "../pages/about/About";
import Home from "../pages/Home/Home";
import Project from "../pages/Project/Project";
import Contact from "../pages/contact/Contact";

export const routes = createBrowserRouter(
  // [
  //   {
  //     path: "/",
  //     element: <PortFolio />,
  //     children: [
  //       {
  //         index: true,
  //         element: <HomeDuc />,
  //       },
  //       {
  //         path: "project",
  //         element: <Project />,
  //       },
  //       {
  //         path: "about",
  //         element: <About />,
  //       },
  //       {
  //         path: "contact",
  //         element: <Contact />,
  //       },
  //     ],
  //   },
  //   {
  //     path: "*",
  //     element: <NotFound />,
  //   },
  // ]

  [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/project",
          element: <Project />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]
);
