import React from "react";
import "./home.css";
export default function Home() {
  return (
    <>
      <main className="home-container bg-black text-white">
        <div className="home-content">
          <img className="avatar" src="src\assets\portfolio.jpg" alt="" />

          <div className="ml-6">
            <div className="mb-3">
              <h2 className="text-yellow-500">I'm Tran Trong Duc</h2>
              <h2>Web Developer !</h2>
            </div>
            <p className="mb-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloremque a omnis officia cum quisquam eius, architecto sapiente
              voluptates rem, sed tempora explicabo voluptas nisi vitae suscipit
              natus expedita asperiores adipisci!
            </p>

            <button className="home-btn mr-4">
              <a href="" className="test">
                About
              </a>
            </button>
            <button className="home-btn ">
              <a href="">Project</a>
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
