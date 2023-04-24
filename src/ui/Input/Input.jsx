import cn from "classnames";
import s from "./input.module.scss";
import { useState } from "react";

export const Input = ({
  placeholder,
  label,
  id,
  name,
  handleChange,
  inputText,
  className,
  ...props
}) => {
  const [active, setActive] = useState(false);

  return (
    <div
      className={cn(
        className,
        s.item,
        "w-full border-b border-gray py-[16px] pl-2 relative"
      )}
    >
      <label
        className={cn("absolute transition-all", s.label, {
          [s.active]: active || inputText,
          ["text-gray"]: active || inputText,
        })}
        htmlFor={name}
      >
        {label}
      </label>
      <input
        type="text"
        className={cn("w-full", s.input)}
        id={name}
        name={name}
        onChange={handleChange}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        value={inputText}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};
