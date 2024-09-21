import React from "react";
import "./index.css";
import { NavLink, Outlet } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

export default function PortFolio() {
  return (
    <>
      <main className="main">
        <button className="theme ">
          <TipsAndUpdatesIcon />
        </button>

        <div className="flex flex-col fixed right-4 top-[35%] gap-4 z-[1000]">
          <NavLink end to={"/"}>
            <span>
              <HomeIcon />
            </span>
          </NavLink>
          <NavLink to={"/project"}>
            <span>
              <WorkIcon />
            </span>
          </NavLink>
          <NavLink to={"/about"}>
            <span>
              <PersonIcon />
            </span>
          </NavLink>
          <NavLink to={"/contact"}>
            <span>
              <EmailIcon />
            </span>
          </NavLink>
        </div>
        <Outlet />
      </main>
    </>
  );
}
