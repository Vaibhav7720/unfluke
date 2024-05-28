import React from "react";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="features-container">
      
        <motion.div
          className="features-card"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="features-card-title">Transform Your Website</h3>
          <p className="features-card-text">
            Add motion art effects to your website and attract your visitors'
            attention with colorful animations.
          </p>
        </motion.div>
        <motion.div
          className="features-card"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="features-card-title">Unleash Your Creativity</h3>
          <p className="features-card-text">
            With Motion Art for Elementor, you can unleash the power of
            creativity and create stunning websites that stand out.
          </p>
        </motion.div>
        <motion.div
          className="features-card"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="features-card-title">Easy to Use</h3>
          <p className="features-card-text">
            Motion Art for Elementor is easy to use and requires no coding
            skills. Simply drag and drop the motion art effects onto your
            website.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
