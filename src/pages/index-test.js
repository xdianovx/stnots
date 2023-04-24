import React, { useRef, useContext } from "react";
import gsap from "gsap-trial/dist/gsap";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";

import { useIsomorphicLayoutEffect } from "../helpers/isomorphicEffect";
import SmootherContext from "../context/SmootherContext";
gsap.registerPlugin(ScrollTrigger);

function Home() {
  const { smootherReady } = useContext(SmootherContext);
  const main = useRef();
  const main2 = useRef(null);

  useIsomorphicLayoutEffect(() => {
    if (!smootherReady) return;

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".panel");
      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".horizontal-wrappe",
            pin: true,
            markers: true,
            start: "top top",
            end: "+=800%",
            scrub: true,
          },
        })
        .to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
        });
    }, main2);
    return () => ctx.revert();
  }, [smootherReady]);

  useIsomorphicLayoutEffect(() => {
    if (!smootherReady) return;
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".box-2",
            start: "center center",
          },
        })
        .from(".box-2", { autoAlpha: 0, xPercent: -100 });

      const box4Tl = gsap.timeline().to(".box-4", {
        rotate: 360,
      });
      //
      ScrollTrigger.create({
        animation: box4Tl,
        trigger: ".container-4",
        pin: true,
        scrub: true,
        start: "center center",
        end: "+=300%",
      });
    }, main);

    return () => ctx.revert();
  }, [smootherReady]);

  return (
    <>
      <main ref={main}>
        <div className="containerasd container-1">
          <div className="box box-1">1</div>
        </div>
        <div className="containerasd container-1">
          <div className="box box-2">2</div>
        </div>
        <div className="containerasd container-3">
          <div className="box box-3">3</div>
        </div>
        <div className="containerasd container-4">
          <div className="box box-4">4</div>
        </div>
      </main>

      <div ref={main2}>
        <div className="horizontal-wrappe h-full">
          <div className="flex h-screen w-[600%]">
            <section className="panel w-full red">ONE</section>
            <section className="panel w-full orange">TWO</section>
            <section className="panel w-full purple">THREE</section>
            <section className="panel w-full green">FOUR</section>
            <section className="panel w-full gray">FIVE</section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
