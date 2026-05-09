import "./Navbar.css";
import logo from "../../assets/navlogo.png";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Signupbox from "../Signupbox/Signupbox";
import { motion } from "framer-motion";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSignupOpen, setIsSignupOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    
    const fadedown = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0,  transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <motion.nav 
            className="navbar"
            initial="hidden"
            animate="visible"
            variants={fadedown}
        >
            {isOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}

            <div className="hamburger" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>

            <div className="navlogo">
                <img src={logo} alt="logo" />
            </div>

            <ul className={isOpen ? "list-items mobile-menu" : "list-items"}>
                <li><a href="#home" onClick={toggleMenu}>Home</a></li>
                <li><a href="#about" onClick={toggleMenu}>About</a></li>
                <li><a href="#services" onClick={toggleMenu}>Services</a></li>
                <li><a href="#contact" onClick={toggleMenu}>Contact us</a></li>
                <li><a href="#blog" onClick={toggleMenu}>Blog</a></li>
            </ul>

            <button className="sign-btn" onClick={() => setIsSignupOpen(true)}>
                Sign up
            </button>

            <Signupbox
                isOpen={isSignupOpen}
                onClose={() => setIsSignupOpen(false)}
            />
        </motion.nav>
    );
}

export default Navbar;