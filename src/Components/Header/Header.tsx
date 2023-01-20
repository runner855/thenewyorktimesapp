import moment from "moment";
import React from "react";
import { NavBar } from "../NavBar/NavBar";
import "../Header/Header.css";

export const Header = () => {
  const currentdate = moment().format("dddd, MMMM Do YYYY");
  return (
    <div className="header">
      <div className="heading">
        <ul className="heading_container">
          <li className="nyt_title">The New York Times</li>
          <li className="date">{currentdate}</li>
          <li className="date_desc">Today's paper</li>
        </ul>
      </div>
      <NavBar />
    </div>
  );
};
