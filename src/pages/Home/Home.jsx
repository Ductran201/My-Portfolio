import React from "react";
import "./home.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import ButtonCustom from "../../components/button/ButtonCustom";
export default function Home() {
  return (
    // <div className="main">
    <>
      <div className="slide"></div>
      <div className="section home">
        <div className="color-block"></div>

        <div className="home-img">
          {/* <div className="home-img-wrap"></div> */}
          <img src="src\assets\portfolio.jpg" alt="" />
        </div>

        <div className="home-text">
          <div className="home-text-wrap">
            <h1>
              Hello, I'm
              <span>Tran Trong Duc</span>
            </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Praesentium alias eveniet dolore dolor vero illum delectus
              doloremque aliquid quo? Animi optio, necessitatibus asperiores at
              sapiente exercitationem quam accusantium porro libero.
            </p>
            <ButtonCustom className="portfolio-btn">
              <Link to="/about">
                <span className="btn-text">About</span>
                <span className="btn-icon">
                  <ArrowForwardIcon />
                </span>
              </Link>
            </ButtonCustom>
            <ButtonCustom className="about-btn ml-[48px]">
              <Link to="/project">
                <span className="btn-text">Project</span>
                <span className="btn-icon">
                  <ArrowForwardIcon />
                </span>
              </Link>
            </ButtonCustom>
          </div>
        </div>
      </div>
    </>

    // </div>
  );
}
