import Image from "next/image";
import Link from "next/link";

import { ProjectSlide } from "./ProjectSlide";
import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";
import img5 from "./img/5.jpg";
import img6 from "./img/6.jpg";
import img7 from "./img/7.jpg";
import cn from "classnames";
import { useRef, useState } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { SliderArrowNext, SliderArrowPrev } from "../../ui";

export const ProjectsSlider = ({ className }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Достояние",
      img: img1,
      link: "/projects/projectname",
      params: ["Ростов-на-Дону", "Построен в 2021 г.", "от 43,3 млн. рублей"],
    },
    {
      id: 2,
      title: "Достояние",
      img: img2,
      link: "/projects/projectname",
      params: ["Ростов-на-Дону", "Построен в 2021 г.", "от 43,3 млн. рублей"],
    },
    {
      id: 3,
      title: "Достояние",
      img: img3,
      link: "/projects/projectname",
      params: ["Ростов-на-Дону", "Построен в 2021 г.", "от 43,3 млн. рублей"],
    },
    {
      id: 4,
      title: "Достояние",
      img: img4,
      link: "/projects/projectname",
      params: ["Ростов-на-Дону", "Построен в 2021 г.", "от 43,3 млн. рублей"],
    },
    {
      id: 5,
      title: "Достояние",
      img: img5,
      link: "/projects/projectname",
      params: ["Ростов-на-Дону", "Построен в 2021 г.", "от 43,3 млн. рублей"],
    },
    {
      id: 6,
      title: "Достояние",
      img: img6,
      link: "/projects/projectname",
      params: ["Ростов-на-Дону", "Построен в 2021 г.", "от 43,3 млн. рублей"],
    },
    {
      id: 7,
      title: "Достояние",
      img: img7,
      link: "/projects/projectname",
      params: ["Ростов-на-Дону", "Построен в 2021 г.", "от 43,3 млн. рублей"],
    },
  ];

  return (
    <section className={cn(className)} data-scroll-section>
      <div className="container">
        <div className="flex items-end">
          <h2 className="text-[300px] leading-[245px] xl:text-[180px] xl:leading-[80%] md:text-[60px]">
            Наши
            <br />
            проекты
          </h2>

          <div className="flex gap-2 ml-auto mt-5 mb-2 xl:mt-3">
            <SliderArrowPrev refEl={navigationPrevRef} />
            <SliderArrowNext refEl={navigationNextRef} />
          </div>
        </div>
      </div>

      <div className="mt-[105px] xl:mt-[64px]">
        <hr className="border-grayLight" />
        <div className="container">
          <div className="my-16 xl:my-8 md:my-4">
            <Swiper
              className="w-full overflow-visible"
              pagination={{
                type: "fraction",
                el: ".swiper-paginatin",
                clickable: true,
                renderBullet: (index, className) => {
                  return (
                    '<span class="' + className + '">' + (index + 1) + "</span>"
                  );
                },
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
              }}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              onSwiper={(swiper) => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              speed={500}
              loop={true}
              modules={[Pagination, Navigation]}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 16,
                },
                1001: { slidesPerView: "auto", spaceBetween: 16 },
                1520: {
                  slidesPerView: "auto",
                  spaceBetween: 30,
                },
              }}
            >
              {projects.map((item) => (
                <SwiperSlide
                  className="max-w-[1260px] w-full xl:max-w-[960px] sm:max-w-none"
                  key={item.id}
                >
                  <ProjectSlide data={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <hr className="border-grayLight" />
    </section>
  );
};
