import Head from "next/head";

import cn from "classnames";
import Marquee from "react-fast-marquee";

import s from "./news.module.scss";

import { Title } from "../../ui/index";
import { NewsCard } from "../../components";
import { Callback } from "../../screens";

export default function NewsesPage() {
  const title = "Новости\nкомпании";
  const years = ["2019", "2020", "2021", "2022", "2023"];
  const tags = [
    "жизнь в стройграде",
    "заселение",
    "жилые комплексы",
    "праздник",
    "жизнь в стройграде",
    "заселение",
    "жилые комплексы",
    "праздник",
    "жизнь в стройграде",
    "заселение",
    "жилые комплексы",
    "праздник",
  ];
  const newsPosts = [
    {
      id: 1,
      title: "График работы отделов продаж в выходные и праздничные дни",
      date: "22.10",
      image: "/img/news/1.png",
      link: "/news/news-slug-asd",
      dark: true,
    },
    {
      id: 2,
      title:
        "Стройград представила новую цифровую платформу для продажи квартир через агентства недвижимости",
      date: "22.10",
      image: "",
      link: "/news/news-slug-asd",
      dark: true,
    },
    {
      id: 3,
      link: "/news/news-slug-asd",

      title:
        "Стройград представила новую цифровую платформу для продажи квартир через агентства недвижимости",
      date: "22.10",
      image: "",
      dark: false,
    },
    {
      id: 4,
      link: "/news/news-slug-asd",

      title:
        "Стройград представила новую цифровую платформу для продажи квартир через агентства недвижимости",
      date: "22.10",
      image: "/img/news/2.jpg",
      dark: true,
    },
    {
      id: 5,
      link: "/news/news-slug-asd",

      title:
        "Стройград представила новую цифровую платформу для продажи квартир через агентства недвижимости",
      date: "22.10",
      image: "",
      dark: false,
    },
    {
      id: 6,
      link: "/news/news-slug-asd",

      title:
        "Стройград представила новую цифровую платформу для продажи квартир через агентства недвижимости",
      date: "22.10",
      image: "",
      dark: true,
    },
    {
      id: 7,
      link: "/news/news-slug-asd",

      title:
        "Стройград представила новую цифровую платформу для продажи квартир через агентства недвижимости",
      date: "22.10",
      image: "/img/news/3.jpg",
      dark: true,
    },
    {
      id: 8,
      link: "/news/news-slug-asd",

      title: "График работы отделов продаж в выходные и праздничные дни",
      date: "22.10",
      image: "",
      dark: true,
    },
    {
      id: 9,
      link: "/news/news-slug-asd",

      title:
        "Стройград представила новую цифровую платформу для продажи квартир через агентства недвижимости",
      date: "22.10",
      image: "",
      dark: false,
    },
    {
      id: 10,
      link: "/news/news-slug-asd",

      title:
        "Стройград представила новую цифровую платформу для продажи квартир через агентства недвижимости",
      date: "22.10",
      image: "/img/news/4.jpg",
      dark: true,
    },
    {
      id: 11,
      link: "/news/news-slug-asd",
      title: "График работы отделов продаж в выходные и праздничные дни",
      date: "22.10",
      image: "/img/news/5.jpg",
      dark: true,
    },
    {
      id: 12,
      link: "/news/news-slug-asd",

      title: "График работы отделов продаж в выходные и праздничные дни",
      date: "22.10",
      image: "",
      dark: true,
    },
    {
      id: 13,
      link: "/news/news-slug-asd",

      title: "График работы отделов продаж в выходные и праздничные дни",
      date: "22.10",
      image: "",
      dark: false,
    },
  ];
  return (
    <>
      <Head>
        <title>Стройград | Новости</title>
      </Head>
      <>
        <section className={s.hero} data-scroll-section>
          <div className="container">
            <Title tag="h1" className={s.hero__title}>
              {title}
            </Title>
          </div>
        </section>

        <section className="mt-[78px] xl:mt-16 lg:mt-8" data-scroll-section>
          <div>
            <div className="container">
              <div className="flex flex-col items-end sm:items-start">
                <p className="lg:text-sm">Выберите год:</p>
                <div className="flex gap-[22px] mt-[20px] text-gray font-light text-[28px] xl:text-[18px] xl:mt-3 xl:leading-none sm:text-sm sm:gap-3">
                  <div className="cursor-pointer duration-200 hover:text-black">
                    Все года
                  </div>
                  {years.map((item, idx) => (
                    <div
                      className="cursor-pointer duration-200 hover:text-black "
                      key={idx}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="mt-[78px] lg:mt-6">
              <div className="container">
                <p className="text-right lg:text-sm sm:text-left">
                  Выберите тему:
                </p>
              </div>
              <div className="flex gap-[22px] mt-[20px] xl:text-[18px] xl:mt-3 xl:gap-4">
                <Marquee loop={20} gradient={false}>
                  {tags.map((item, idx) => (
                    <div
                      className="text-3xl cursor-pointer mx-12 font-light text-gray duration-200 hover:text-black xl:text-[18px] xl:mx-4 xl:leading-none sm:text-sm sm:mx-2"
                      key={idx}
                    >
                      #{item}
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-[75px] " data-scroll-section>
          <div className="container">
            <p className="leading-[120%] text-[120px] xl:text-[96px] md:text-[86px] sm:text-[58px]">
              2022
            </p>
            <div
              className={cn(
                s.cards,
                "grid grid-cols-4 gap-5  mt-[37px] xl:mt-8 xl:gap-4 lg:grid-cols-3 md:grid-cols-2 md:mt-4 sm:grid-cols-1"
              )}
            >
              {newsPosts.map((item) => (
                <NewsCard key={item.id} data={item} className={s.card} />
              ))}
            </div>
          </div>
        </section>

        <section className="mt-[350px]" data-scroll-section>
          <div className="container">
            <p className="leading-[120%] text-[120px] xl:text-[96px] md:text-[86px] sm:text-[58px]">
              2021
            </p>
            <div
              className={cn(
                s.cards,
                "grid grid-cols-4 gap-5  mt-[37px] xl:mt-8 xl:gap-4 lg:grid-cols-3 md:grid-cols-2 md:mt-4 sm:grid-cols-1"
              )}
            >
              {newsPosts.map((item) => (
                <NewsCard key={item.id} data={item} className={s.card} />
              ))}
            </div>
          </div>
        </section>

        <Callback className="mt-[493px]" />
      </>
    </>
  );
}
