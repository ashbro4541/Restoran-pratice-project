import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
            <div className="container">
                {/* Brand Name - Changed to match the image */}
                <NavLink className="navbar-brand" to="/">
                    <span className="fw-bold fs-3 text-dark">Restoran</span>
                </NavLink>

                {/* Toggle Button for Mobile */}
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Links - Updated to match the image */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mx-2">
                            <NavLink className="nav-link fw-medium" to="/">
                                HOME
                            </NavLink>
                        </li>
                        <li className="nav-item mx-2">
                            <NavLink className="nav-link fw-medium" to="/about">
                                ABOUT
                            </NavLink>
                        </li>
                        <li className="nav-item mx-2">
                            <NavLink className="nav-link fw-medium" to="/service">
                                SERVICE
                            </NavLink>
                        </li>
                        <li className="nav-item mx-2">
                            <NavLink className="nav-link fw-medium" to="/menu">
                                MENU
                            </NavLink>
                        </li>
                        <li className="nav-item mx-2">
                            <NavLink className="nav-link fw-medium" to="/pages">
                                PAGES
                            </NavLink>
                        </li>
                        <li className="nav-item mx-2">
                            <NavLink className="nav-link fw-medium" to="/contact">
                                CONTACT
                            </NavLink>
                        </li>
                        <li className="nav-item ms-4">
                            <NavLink 
                                className="nav-link btn btn-primary text-white px-3 fw-medium" 
                                to="/book"
                            >
                                BOOK A TABLE
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;