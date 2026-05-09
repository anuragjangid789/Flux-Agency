import "./Steps.css";
import steppic from "../../assets/step-pic.png";
import { motion } from "framer-motion";


const Steps = () => {
    
    const containerVrients = {
        hidden: {opacity:0},
        visible: {opacity:1, transition:{staggerChildren: 0.3, delayChildren: 0.2}}
    };

    const stepVarients = {
        hidden: {opacity: 0, y: 20},
        visible: {opacity: 1, y: 0, transition: {duration: 0.5, ease: "easeOut"}}
    };

    const fadeLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };
  

    const stepdata = [ 
        {
            id: "01",
            title: "Contact Us",
            desc: "Reach out to us via call or message to discuss your needs."
        },
        {
            id: "02",
            title: "Consultation",
            desc: "Our experts will consult you on the best strategies for your business."
        },
        {
            id: "03",
            title: "Place Order",
            desc: "Once satisfied, place your order and let us handle the rest."
        },
        {
            id: "04",
            title: "Get Results",
            desc: "Relax while we deliver high-quality results for your brand."
        }
    ]

    return (
        <section className="steps-container">
            <motion.div 
            className="left-side"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            >
                <img src={steppic} alt="Step Illustration" />
            </motion.div>

            <motion.div 
            className="right-side"
            initial="hidden"
            whileInView="visible"
            variants={containerVrients}
            >
                <h2>Simple <span>Solutions</span></h2>
                <p>We provide the most suitable and simple solutions for your business. <br />
                    Let us help you to grow your business with our strategic planning and data driven tools.</p>
                <div className="step-list">

                    {stepdata.map((item, index) => (

                        <motion.div 
                        className="single-step" 
                        key={index}
                        variants={stepVarients}
                        >
                            <div className="step-no">{item.id}</div>
                            <div className="step-text">
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </motion.div>
                        
                    ))}

                </div>
                <button className="steps-btn">Get Started</button>
            </motion.div>
        </section>
    );
}
export default Steps;