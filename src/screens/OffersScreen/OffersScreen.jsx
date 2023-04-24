import Image from "next/image";
import React, { useContext, useEffect, useLayoutEffect, useRef } from "react";
import { LinkCircle } from "../../ui";
import gsap from "gsap-trial/dist/gsap";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import { useIsomorphicLayoutEffect } from "../../helpers/isomorphicEffect";
gsap.registerPlugin(ScrollTrigger);

export const OffersScreen = ({ className }) => {
  const sliders = [
    {
      id: 1,
      img: "/img/offers/1.jpg",
      suptitle: "Ипотека 0,01%",
      title:
        "Успейте купить квартиру с минимальной переплатой по уникальной ставке 0,01%",
      text: "Кроме комплексных решений, в качестве отдельных задач, мы можем выполнить качественно и в срок следующие виды работ.",
      linkText: "Ссылка на страницу",
      link: "/",
    },
    {
      id: 2,
      img: "/img/offers/1.jpg",
      suptitle: "Ипотека 100%",
      title:
        "Успейте купить квартиру с минимальной переплатой по уникальной ставке 0,01%",
      text: "Кроме комплексных решений, в качестве отдельных задач, мы можем выполнить качественно и в срок следующие виды работ.",
      linkText: "Ссылка на страницу",
      link: "/",
    },
    {
      id: 3,
      img: "/img/offers/1.jpg",
      suptitle: "Ипотека 300%",
      title:
        "Успейте купить квартиру с минимальной переплатой по уникальной ставке 0,01%",
      text: "Кроме комплексных решений, в качестве отдельных задач, мы можем выполнить качественно и в срок следующие виды работ.",
      linkText: "Ссылка на страницу",
      link: "/",
    },
  ];

  const main = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".offer_slide");

      panels.forEach((panel, i) => {
        if (panels[i + 1]) {
          ScrollTrigger.create({
            trigger: panel,
            start: "top+=" + 100 * (i + 1) + "%" + " top",
            end: "top+=" + 100 * (i + 1) + "%" + " top",
            scrub: true,
            id: i,
            onEnter: () => {
              gsap
                .timeline()
                .to(panel, {
                  scale: 0.8,
                  autoAlpha: 0,
                })
                .to(
                  panels[i + 1],
                  {
                    scale: 1,
                    autoAlpha: 1,
                  },
                  "<"
                );
            },
            onEnterBack: () => {
              gsap
                .timeline()
                .to(panel, {
                  scale: 1,
                  autoAlpha: 1,
                })
                .to(
                  panels[i + 1],
                  {
                    scale: 0.8,
                    autoAlpha: 0,
                  },
                  "<"
                );
            },
          });
        }
      });

      ScrollTrigger.create({
        trigger: main.current,
        pin: true,
        scrub: 1,
        end: "+=" + panels.length * 100 + "%",
      });
    }, main);
  }, []);
  return (
    <section className={className}>
      <div className="container">
        <div className="wrap h-screen relative overflow-hidden" ref={main}>
          {sliders.map((item) => (
            <div
              className="offer_slide first:opacity-1 first:visible bg-white opacity-1 scale-[.9] invisible  flex items-center paneloffer absolute top-0 left-0  h-screen "
              key={item.id}
            >
              <div className="flex gap-32 border min-h-[840px] border-grayBorder py-16 px-32 xl:px-16 xl:py-10 xl:min-h-[80%] lg:px-16 lg:py-10 lg:gap-12 sm:p-0 sm:gap-0">
                <div className="relative max-w-[420px] w-full">
                  <Image
                    src={item.img}
                    fill
                    className="object-cover"
                    alt={item.title}
                  />
                </div>
                <div className="flex flex-col sm:p-6">
                  <span className="text-[24px] lg:text-[18px] sm:text-sm">
                    {item.suptitle}
                  </span>
                  <h3 className="mt-24 text-[64px] leading-[90%] lg:text-[48px] lg:mt-8 sm:text-[30px]">
                    {item.title}
                  </h3>
                  <p className="mt-[92px] lg:mt-8 sm:text-[18px]">
                    {item.text}
                  </p>
                  <LinkCircle
                    className="mt-auto"
                    link={item.link}
                    text={item.linkText}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
