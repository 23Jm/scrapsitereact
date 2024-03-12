import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      className="hero container"
      animate={{ opacity: [1, 10, 1] }}
      transition={{ duration: 3, delay: 0.1 }}
    >
      <div className="hero-text">
        <AnimatePresence>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
          >
            Scrap metal recycling for a greener planet
          </motion.h1>
        </AnimatePresence>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut similique
          fuga asperiores nihil perspiciatis officiis molestiae voluptates
          aliquam iure ratione. Doloribus voluptate culpa repreh enderit
          aperiam? Esse iste voluptas fugiat itaque.
        </p>
        <button className="btn">
          <Link to="/contact" className="contact-btn">
            Contact
          </Link>
        </button>
      </div>
    </motion.div>
  );
};

export default Hero;
