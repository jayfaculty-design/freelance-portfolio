// src/components/NotchMotion.jsx
import React from "react";
import { motion } from "motion/react";

const NotchMotion = ({
  children,
  className = "",
  delay = 0,
  duration = 0.3,
  type = "default", // default, subtle, bounce, or slide
}) => {
  // Different animation variants
  const variants = {
    default: {
      initial: { y: 10, opacity: 0 },
      animate: {
        y: 0,
        opacity: 1,
        transition: {
          duration,
          delay,
          ease: [0.25, 0.1, 0.25, 1.0],
        },
      },
      hover: {
        y: -5,
        transition: {
          duration: 0.2,
          ease: "easeOut",
        },
      },
      tap: {
        y: 2,
        transition: {
          duration: 0.1,
          ease: "easeOut",
        },
      },
    },
    subtle: {
      initial: { y: 5, opacity: 0 },
      animate: {
        y: 0,
        opacity: 1,
        transition: {
          duration,
          delay,
          ease: "easeOut",
        },
      },
      hover: {
        y: -2,
        transition: {
          duration: 0.2,
          ease: "easeOut",
        },
      },
      tap: {
        y: 1,
        transition: {
          duration: 0.1,
          ease: "easeOut",
        },
      },
    },
    bounce: {
      initial: { y: 20, opacity: 0 },
      animate: {
        y: 0,
        opacity: 1,
        transition: {
          duration,
          delay,
          type: "spring",
          stiffness: 400,
          damping: 15,
        },
      },
      hover: {
        y: -7,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 10,
        },
      },
      tap: {
        y: 3,
        transition: {
          duration: 0.1,
          ease: "easeOut",
        },
      },
    },
    slide: {
      initial: { x: -20, opacity: 0 },
      animate: {
        x: 0,
        opacity: 1,
        transition: {
          duration,
          delay,
          ease: "easeOut",
        },
      },
      hover: {
        y: -4,
        x: 2,
        transition: {
          duration: 0.2,
          ease: "easeOut",
        },
      },
      tap: {
        y: 2,
        transition: {
          duration: 0.1,
          ease: "easeOut",
        },
      },
    },
  };

  const selectedVariant = variants[type] || variants.default;

  return (
    <motion.div
      className={className}
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="tap"
      variants={selectedVariant}
    >
      {children}
    </motion.div>
  );
};

export default NotchMotion;
