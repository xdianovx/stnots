import cn from "classnames";
import s from "./TextMd.module.scss";

export const TextMd = ({ className, text }) => {
  return <p className={cn(s.text, className)}>{text}</p>;
};
