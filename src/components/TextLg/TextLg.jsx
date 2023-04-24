import cn from "classnames";

import s from "./TextLg.module.scss";

export const TextLg = ({ className, text }) => {
  return <p className={cn(s.text, className)}>{text}</p>;
};
