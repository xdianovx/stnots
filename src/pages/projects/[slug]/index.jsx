import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import HeroSrc from "./hero.png";
import ImgSrc1 from "./img1.png";
import ImgSrc2 from "./img2.png";
import ImgSrc3 from "./img3.png";
import ImgSrc4 from "./img4.png";
import ImgSrc5 from "./img5.png";
import { PinLink, Title } from "../../../ui";

import { TextMd } from "../../../components";
import { NextProject } from "../../../screens";

export default function ProjectPage() {
  const features = [
    {
      id: 1,
      num: "01",
      title: "Окружение",
      text: "Паноравные виды\nна красивое озеро ",
    },
    {
      id: 2,
      num: "02",
      title: "Арихтектура",
      text: "Авторская архитектура\nот известного бюро",
    },
    {
      id: 3,
      num: "03",
      title: "Паркинг",
      text: "Авторская архитектура\nот известного бюро",
    },
  ];
  return (
    <>
      <Head>
        <title>Название проекта</title>
      </Head>
      <>
        <section className="mt-[380px] lg:mt-[240px] md:mt-[180px] sm:mt-[120px]">
          <div className="container">
            <div className="flex flex-col gap-10 sm:gap-6">
              <p className="text-[28px] leading-none lg:text-lg sm:text-sm">
                Жилой
                <br className="sm:hidden" />
                <span className="sm:inline hidden"> </span>
                комплекс
              </p>
              <Title tag="h1">Семейный квартал</Title>
            </div>
          </div>
        </section>

        <section className="mt-[90px] w-full sm:mt-10 overflow-hidden">
          <Image src={HeroSrc} data-speed=".3" alt={""} />
        </section>

        <section className="mt-[75px] border-b border-grayBorder pb-16 lg:mt-10 lg:pb-9 sm:border-none">
          <div className="container">
            <div className="flex justify-between sm:flex-col sm:gap-8">
              {features.map((item) => (
                <div className="flex gap-4 sm:gap-5" key={item.id}>
                  <span className="text-[40px] lg:text-[28px] md:text-xl sm:text-[20px]">
                    /
                  </span>
                  <div className="text-[120px] leading-none lg:text-[64px] md:text-[48px] sm:text-[70px]">
                    {item.num}
                  </div>
                  <div className="flex flex-col gap-5 mt-2 lg:mt-0 lg:gap-2">
                    <h3 className="text-[32px] leading-none lg:text-[24px] md:text-xl sm:text-[20px]">
                      {item.title}
                    </h3>
                    <p className="lg:text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-24 md:mt-16">
          <div className="container">
            <div className="grid-2">
              <div></div>
              <div className="flex flex-col">
                <span className="text-gray">Сайт:</span>
                <Link
                  href="https://xn----8sbagoae1aaffpfq3cg1a0n.xn--p1ai/"
                  target="_blank"
                  className="underline underline-offset-2 text-2xl lg:text-xl md:text-base"
                >
                  жк-семейныйквартал.рф
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-60 lg:mt-48 md:mt-24 sm:mt-40">
          <div className="container">
            <div className="grid-2">
              <p className="text-xl lg:text-base">
                Новый массивный жилой <br /> комплекс в уютном месте <br /> в г.
                Ставрополь
              </p>

              <div className="flex flex-col sm:mt-20">
                <TextMd
                  text={
                    "«Семейный квартал» — это экологичный проект рядом с Дубковским и Подушкинским лесами. Он сочетает близость к природным комплексам, престижный статус западного направления и возможность удобно добраться до столицы. Уютная малоэтажная застройка, евроквартиры с чистовой отделкой, закрытый двор без машин — квартал станет по-настоящему «своей» территорией, куда хочется возвращаться."
                  }
                />

                <div className="grid grid-cols-2 mt-64 gap-[140px] lg:mt-40 lg:gap-20 md:mt-24 md:gap-16 sm:gap-8">
                  <div className="flex flex-col gap-3 lg:gap-1">
                    <span className="text-xl lg:text-base sm:text-gray sm:text-sm">
                      Ближайшее метро
                    </span>
                    <p className="text-[48px] leading-[120%] lg:text-2xl sm:text-xl">
                      Ставропольская
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 lg:gap-1">
                    <span className="text-xl lg:text-base sm:text-gray sm:text-sm ">
                      Готово:
                    </span>
                    <p className="text-[48px] leading-[120%] lg:text-2xl sm:text-xl">
                      5 домов
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 lg:gap-1">
                    <span className="text-xl lg:text-base sm:text-gray sm:text-sm">
                      Построен:
                    </span>
                    <p className="text-[48px] leading-[120%] lg:text-2xl sm:text-xl">
                      в 2022 году
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 lg:gap-1">
                    <span className="text-xl lg:text-base sm:text-gray sm:text-sm">
                      Цена:
                    </span>
                    <p className="text-[48px] leading-[120%] lg:text-2xl sm:text-xl">
                      от 43,3 млн. руб.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-96 lg:mt-60">
          <div className="container">
            <div className="grid-2 items-end">
              <div>
                <Title tag="h2">Фотографии объекта</Title>
              </div>
              <div className="flex items-end">
                <p>(25+ фотографий)</p>
                <PinLink className="ml-auto fill-gray" />
              </div>
            </div>

            <div className="grid-2 gap-10 h-[800px] mt-10 lg:h-[600px] md:h-[480px] md:gap-4 sm:h-auto">
              <div className="sm:h-[420px] relative">
                <Image src={ImgSrc1} className="object-cover " fill alt={""} />
              </div>
              <div className="sm:h-[420px] relative">
                <Image src={ImgSrc2} className="object-cover  " fill alt={""} />
              </div>
            </div>
            <p className="max-w-[380px] mt-10 md:mt-4">
              Уютная малоэтажная застройка, евроквартиры с чистовой отделкой,
              закрытый двор без машин — квартал станет по-настоящему «своей»
              территорией, куда хочется возвращаться.
            </p>

            <div>
              <Image src={ImgSrc3} alt={""} className="mt-60 md:mt-24" />
              <div className="grid-2 mt-10">
                <div></div>
                <p className="max-w-sm">
                  Уютная малоэтажная застройка, евроквартиры с чистовой
                  отделкой, закрытый двор без машин — квартал станет
                  по-настоящему «своей» территорией, куда хочется возвращаться.
                </p>
              </div>
            </div>

            <div className="grid-2 mt-96 md:mt-24">
              <div></div>
              <Image src={ImgSrc2} />
            </div>

            <div className="grid-2 mt-96 md:mt-24 md:gap-6">
              <div className="max-w-sm flex flex-col gap-6">
                <Image src={ImgSrc4} />
                <p>
                  Уютная малоэтажная застройка, евроквартиры с чистовой
                  отделкой, закрытый двор без машин — квартал станет
                  по-настоящему «своей» территорией, куда хочется возвращаться.
                </p>
              </div>

              <Image src={ImgSrc5} />
            </div>

            <Image src={ImgSrc3} alt={""} className="mt-60 md:mt-24" />
          </div>
        </section>

        <section className="mt-96">
          <div className="container">
            <div className="grid-2">
              <p className="text-gray">Сотрудничество</p>
              <div>
                <h2 className="text-[56px] leading-none">
                  Поможем подобрать <br /> лучшее решение
                </h2>
                <p className="mt-12">
                  Мы за прочные <br /> и взаимовыгодные отоношения
                </p>

                <form>
                  <input type="text" />
                  <input type="text" />
                  <input type="text" />
                </form>
              </div>
            </div>
          </div>
        </section>
        <NextProject className="mt-96 sm:mt-24" />
      </>
    </>
  );
}
