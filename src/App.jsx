import React from "react";
import Home from "./pages/Home/Home";
import Main from "./layout/main";
import Project from "./pages/Project/Project";
import About from "./pages/About/About";
import Test1 from "./Test/Test1";
import Contact from "./pages/Contact/Contact";

export default function App() {
  return (
    <>
      <Main></Main>
      <Home></Home>
      <Project></Project>
      <About></About>
      <Contact></Contact>
    </>
  );
}
