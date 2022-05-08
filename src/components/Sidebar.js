import React from "react";
import "../styles/Sidebar.css";
import { SidebarData } from "./SidebarData";
import logo from "../images/logo.svg";
import { NavLink, Link } from "react-router-dom";

function Sidebar(props) {
  return (
    <div className="sidebar">
      <div className="logo-wrapper">
        <Link to={"/"}>
          <img className="logo" src={logo} alt="logo.svg" />
        </Link>
      </div>
      <ul className="sidebar-list">
        {SidebarData.map((val, key) => {
          return (
            <NavLink
              to={val.link}
              className="row {({ isActive ? 'active' : '' })}"
              key={key}
            >
              <div className="icon">{val.icon}</div>
              <h2 className="title">{val.title}</h2>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
