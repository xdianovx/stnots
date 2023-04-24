import Link from "next/link";

import ArrowSvg from "./arrow.svg";
import cn from "classnames";
import { motion } from "framer-motion";
import { useState } from "react";

import s from "./LinkCircle.module.scss";

export const LinkCircle = ({ link, className, text }) => {
  const [isHover, setIsHover] = useState(false);
  const variants = {
    open: {
      width: 36,
      height: 36,
      background: "#000",
    },
    close: {
      width: 14,
      height: 14,
      background: "none",
    },
  };

  const arrowVariants = {
    open: {
      x: [-30, 0],
      opacity: [1, 1],
      transition: {
        duration: 0.3,
        type: "tween",
      },
    },
    close: {
      x: -30,
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  const enterHoverHandler = () => {
    setIsHover(true);
  };

  const leacveHoverHandler = () => {
    setIsHover(false);
  };

  return (
    <Link
      href={link}
      className={cn(s.link, className)}
      onMouseEnter={enterHoverHandler}
      onMouseLeave={leacveHoverHandler}
    >
      <p className="before:bg-black">{text}</p>
      <motion.div className="relative">
        <motion.div
          variants={variants}
          animate={isHover ? "open" : "close"}
          initial="close"
          className={cn(
            s.circle,
            "border-black border overflow-hidden absolute flex items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  rounded-full bg-black"
          )}
        >
          <motion.div
            className=""
            variants={arrowVariants}
            initial="close"
            animate={isHover ? "open" : "close"}
          >
            <ArrowSvg className="stroke-white block" />
          </motion.div>
        </motion.div>
      </motion.div>
    </Link>
  );
};
