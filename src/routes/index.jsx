import { createBrowserRouter } from "react-router-dom";
// import Home from "../pages/Home/Home";
import Project from "../pages/Project/Project";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound";
import MainLayout from "../layout/MainLayout";
import AboutDuc from "../pages/about/AboutDuc";
import Home from "../pages/Home/Home";

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
          element: <AboutDuc />,
        },
        // {
        //   index: true,
        //   element: <HomeDuc />,
        // },
        // {
        //   index: true,
        //   element: <HomeDuc />,
        // },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]
);
