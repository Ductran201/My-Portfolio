import { HomeOutlined } from "@ant-design/icons";
import React from "react";
import "./main.css";

export default function Main() {
  return (
    <>
      <main className="main relative">
        <button className="theme">Dark</button>
        <nav className="nav">
          <ul className="">
            <li>
              <a href="" className="active">
                {/* <h2>Home</h2> */}
                <HomeOutlined />
              </a>
            </li>
            <li>
              <a href="">P</a>
            </li>
            <li>
              <a href="">A</a>
            </li>
            <li>
              <a href="">C</a>
            </li>
          </ul>
        </nav>
      </main>
    </>
  );
}
