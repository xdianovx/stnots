import { useRef, useState } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { HeadStuffSliderSlide } from "./HeadStuffSliderSlide";

export const HeadStuffSliderComponent = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const team = [
    {
      id: 1,
      name: "Гукалов\nАндрей Александрович",
      img: "/img/team/1.jpg",
      link: "/projects/projectname",
      position: 'Генеральный директор\nООО "Стройград"',
    },
    {
      id: 2,
      name: "Колосова\nОльга Ивановна",
      img: "/img/team/2.jpg",
      link: "/projects/projectname",
      position: 'Генеральный директор\nООО "Стройград"',
    },
    {
      id: 3,
      name: "Гукалов\nАндрей Александрович",

      img: "/img/team/1.jpg",
      link: "/projects/projectname",
      position: 'Генеральный директор\nООО "Стройград"',
    },
    {
      id: 4,
      name: "Колосова\nОльга Ивановна",
      img: "/img/team/2.jpg",
      link: "/projects/projectname",
      position: 'Генеральный директор\nООО "Стройград"',
    },
  ];
  return (
    <div className="mt-[145px]">
      <div className="container">
        <div className="my-16">
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
            spaceBetween={32}
            modules={[Pagination, Navigation]}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {},
              1520: {},
              1681: {
                slidesPerView: "auto",
              },
            }}
          >
            {team.map((item) => (
              <SwiperSlide
                className="max-w-[1100px] w-full xl:max-w-none"
                key={item.id}
              >
                <HeadStuffSliderSlide data={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
