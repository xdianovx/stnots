import cn from "classnames";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

import s from "./ThemeChanger.module.scss";

export const ThemeChanger = ({ className }) => {
  const { theme, setTheme } = useTheme();

  return (
    <motion.div className={cn(s.wrap, className)}>
      <div
        className={cn(s.light, "dark:bg-white dark:border-white", {
          [s.active]: theme === "light",
        })}
        onClick={() => setTheme("light")}
      ></div>
      <div
        className={cn(s.dark, "dark:bg-black dark:border-white", {
          [s.active]: theme === "dark",
        })}
        onClick={() => setTheme("dark")}
      ></div>
    </motion.div>
  );
};
