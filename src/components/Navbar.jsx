import Logo from '../assets/logo/Apex_Assets_Logo.svg';
// import UserImg from '';
import "./css/navbar.css"

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg custom-navbar">
                <div className="container-custom">
                    {/* Logo Section */}
                    <div className="navbar-brand-wrapper">
                        <img src={Logo} alt="Apex Assets" className="logo-img" />
                    </div>

                    {/* Hamburger Menu for Mobile */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Links and Actions */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item"> <a className="nav-link custom-underline" href="#home">Home</a> </li>
                            <li className="nav-item"> <a className="nav-link custom-underline" href="#about">About Us</a> </li>
                            <li className="nav-item"> <a className="nav-link custom-underline" href="#contact">Contact</a> </li>
                        </ul>

                        {/* User Profile & Logout Group */}
                        <div className="user-action-container d-flex align-items-center">
                            <div className="user-avatar">
                                {/* <img src={UserImg} alt="User" /> */}
                            </div>
                            <button className="btn-logout-aws">Log out</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;