import Image from "next/image";

import cn from "classnames";
import { LinkCircle } from "../../ui";

export const OurTeamSection = ({ className, data }) => {
  return (
    <section data-scroll-section className={cn("", className)}>
      <div className="container">
        <div className="flex items-end">
          <h2 className="text-[180px] leading-[100%]">
            Наши
            <br />
            сотрудники
          </h2>

          <LinkCircle link="/" text="Оставить отзыв" className="ml-auto" />
        </div>
      </div>

      <div className="border-t border-grayLight mt-[74px]"></div>

      <div className="container">
        <div className="flex flex-wrap gap-[60px] mt-20">
          {data.map((item) => (
            <div className="flex flex-col max-w-[780px]" key={item.id}>
              <div className="relative h-full">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="block h-full"
                />
              </div>

              <h3>{item.name}</h3>
              <p>{item.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
