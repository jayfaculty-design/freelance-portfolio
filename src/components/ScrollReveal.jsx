import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const ScrollReveal = ({
  children,
  className = "",
  threshold = 0.1,
  delay = 0,
  duration = 0.5,
  once = true,
  direction = "up", // up, down, left, right
  distance = 50,
  opacity = 0,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, threshold });
  const controls = useAnimation();

  // Define animation variants based on direction
  const getVariants = () => {
    const variants = {
      hidden: { opacity },
      visible: {
        opacity: 1,
        transition: {
          duration,
          delay,
          ease: "easeOut",
        },
      },
    };

    // Add direction-based movement
    switch (direction) {
      case "up":
        variants.hidden.y = distance;
        variants.visible.y = 0;
        break;
      case "down":
        variants.hidden.y = -distance;
        variants.visible.y = 0;
        break;
      case "left":
        variants.hidden.x = distance;
        variants.visible.x = 0;
        break;
      case "right":
        variants.hidden.x = -distance;
        variants.visible.x = 0;
        break;
      default:
        variants.hidden.y = distance;
        variants.visible.y = 0;
    }

    return variants;
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else if (!once) {
      controls.start("hidden");
    }
  }, [isInView, controls, once]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
