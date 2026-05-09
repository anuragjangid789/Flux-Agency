import "./Feature.css";
import featurepic from "../../assets/features-pic.png";
import { motion } from "framer-motion";

function Feature() {

    const fadeleft = {
        hidden: { opacity: 0, x: -50},
        visible: { opacity:1, x: 0, transition: { duration: 0.8, ease: "easeOut" }}
    };

    const faderight = {
        hidden: { opacity: 0, x: 50},
        visible: { opacity: 1, x: 0, transition: {duration: 0.8, ease: "easeOut", delay: 0.2}}
    };

    return (
        <section className="feature">
            <motion.div
            className="feature-left"
            initial="hidden"
            whileInView="visible"
            variants={fadeleft}
            >
                <h1 className="feature-heading">Our <span>Agency</span></h1>
                <p>We are a leading digital agency that focuses on delivering <br />
                    quality results and building long-term relationships with clients. <br /><br />

                Our team uses data-driven strategies to ensure your business
                    reaches its maximum potential. <br /> We handle everything from
                    consultation to final execution with precision.</p>
                <button className="feature-btn">Learn More</button>
            </motion.div>

            <motion.div 
            className="feature-right"
            initial="hidden"
            whileInView="visible"
            variants={faderight}
            >
                <img src={featurepic} alt="Feature" />
            </motion.div>
        </section>
    );
}
export default Feature;