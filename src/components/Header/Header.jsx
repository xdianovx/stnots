import cn from "classnames";
import { useState } from "react";

import s from "./Header.module.scss";
import { Burger, Logo, ThemeChanger } from "../../ui";
import { Navigation } from "..";

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className={s.header}>
      <Navigation isOpen={isNavOpen} setIsOpen={setIsNavOpen} />

      <div className="container">
        <div className={s.wrap}>
          <Logo
            className={cn({
              ["opacity-0 transition-all"]: isNavOpen === true,
            })}
          />
          <ThemeChanger
            className={cn(s.theme__changer, {
              ["opacity-0 transition-all"]: isNavOpen === true,
            })}
          />
          <Burger
            className={s.burger}
            isOpen={isNavOpen}
            setIsOpen={setIsNavOpen}
          />
        </div>
      </div>
    </header>
  );
};
