import Head from "next/head";
import Image from "next/image";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap/dist/gsap";

import s from "./about.module.scss";

// import { CreateSection } from "@/components/CreateSection/CreateSection";
// import { HeadStuff } from "@/components/HeadStuff/HeadStuff";

import { Title } from "../../ui";
import { TextLg } from "../../components";
import { HeadStuffSlider, NumSection } from "../../screens";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const pageTitle = "Компания\nCтройград";

  return (
    <>
      <Head>
        <title>Стройград | О компании</title>
      </Head>

      <>
        <section className={s.hero} data-scroll-section>
          <div className="container">
            <Title tag="h1" className={s.hero__title}>
              {pageTitle}
            </Title>
          </div>

          <div className={s.hero__image}>
            <Image src="/img/about/hero.jpg" fill alt={pageTitle} />
          </div>
        </section>

        <section className="mt-[142px]">
          <div className="container">
            <TextLg
              text={
                "Мы создаём сверхновое представление о комфорте и формируем во всех проектах мультиформатную среду, в центре которой — человек и его потребности."
              }
            />
          </div>
        </section>

        <NumSection className="mt-[142px]" />

        <HeadStuffSlider className="mt-[380px]" />

        {/* <CreateSection /> */}

        {/* <HeadStuff /> */}
      </>
    </>
  );
}
