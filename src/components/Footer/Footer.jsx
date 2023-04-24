import Link from "next/link";
import React, { useRef, useContext, useEffect } from "react";
import gsap from "gsap-trial/dist/gsap";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";

import PinSvg from "./Pin.svg";
import LogoSvg from "./logo.svg";
import cn from "classnames";
import Marquee from "react-fast-marquee";

gsap.registerPlugin(ScrollTrigger);
import s from "./Footer.module.scss";
import SmootherContext from "../../context/SmootherContext";
// import SmootherContext from "@/context/SmootherContext";

export const Footer = () => {
  const { smootherReady } = useContext(SmootherContext);

  const main = useRef();
  const topMarquee = [
    "Ипотека 0,01%",
    "Уютные квартиры со скидкой",
    "Ипотека 0,01%",
    "Уютные квартиры со скидкой",
    "Ипотека 0,01%",
    "Уютные квартиры со скидкой",
    "Ипотека 0,01%",
    "Уютные квартиры со скидкой",
    "Ипотека 0,01%",
    "Уютные квартиры со скидкой",
    "Ипотека 0,01%",
    "Уютные квартиры со скидкой",
    "Ипотека 0,01%",
    "Уютные квартиры со скидкой",
    "Ипотека 0,01%",
    "Уютные квартиры со скидкой",
    "Ипотека 0,01%",
    "Уютные квартиры со скидкой",
  ];

  const bigMarqueeData = [
    "Строим будущее",
    "Строим будущее",
    "Строим будущее",
    "Строим будущее",
    "Строим будущее",
  ];

  const links = [
    { id: 1, title: "О нас", to: "/about", num: "/01" },
    { id: 2, title: "Проекты ", to: "/projects", num: "/02" },
    { id: 3, title: "Вакансии", to: "/vacancy", num: "/03" },
    { id: 4, title: "Контакты ", to: "/contacts", num: "/04" },
  ];

  const address = "г. Ставрополь, ул.\nЧапаева, 4/1";

  const worktimeText = "Работаем\nкаждый день с 09:00 - 19:00";

  useEffect(() => {
    if (!smootherReady) return;

    const ctx = gsap.context(() => {
      gsap.set(main.current, { yPercent: -100 });
      const uncover = gsap.timeline({ paused: true });
      uncover.to(main.current, { yPercent: 0, ease: "none" });
      ScrollTrigger.create({
        trigger: main.current,
        start: "bottom bottom",
        end: "+=70%",
        animation: uncover,
        // markers: true,
        scrub: true,
      });
      return () => ctx.revert();
    }, [smootherReady]);
  });

  return (
    <footer className="bg-black dark:bg-white mt-[160px] overflow-hidden">
      <div className="relative bottom-0" ref={main}>
        {/* <div className={s.top}>
          <div className={cn(s.top__wrap, "dark:text-black")}>
            <Marquee loop={10} gradient={false} className={s.top__warquee}>
              {topMarquee.map((item, idx) => (
                <div className={s.top__item} key={+idx}>
                  {item}
                </div>
              ))}
            </Marquee>
          </div>
        </div> */}
        <div className={s.marquee}>
          <Marquee
            loop={10}
            gradient={false}
            direction="right"
            className={s.top__warquee}
          >
            {bigMarqueeData.map((item, idx) => (
              <>
                <div className={s.marquee__item} key={+idx}>
                  {item}
                </div>
                <LogoSvg className="dark:fill-black" />
              </>
            ))}
          </Marquee>
        </div>

        <div className={s.navigation}>
          <div className={s.left}>
            <nav>
              {links.map((item) => (
                <Link
                  className={cn(s.link, "relative group dark:text-black")}
                  href={item.to}
                  key={+item.id}
                >
                  <div className="absolute top-0 left-0 w-full h-0 bg-white dark:bg-black group-hover:h-full transition-s duration-500 ease-[cubic-bezier(.77,.14,.11,.88)] z-[1]"></div>
                  <p className="group-hover:text-black dark:group-hover:text-white relative z-[2]">
                    {item.title}
                  </p>
                  <span className="group-hover:text-black dark:group-hover:text-white relative z-[2]">
                    {item.num}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
          <div className={cn(s.right, "dark:text-black")}>
            <div className={s.right__wrap}>
              <div className={s.time}>{worktimeText}</div>
              <div className={s.phones}>
                <Link href="tel:+78652239033">8 (8652)-23-90-33</Link>
                <Link href="tel:+7918948592">8 (918) 948-85-92</Link>
              </div>
            </div>
            <div className={s.right__wrap}>
              <PinSvg />
              <p className="ml-auto text-3xl text-right uppercase leading-[130%] sm:text-base">
                {address}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
