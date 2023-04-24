import Image from "next/image";
import ArrowSvg from "./arrow.svg";
import cn from "classnames";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import s from "./Accordition.module.scss";
import { TextMd } from "../../components";
import { LinkCircle } from "../../ui";

export const AccordionItem = ({ title, num, image, link }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const openHandler = (e) => {
    setIsOpen(!isOpen);
    e.preventDefault();
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const variants = {
    open: {
      height: "auto",
      opacity: 1,
    },

    closed: {
      height: 0,
      opacity: 0,
    },
  };

  return (
    <div
      ref={ref}
      id={link}
      className={cn(
        s.item,
        "border-t border-gray px-12 py-4 last-of-type:border-b relative  group  cursor-pointer sm:py-6",
        {
          ["bg-black"]: isOpen,
        }
      )}
      onClick={(e) => openHandler(e)}
    >
      <div className="absolute top-0 left-0 w-full h-0 bg-black group-hover:h-full transition-all duration-500 ease-[cubic-bezier(.77,.14,.11,.88)] z-[1]"></div>

      <div className="container relative z-[1]">
        <div className={cn(s.item__wrap)}>
          <div
            className={cn(
              s.item__head,
              "grid-2 group-hover:text-white sm:flex sm:gap-6 sm:items-start",
              {
                ["text-white"]: isOpen,
              }
            )}
          >
            <div className="sm:text-xs sm:mb-auto">{num}</div>
            <div
              className={cn(
                "absolute left-[130px] w-0 h-0 top-1/2 -translate-y-1/2 rounded-full group-hover:w-[330px] group-hover:h-[330px] transition-all ease-[cubic-bezier(.77,.14,.11,.88)] xl:group-hover:w-[260px] xl:group-hover:h-[260px] md:left-0 sm:hidden"
              )}
            >
              {!isOpen && (
                <Image
                  src={image}
                  fill
                  alt={title}
                  className="block sm:hidden"
                />
              )}
            </div>

            <div className="flex items-center">
              <h2
                className={cn(s.item__title, {
                  [s.active]: isOpen,
                })}
              >
                {title}
              </h2>
              <div
                className={cn(
                  s.circle,
                  "border flex items-center justify-center transition-all border-black group-hover:bg-white group-hover:w-12 group-hover:h-12 sm:hidden",
                  {
                    ["text-white"]: isOpen,
                  }
                )}
              >
                <ArrowSvg className={cn("opacity-0 group-hover:opacity-100")} />
              </div>
            </div>
          </div>
          <motion.div
            className={cn(s.item__content, "pointer-events-none  text-white", {
              ["mt-[120px] sm:mt-9"]: isOpen,
            })}
            variants={variants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
          >
            <div className="grid-2">
              <div className="relative w-[300px] h-[300px] mx-auto lg:w-[220px] lg:h-[220px] md:mr-auto md:ml-0 sm:hidden">
                {isOpen && (
                  <Image
                    src={image}
                    fill
                    alt={title}
                    className={cn(s.image__content)}
                  />
                )}
              </div>
              <div>
                <TextMd
                  text="Оформляйте полис ДМС от партнера «Альфа-страхование», и
                  получайте своевременную и качественную медицинскую помощь с
                  выгодой 30%. Сумму страхового взноса можно включить в
                  ипотечный платеж и больше не беспокоиться о дополнительных
                  тратах."
                />

                <div className="flex mt-[120px] gap-20 md:mt-24 md:flex-wrap md:gap-8 sm:grid sm:grid-cols-2">
                  <div className="flex flex-col gap-[22px] lg:gap-4 md:gap-2 md:w-1/2">
                    <span className="block">01</span>
                    <p className="md:text-sm">Надежные партнеры</p>
                  </div>

                  <div className="flex flex-col gap-[22px] lg:gap-4 md:gap-2 md:w-1/2">
                    <span className="block">02</span>
                    <p className="md:text-sm">Широкий выбор услуг</p>
                  </div>

                  <div className="flex flex-col gap-[22px] lg:gap-4 md:gap-2 md:w-1/2">
                    <span className="block">03</span>
                    <p className="md:text-sm">Стоимость включена в ипотеку</p>
                  </div>

                  <div className="flex flex-col gap-[22px] lg:gap-4 md:gap-2 md:w-1/2">
                    <span className="block">04</span>
                    <p className="md:text-sm">Широкая сеть клиник</p>
                  </div>
                </div>

                <LinkCircle link="#" text="Кнопка" className="mt-16" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
