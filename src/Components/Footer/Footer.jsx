import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import footerlogo from "../../assets/footerlogo.png";
import { motion } from "framer-motion";
import "./Footer.css";

function Footer() {

    const topVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2, } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const bottomVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { delay: 0.5, duration: 1 } }
    };

    return (
        <section className="footer">
            <motion.div
                className="footer-top"
                id="footer-section"
                initial="hidden"
                whileInView="visible"
                variants={topVariants}
            >
                <h2>Ready to Get Started? Contact Us Today!</h2>
            </motion.div>

            <motion.div
                className="footer-mid"
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
            >
                <motion.div
                    className="brand"
                    variants={itemVariants}
                >
                    <img src={footerlogo} alt="Flux Agency" />
                    <div className="social-icons">
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            className="icon-circle"
                        >
                            <a href="https://facebook.com/yourprofile" target="_blank" rel="noreferrer">
                                <FaFacebookF />
                            </a>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            className="icon-circle"
                        >
                            <a href="https://www.instagram.com/anuragjangid_?igsh=MTN5amVmNTNmdDlyag%3D%3D&utm_source=qr" target="_blank" rel="noreferrer">
                                <FaInstagram />
                            </a>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            className="icon-circle"
                        >
                            <a href="https://linkedin.com/in/anurag-jangid-03b5203a9" target="_blank" rel="noreferrer">
                                <FaLinkedinIn />
                            </a>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div className="footer-col" variants={itemVariants}>
                    <h3>Our Process</h3>
                    <ul>
                        <li>Contact Us</li>
                        <li>Consultation</li>
                        <li>Place Order</li>
                        <li>Design & Dev</li>
                        <li>Final Delivery</li>
                    </ul>
                </motion.div>

                <motion.div className="footer-col" variants={itemVariants}>
                    <h3>Services</h3>
                    <ul>
                        <li>UI/UX Design</li>
                        <li>Web Development</li>
                        <li>Digital Marketing</li>
                        <li>Brand Strategy</li>
                    </ul>
                </motion.div>

                <motion.div className="footer-col" variants={itemVariants}>
                    <h3>Contact Us</h3>
                    <ul className="contact-list">
                        <li>
                            <FaEnvelope className="footer-icon" />
                            <span>anuragjangid789@gmail.com</span>
                        </li>
                        <li>
                            <FaPhoneAlt className="footer-icon" />
                            <span>+91 87693 28060</span>
                        </li>
                        <li>
                            <FaMapMarkerAlt className="footer-icon" />
                            <span>Jaipur, Rajasthan</span>
                        </li>
                    </ul>
                </motion.div>
            </motion.div>

            <motion.div
                className="footer-bottom"
                initial="hidden"
                whileInView="visible"
                variants={bottomVariants}
            >
                <p>&copy; 2024 Flux Agency. All rights reserved.</p>
                <p>Designed and Developed with ❤️ by Anurag Jangid</p>
            </motion.div>
        </section>
    );
}

export default Footer;