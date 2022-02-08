import React from "react";
import logo from "../logo.svg";
import "../App.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <img className="logo" src={logo} alt="react-logo" />
            <h1 className="logo-name">ReactFacts</h1>
            <h2 className="course">React Course - Project 1</h2>
        </nav>
    )
}