import React, { useState } from "react";
import logo from '../assets/logo/nav-logo.png'
import './css/Navbar.css'
function Navbar() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState("Dilshan Sanjeewa");

    return (

        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
                <div className="container">

                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="Apex Assets" className="nav-logo" />
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarContent"
                        aria-controls="navbarContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarContent">
                        <ul className="navbar-nav ms-auto align-items-lg-center">

                            {/* Menu Dropdown */}
                            <li className="nav-item dropdown me-lg-4">
                                <a
                                    className="nav-link dropdown-toggle menu-link d-flex align-items-center"
                                    href="#"
                                    id="menuDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    {/* Bootstrap Menu Icon */}
                                    <i className="bi bi-list me-2" style={{ fontSize: '1.2rem' }}></i>
                                    Menu
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end custom-dropdown" aria-labelledby="menuDropdown">
                                    <li><a className="dropdown-item" href="/">Home</a></li>
                                    <li><a className="dropdown-item" href="/listings">My Listings</a></li>
                                    <li><a className="dropdown-item" href="/inquiries">Inquiries</a></li>
                                    <li><a className="dropdown-item" href="/bookings">Bookings</a></li>
                                    <li><a className="dropdown-item" href="/chat">Chat</a></li>
                                    <li><a className="dropdown-item" href="/contact">Contact Us</a></li>
                                    <li><a className="dropdown-item" href="/about">About Us</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li className="px-3 py-2">
                                        <button className="btn btn-post-ad w-100 text-light">POST NEW AD</button>
                                    </li>
                                </ul>
                            </li>

                            {/* Profile Section */}
                            {isLoggedIn ? (
                                <li className="nav-item dropdown">
                                    <a className="nav-link d-flex align-items-center profile-trigger" href="#" id="profileDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="me-2 user-name-text d-none d-lg-inline">{userName}</span>
                                        <div className="profile-img-wrapper">
                                            <img src="https://github.com/mdo.png" alt="Profile" className="rounded-circle profile-img" />
                                        </div>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end custom-dropdown" aria-labelledby="profileDropdown">
                                        <li><a className="dropdown-item" href="/profile">My Profile</a></li>
                                        <li><a className="dropdown-item" href="/settings">Settings</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item text-danger" href="/logout">Log out</a></li>
                                    </ul>
                                </li>
                            ) : (
                                <li className="nav-item">
                                    <button className="btn-sign-in" onClick={() => setIsLoggedIn(true)}>
                                        Sign In
                                    </button>
                                </li>
                            )}

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;