import React from "react";
import "./project.css";
import TitleHeader from "../../components/title-header";
import { Link, NavLink } from "react-router-dom";
export default function Project() {
  return (
    <>
      <div className="slide"></div>

      <div className="section project-wrraper">
        {/* PAGE HEADER */}
        <TitleHeader first={"MY"} second={"PROJECT"}></TitleHeader>

        <div className="container">
          <div className="projectList">
            {/* NAV  */}
            <div className="project-nav">
              <NavLink>All</NavLink>
              <a href="">CSS/JAVASCIPT</a>
              <a href="">SPRING BOOT</a>
              <a href="">RESTFUL API</a>
            </div>

            {/* lIST PROJECT */}
            <div className="project-list-container">
              <Link>
                <img
                  src="https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-nature-wallpapers-image_2683049.jpg"
                  alt=""
                />
              </Link>
              <Link>
                <img
                  src="https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-nature-wallpapers-image_2683049.jpg"
                  alt=""
                />
              </Link>
              <Link>
                <img
                  src="https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-nature-wallpapers-image_2683049.jpg"
                  alt=""
                />
              </Link>
              <Link>
                <img
                  src="https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-nature-wallpapers-image_2683049.jpg"
                  alt=""
                />
              </Link>
              <Link>
                <img
                  src="https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-nature-wallpapers-image_2683049.jpg"
                  alt=""
                />
              </Link>
              <Link>
                <img
                  src="https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-nature-wallpapers-image_2683049.jpg"
                  alt=""
                />
              </Link>
              <Link>
                <img
                  src="https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-nature-wallpapers-image_2683049.jpg"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
