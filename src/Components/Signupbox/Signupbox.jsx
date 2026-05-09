import { FaTimes } from "react-icons/fa";
import "./Signupbox.css";

function Signupbox({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="box-overlay" onClick={onClose}>

            <div className="box-content" onClick={(e) => e.stopPropagation()}>

                <button className="close-btn" onClick={onClose}>
                    <FaTimes />
                </button>

                <h2>Create Account</h2>
                <p>Join us to get started with your project.</p>

                <form className="signup-form">
                    <div className="input-group">
                        <label>Full Name</label>
                        <input type="text" placeholder="Enter your name" required />
                    </div>

                    <div className="input-group">
                        <label>Email Address</label>
                        <input type="email" placeholder="example@mail.com" required />
                    </div>

                    <div className="input-group">
                        <label>Password</label>
                        <input type="password" placeholder="••••••••" required />
                    </div>

                    <button type="submit" className="submit-btn">Sign Up</button>
                </form>

                <p className="login-link">
                    Already have an account? <span>Log In</span>
                </p>
            </div>
        </div>
    );
}
export default Signupbox;