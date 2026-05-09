import "./Home.css";
import homeimg from "../../assets/home-img.png";
import dots from "../../assets/dots.png";
import { motion } from "framer-motion"; 

function Home() {
  
    const fadeLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const fadeRight = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }
    };

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1.5 } }
    };

    return (
        <section className="home">
         
            <motion.div
                className="home-left"
                initial="hidden"
                whileInView="visible"
                variants={fadeLeft}
            >
                <h1>We Create <br /> <span>Solutions</span> For <br /> Your Business</h1>
                <p>Our team keeps a keen eye on emerging trends <br /> and technologies to ensure your marketing <br /> campaigns remain cutting-edge.</p>

                <a href="#footer-section">
                    <motion.button
                        whileHover={{ scale: 1.1 }} 
                        whileTap={{ scale: 0.9 }}   
                    >
                        Get Started
                    </motion.button>
                </a>
            </motion.div>

          
            <motion.div
                className="home-right"
                initial="hidden"
                whileInView="visible"
                variants={fadeRight}
            >
                <img src={homeimg} alt="homeimage" />
            </motion.div>


            <motion.img
                src={dots}
                alt="background-element"
                className="dots dots-top"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
            />
            <motion.img
                src={dots}
                alt="background-element"
                className="dots dots-bottom"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
            />
        </section>
    );
}

export default Home;

