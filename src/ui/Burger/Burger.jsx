import cn from "classnames";
import { motion, useAnimation, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";

import s from "./Burger.module.scss";

export const Burger = ({ className, isOpen, setIsOpen }) => {
  const [isHovered, setIsHovered] = useState(false);
  const openControlTop = useAnimation();
  const openControlBottom = useAnimation();

  const variantsTop = {
    hover: {
      rotate: [0, 0, 0, 90, 90],
      y: [0, 0, 3, 3, 3],
      x: [0, 0, 0, 0, -4],
    },
    initial: {
      rotate: 0,
      y: 0,
      x: 0,
    },
    open: {
      rotate: 45,
      x: 0,
      y: 3,
    },
    close: {
      rotate: 0,
    },
  };

  const variantsBottomHover = {
    hover: {
      rotate: [0, 0, 0, 90, 90],
      y: [0, 0, -3, -3, -3],
      x: [0, 0, 0, 0, 4],
      width: [30, 50, 50, 50, 50],
    },
    initial: {
      rotate: 0,
      y: 0,
      x: 0,
      width: 30,
    },
    open: {
      rotate: -45,
      x: 0,
      y: -2,
    },
    close: {
      rotate: 0,
    },
  };

  const toggleBurger = () => {
    setIsOpen(!isOpen);
    openControlTop.start("open");
    openControlBottom.start("open");
  };

  const hoverOn = () => {
    setIsHovered(true);
    if (!isOpen) {
      openControlTop.start("hover");
      openControlBottom.start("hover");
    }
  };

  const hoverOff = () => {
    setIsHovered(false);
    if (!isOpen) {
      openControlTop.start("initial");
      openControlBottom.start("initial");
    }
  };

  return (
    <motion.div
      className={cn(s.burger, className)}
      onMouseEnter={hoverOn}
      onMouseLeave={hoverOff}
      onClick={toggleBurger}
    >
      <motion.div
        className={cn(s.top, "dark:bg-white")}
        variants={variantsTop}
        animate={openControlTop}
      ></motion.div>
      <motion.div
        className={cn(s.bottom, "dark:bg-white")}
        variants={variantsBottomHover}
        animate={openControlBottom}
      ></motion.div>
    </motion.div>
  );
};
