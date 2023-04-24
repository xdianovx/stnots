import cn from "classnames";
import ArrSvg from "./arr.svg";
import { motion } from "framer-motion";
import { useState } from "react";

export const SubmitButton = ({ props, className }) => {
  const [isHover, setIsHover] = useState(false);
  const variants = {
    hoverOn: {
      width: "100%",
      height: "100%",
    },
    hoverOff: {},
  };
  return (
    <motion.button
      className={cn(
        "w-[50px] h-[50px] rounded-full border transition-colors cursor-pointer flex items-center justify-center relative",
        className,
        {
          ["border-black"]: isHover,
          ["border-grayBorder"]: isHover === false,
        }
      )}
      whileHover="border-black"
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
      type="submit"
      {...props}
    >
      <ArrSvg
        className={cn("w-4 h-3 relative z-[1]", {
          ["stroke-white"]: isHover,
        })}
      />
      <motion.div
        className="rounded-full absolute bg-black pointer-events-none"
        variants={variants}
        transition={{
          // type: "spring",
          duration: 0.2,
        }}
        animate={isHover ? "hoverOn" : "hoverOff"}
        initial="hoverOff"
      ></motion.div>
    </motion.button>
  );
};
