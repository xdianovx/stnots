import Image from "next/image";
import Link from "next/link";

import ImgSrc1 from "./img.png";
import cn from "classnames";

export const NextProject = ({ className }) => {
  return (
    <section
      className={cn("relative overflow-hidden", className)}
      data-scroll-section
    >
      <div className="container">
        <span className="block text-gray text-center">Следующий проект</span>

        <h2 className="text-center mt-6 text-[220px] leading-none lg:text-[120px] sm:text-4xl sm:mt-2">
          Берег солнца
        </h2>

        <div className="flex gap-8 justify-center mt-8 sm:flex-col sm:items-center sm:gap-2">
          <p className="sm:text-sm">Ростов-на-Дону</p>
          <div className="sm:text-sm sm:hidden">/</div>
          <p className="sm:text-sm">Постороен в 2021г.</p>
          <div className="sm:text-sm sm:hidden">/</div>
          <p className="sm:text-sm">от 43,3 млн. рублей</p>
        </div>

        <div className="flex justify-center mt-16 sm:mt-10">
          <Image src={ImgSrc1} />
        </div>
      </div>

      <div className="absolute bg-white left-0 -bottom-1/2 h-full w-full z-20 border-t border-grayBorder pt-16 sm:pt-4 sm:-bottom-[350px]">
        <Link
          href="/projects"
          className="underline underline-offset-2 text-center block"
        >
          Все проекты
        </Link>
      </div>
    </section>
  );
};
