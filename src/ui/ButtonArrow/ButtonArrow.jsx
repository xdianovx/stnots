import s from "./ButtonArrow.module.scss";

import cn from "classnames";

import IconSvg from "./Icon.svg";

export const ButtonArrow = ({ className }) => {
  return (
    <button className={cn(s.btn, className)}>
      <IconSvg />
    </button>
  );
};
