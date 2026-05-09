import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "./Review.css";

const Review = () => {
  const reviewData = [
    {
      id: 1,
      name: "Rahul S.",
      text: "Excellent service! They delivered high-quality results much faster than we initially expected.",
      role: "Client"
    },

    {
      id: 2,
      name: "Sneha W.",
      text: "Extremely creative team. Working with them was an absolute pleasure and very professional.",
      role: "Designer"
    },

    {
      id: 3,
      name: "Amit K.",
      text: "The final results were exactly what I envisioned. They truly understood my business needs.",
      role: "Founder"
    },

    {
      id: 4,
      name: "Pooja R.",
      text: "Very reliable team with 24/7 support. They were always there to solve our queries instantly.",
      role: "Manager"
    },

    {
      id: 5,
      name: "Vikram J.",
      text: "I needed a simple yet effective solution, and they executed it perfectly for my business.",
      role: "Shop Owner"
    },

    {
      id: 6,
      name: "Zoya H.",
      text: "Hands down the best digital agency in town! Their strategy helped us grow our online reach.",
      role: "Blogger"
    },

  ];

  const fadeDown = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }
  };

  return (
    <section className="reviews-section">
      <motion.div
        className="section-head"
        initial="hidden"
        whileInView="visible"
        variants={fadeDown}
      >
        <h2>What They <span>Say About Us</span> !</h2>
        <p>We take pride in delivering exceptional results for our clients. Read through their
          experiences and see how we’ve helped businesses grow and succeed.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
      >
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={3.5}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3.5 },
          }}
          className="mySwiper"
        >
          {reviewData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="review-card">
                <div className="quote-mark">“</div>
                <p>{item.text}</p>
                <div className="user-details">
                  <h4>{item.name}</h4>
                  <small>{item.role}</small>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Review;