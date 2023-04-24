import cn from "classnames";
import { motion } from "framer-motion";

import s from "./Title.module.scss";

export const Title = ({ className, tag, children }) => {
  const staggerChildren = {
    animate: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  const wordAnimation = {
    initial: {
      y: 300,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        ease: [0.6, 0.01, 0.05, 0.95],
        duration: 1,
      },
    },
  };

  switch (tag) {
    case "h1":
      return (
        <motion.h1
          variants={staggerChildren}
          initial="initial"
          animate="animate"
          className={cn(s.h1, className)}
        >
          {children.split("\n").map((word, idx) => (
            <div key={idx} className="block">
              <motion.span className="inline-block" variants={wordAnimation}>
                {word + "\u00A0"}
              </motion.span>
            </div>
          ))}
        </motion.h1>
      );

    case "h2":
      return <h2 className={cn(s.h2, className)}>{children}</h2>;
  }
};
