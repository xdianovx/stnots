import Image from "next/image";
import cn from "classnames";
import { motion } from "framer-motion";
import { useState } from "react";
import s from "./NumItem.module.scss";

export const NumItem = ({ className, data }) => {
  const [isHover, setIsHover] = useState(false);

  const onHover = () => {
    setIsHover(true);
  };

  const onLeave = () => {
    setIsHover(false);
  };

  const variants = {
    open: {
      opacity: 1,
    },
    closed: {
      opacity: 0,
    },
  };

  return (
    <motion.div
      className={cn(
        s.item,
        className,
        "border-t s border-grayBorder group  last-of-type:border-b cursor-pointer relative z-10 "
      )}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <motion.div
        variants={variants}
        animate={isHover ? "open" : "closed"}
        initial="closed"
        className={cn(
          s.image,
          "absolute w-[317px] h-[392px] right-20 z-[3]  top-1/2 -translate-y-1/2  group-hover:text-white md:hidden"
        )}
      >
        <Image src={data.image} alt={data.title} fill />
      </motion.div>

      <div className="absolute top-0 left-0 w-full h-0 bg-black group-hover:h-full transition-all duration-500 ease-[cubic-bezier(.77,.14,.11,.88)] z-[1]"></div>

      <motion.div className="container relative z-[2]  group-hover:text-white">
        <div className="grid-2 items-center sm:grid sm:grid-cols-2">
          <div className={s.title}>{data.title}</div>
          <div className="flex items-center">
            <h2 className={s.value}>{data.value}</h2>
            <p className={s.num}>{data.num}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
