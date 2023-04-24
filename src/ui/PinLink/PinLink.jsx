import { useState } from "react";
import s from "./PinLink.module.scss";
import Icon from "./pin.svg";
import cn from "classnames";

export const PinLink = ({ className, size = "md" }) => {
  const [hover, setHover] = useState(false);
  const [isActive, setisActive] = useState(false);
  const HoverEffect = () => {
    setHover(true);
  };
  const HoverEffectOff = () => {
    setHover(false);
  };

  return (
    <div
      className={cn(
        s.pin,
        "cursor-pointer flex items-center transition-colors ease-in duration-300 justify-center group rounded-full border border-gray shrink-0 hover:bg-black hover:border-black",
        className,
        {
          ["w-[50px] h-[50px]"]: size == "lg",
          ["w-[30px] h-[30px]"]: size == "md",
        }
      )}
      onClick={() => setisActive(!isActive)}
    >
      {!isActive && (
        <Icon
          onMouseEnter={HoverEffect}
          onMouseLeave={HoverEffectOff}
          className={cn("fill-black block group-hover:fill-white", {
            ["w-[24px] h-[30px]"]: size == "lg",
            ["w-[11px] h-[14px]"]: size == "md",
          })}
        />
      )}
    </div>
  );
};
