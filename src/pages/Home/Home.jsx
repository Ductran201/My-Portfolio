import React from "react";
import "./home.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div className="slide"></div>
      <div className="section home-content">
        <div className="color-block" />

        <div className="z-[1]">
          <img className="avatar" src="src\assets\portfolio.jpg" alt="" />
        </div>

        <div className="home-introduce">
          <div className="home-introduce-wrapper">
            <h1 className="">
              I'm Tran Trong Duc
              <span>Web Developer !</span>
            </h1>
            <p className="text-[16px] mt-[15px] mb-[28px] leading-[35px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloremque a omnis officia cum quisquam eius, architecto sapiente
              voluptates rem, sed tempora explicabo voluptas nisi vitae suscipit
              natus expedita asperiores adipisci!
            </p>

            <button className="home-btn">
              <Link to={"/about"}>
                <span className="btn-arrow">
                  <ArrowForwardIcon className="" />
                </span>
                <span className="btn-text">About</span>
              </Link>
            </button>
            <button className="home-btn ml-[30px]">
              <Link to={"/project"}>
                <span className="btn-text">Project</span>
                <span className="btn-arrow">
                  <ArrowForwardIcon className="" />
                </span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
