import { ImSearch } from "react-icons/im";
import { TbChartBarPopular } from "react-icons/tb";
import { IoIosRocket } from "react-icons/io";
import { BsSignpost2Fill } from "react-icons/bs";
import { motion } from "framer-motion";
import "./Service.css";

function Service() {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.3, } }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const fadeleft = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section className="service">
            <motion.div
                className="service-top"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeleft}
            >
                <h2>We Provide The Best <span>Services</span> </h2>
                <p>Let us present for our potential all part business <br /> with our data driven strategies.</p>
            </motion.div>


            <motion.div
                className="service-bottom"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
            >

                <motion.div
                    className="service-card"
                    variants={cardVariants}
                    whileHover={{
                        scale: 1.05,
                        y: -10,
                        transition: { duration: 0.1 }
                    }}>

                    <div className="icon-box"><ImSearch /></div>
                    <h3>SEO/Scm</h3>
                    <p>Latest unique tools design that matches...</p>
                    <a href="#">Read more</a>
                </motion.div>

                <motion.div
                    className="service-card"
                    variants={cardVariants}
                    whileHover={{
                        scale: 1.05,
                        y: -10,
                        transition: { duration: 0.1 }
                    }}>
                    <div className="icon-box"><TbChartBarPopular /></div>
                    <h3>Marketing</h3>
                    <p>Modern marketing techniques to grow your brand awareness and reach more customers.</p>
                    <a href="#">Read more</a>
                </motion.div>

                <motion.div
                    className="service-card"
                    variants={cardVariants}
                    whileHover={{
                        scale: 1.05,
                        y: -10,
                        transition: { duration: 0.1 }
                    }}>
                    <div className="icon-box"><IoIosRocket /></div>
                    <h3>Viral Campaign</h3>
                    <p>Creative ideas that go viral and help your business stand out from the competition.</p>
                    <a href="#">Read more</a>
                </motion.div>

                <motion.div
                    className="service-card"
                    variants={cardVariants}
                    whileHover={{
                        scale: 1.05,
                        y: -10,
                        transition: { duration: 0.1 }
                    }}>
                    <div className="icon-box"><BsSignpost2Fill /></div>
                    <h3>Others</h3>
                    <p>Additional customized services tailored to your specific business needs and goals.</p>
                    <a href="#">Read more</a>
                </motion.div>
            </motion.div>
        </section>
    );
}

export default Service;