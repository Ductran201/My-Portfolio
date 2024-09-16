import React from "react";
import "./project.css";
export default function Project() {
  return (
    <>
      <main className="bg-black text-white px-8">
        {/* HEADING */}
        <h1 className="text-center mb-6 py-[75px] project-header">
          MY PROJECT
        </h1>

        {/* FILTER PROJECT */}
        <ul className="project-nav text-center mb-8">
          <li>
            <a href="" className="active">
              ALL
            </a>
          </li>
          <li>
            <a href="">CSS/JAVASCIPT</a>
          </li>
          <li>
            <a href="">SPRING BOOT</a>
          </li>
          <li>
            <a href="">RESTFUL API</a>
          </li>
        </ul>

        <div>
          <ul className="project-list-container">
            <li>
              <a href="">
                <img
                  src="https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-nature-wallpapers-image_2683049.jpg"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="">
                <img
                  src="https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-nature-wallpapers-image_2683049.jpg"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="">
                <img
                  src="https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-nature-wallpapers-image_2683049.jpg"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="">
                <img
                  src="https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-nature-wallpapers-image_2683049.jpg"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="">
                <img
                  src="https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-nature-wallpapers-image_2683049.jpg"
                  alt=""
                />
              </a>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
