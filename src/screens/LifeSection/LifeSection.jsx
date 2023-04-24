import React, { useContext, useLayoutEffect, useRef } from "react";
import gsap from "gsap-trial/dist/gsap";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import SmootherContext from "../../context/SmootherContext";
import { TextMd } from "../../components";
import Img1 from "./1.jpg";
import Img2 from "./2.jpg";
import Img3 from "./3.jpg";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export const LifeSection = () => {
  const { smootherReady } = useContext(SmootherContext);
  const main = useRef();
  const wrapper = useRef();

  useLayoutEffect(() => {
    if (!smootherReady) return;

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".panels");

      gsap
        .timeline({
          scrollTrigger: {
            // trigger: wrapper.current,
            trigger: ".horizontal-wrappe",
            pin: true,
            start: "top",
            end: "+=300%",
            scrub: 1,
          },
        })
        .to(sections, {
          xPercent: -100 * (sections.length - 1),
        });
    });
    return () => ctx.revert();
  }, [smootherReady]);

  return (
    <div ref={main} className="mt-[200px]">
      <div className="container">
        <div className="horizontal-wrappe h-full ">
          <div className="flex h-screen w-[600%]">
            <section className="w-full  flex flex-col justify-center">
              <p className="text-gray"> Жизнь в Стройград</p>
              <TextMd
                className="mt-20"
                text={
                  "Мы не просто строим дома, мы\nсоздаем место для дружбы,\nлюбви и жизни!"
                }
              />

              <div className="mt-[290px] flex justify-between">
                <p>2023</p>
                <p>скролл</p>
              </div>
            </section>
            <section className="panels w-full ">
              <Image
                src={Img1}
                width={950}
                alt=""
                className="rotate-12 block absolute -right-20 -top-0"
              />
            </section>
            <section className="panels w-full ">
              <Image
                src={Img2}
                width={440}
                alt=""
                className="-rotate-[11deg] block absolute right-0 bottom-[120px]"
              />
            </section>
            <section className="panels w-full ">
              <Image
                src={Img2}
                width={240}
                alt=""
                className="-rotate-[11deg] block absolute right-0 top-[120px]"
              />
            </section>
            <section className="panels w-full ">
              <Image
                src={Img1}
                width={1040}
                alt=""
                className="rotate-[6deg] block absolute -right-20 -top-0"
              />
            </section>
            <section className="panels w-full ">
              <Image
                src={Img2}
                width={440}
                alt=""
                className="-rotate-[11deg] block absolute right-0 bottom-[120px]"
              />
            </section>
            <section className="panels w-full">
              <Image
                src={Img2}
                width={240}
                alt=""
                className="rotate-[11deg] block absolute right-0 top-[120px]"
              />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
