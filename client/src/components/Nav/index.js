import React from "react";
import { Link } from "react-router-dom";
import "./nav.css"

function Nav() {

    return (<>
        <ul class="nav">
            <li class="nav-item">
                <Link to={["/" , "/explore"]}
                className = {(window.location.pathname === "/" || "/explore") ? "nav-link active" : "nav-link"}
                > Explore</Link>
            </li>
            <li class="nav-item">
                <Link to="/hike"
                className = {(window.location.pathname === "/hikes") ? "nav-link active" : "nav-link"}
                > Hikes</Link>
            </li>
            <li class="nav-item">
            <Link to="/logout"
                className = {(window.location.pathname === "/logout") ? "nav-link active" : "nav-link"}
                > Logout</Link>
            </li>
        </ul>
   </> )
}
export default Nav;