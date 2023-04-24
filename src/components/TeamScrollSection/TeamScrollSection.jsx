import Image from "next/image";

import { TeamScrollCard } from "./TeamScrollCard";
import cn from "classnames";
import { useContext, useLayoutEffect, useRef } from "react";
import SmootherContext from "../../context/SmootherContext";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import { gsap } from "gsap/dist/gsap";
import { useIsomorphicLayoutEffect } from "../../helpers/isomorphicEffect";

gsap.registerPlugin(ScrollTrigger);

export const TeamScrollSection = ({ data, className }) => {
  const main = useRef(null);
  const { smootherReady } = useContext(SmootherContext);

  useLayoutEffect(() => {}, []);
  return (
    <section className={cn("", className)}>
      <div className="container h-full md:h-auto">
        <div className="flex items-end  pt-[270px] md:pt-[120px] sm:flex-col sm:items-start">
          <h2 className="text-[300px] leading-none xl:text-[200px] sm:text-[60px] ">
            Команда
          </h2>
          <p className="ml-24 leading-none mb-[50px] md:mb-0 md:ml-0 sm:mr-auto sm:text-gray sm:text-sm">
            (32 человека)
          </p>
        </div>
      </div>

      <div className="container">
        <div className="flex flex-col gap-20 md:mt-20" ref={main}>
          {data.map((item) => (
            <TeamScrollCard data={item} key={item.id} className="cardteam" />
          ))}
        </div>
      </div>
    </section>
  );
};
