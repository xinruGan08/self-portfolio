import React from "react"
import { Link, NavLink } from "react-router"

export default function Header(){
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <header>
            <Link className="site-logo" to="/">#Home</Link>
            <nav>
                <NavLink
                    to="/about"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    About Me
                </NavLink>
                <NavLink
                    to="/projects"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Projects
                </NavLink>
                <NavLink
                    to="/certification"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Certification
                </NavLink>
            </nav>
        </header>
    )
}