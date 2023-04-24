import cn from "classnames";

import s from "./TextBlock.module.scss";
import { TextLg } from "../../components";

export const TextBlock = ({ text, title, className }) => {
  return (
    <section className={cn(s.section, className, "h")} data-scroll-section>
      <div className="container">
        <div className="flex flex-col">
          <TextLg text={title} />
          <p className="max-w-[340px] font-light mx-auto mt-12 md:text-sm md:mt-8 md:max-w-none">
            {text}
          </p>
        </div>
      </div>
    </section>
  );
};
