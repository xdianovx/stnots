import Image from "next/image";
import Link from "next/link";

import { NewsUpsaleCard } from "./NewsUpsaleCard";
import ImageSrc2 from "./image2.jpg";
import ImageSrc from "./image.jpg";
import cn from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";

import { LinkCircle } from "../../ui/index";

export const NewsUpsale = ({ className }) => {
  const data = [
    {
      id: 1,
      title: "График работы отделов продаж в выходные и праздничные дни",
      date: "28.10",
      isWide: true,
      image: ImageSrc,
      isDark: true,
      link: "/news/test-news-card",
    },

    {
      id: 2,
      title: "График работы отделов продаж в выходные и праздничные дни",
      date: "28.10",
      isWide: false,
      image: "",
      isDark: true,
      link: "/news/test-news-card",
    },

    {
      id: 3,
      title: "График работы отделов продаж в выходные и праздничные дни",
      date: "28.10",
      isWide: false,
      image: "",

      isDark: false,
      link: "/news/test-news-card",
    },

    {
      id: 4,
      title: "График работы отделов продаж в выходные и праздничные дни",
      date: "28.10",
      isWide: false,
      image: ImageSrc2,
      isDark: true,
      link: "/news/test-news-card",
    },

    {
      id: 5,
      title: "График работы отделов продаж в выходные и праздничные дни",
      date: "28.10",
      isWide: true,
      image: ImageSrc,
      isDark: true,
      link: "/news/test-news-card",
    },

    {
      id: 6,
      title: "График работы отделов продаж в выходные и праздничные дни",
      date: "28.10",
      isWide: false,
      image: "",

      isDark: true,
      link: "/news/test-news-card",
    },

    {
      id: 7,
      title: "График работы отделов продаж в выходные и праздничные дни",
      date: "28.10",
      isWide: false,
      image: "",

      isDark: false,
      link: "/news/test-news-card",
    },

    {
      id: 8,
      title: "График работы отделов продаж в выходные и праздничные дни",
      date: "28.10",
      isWide: false,
      image: ImageSrc2,
      isDark: false,
      link: "/news/test-news-card",
    },
  ];
  return (
    <section data-scroll-section className={cn("", className)}>
      <div className="container">
        <div className="flex items-center">
          <h4 className="text-[56px] lg:text-[48px] sm:text-[32px]">
            Другие новости
          </h4>
          <LinkCircle link="/news" className="ml-auto" text="Все новости" />
        </div>
        <div className="mt-16 lg:mt-12 sm:mt-8">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              1001: {
                slidesPerView: "auto",
              },
            }}
          >
            {data.map((item) => (
              <SwiperSlide
                className={cn(
                  "h-[534px] lg:h-[480px] sm:h-[400px] w-[405px] lg:w-[380px] relative bg-black text-white transition-all hover:scale-[.96] cursor-pointer",
                  {
                    ["bg-gray text-black"]: item.isDark,
                    ["w-[830px] lg:w-[720px]"]: item.isWide,
                  }
                )}
                key={item.id}
              >
                {item.image && (
                  <Image
                    src={item.image}
                    className="block object-cover w-full h-full"
                    alt={item.title}
                  />
                )}

                <Link
                  href={item.link}
                  className="absolute top-0 left-0 w-full flex flex-col h-full text-white z-10 p-12 lg:p-8"
                >
                  <h3>{item.title}</h3>
                  <p className="mt-auto ml-auto text-[50px] leading-none">
                    28.10
                  </p>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
