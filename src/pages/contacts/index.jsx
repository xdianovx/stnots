import Head from "next/head";
import Link from "next/link";

// import { Fillial } from "@/screens/index";
import cn from "classnames";

import s from "./contacts.module.scss";
import { PinLink, Title } from "../../ui";
import { Fillial } from "../../screens";

export default function Contacts() {
  const fillials = [
    {
      id: 1,
      title: "Ростов-на-Дону",
      name: "Представительство\nи отдел продаж",
      address: "г. Ставрополь, ул. Чапаева, 4/1",
      phone: "8 (8652) 23 01 33",
    },
    {
      id: 2,
      title: "Краснодар",
      name: "Представительство\nи отдел продаж",
      address: "г. Краснодар, ул. 5-ая дорожная, 68к3",
      phone: "8 (861) 991-09-19",
    },
    {
      id: 3,
      title: "Новоросийск",
      name: "Представительство\nи отдел продаж",
      address: "г. Ставрополь, ул. Чапаева, 4/1",
      phone: "8 (8652) 23 01 33",
    },
    {
      id: 4,
      title: "Воронеж",
      name: "Представительство\nи отдел продаж",
      address: "г. Ставрополь, ул. Чапаева, 4/1",
      phone: "8 (8652) 23 01 33",
    },
  ];
  return (
    <>
      <Head>
        <title>Стройград | Контакты</title>
      </Head>

      <>
        <section
          className={cn(s.hero, "border-b", "border-gray")}
          data-scroll-section
        >
          <div className="container ">
            <div className="h-full flex items-end ">
              <div className="w-full">
                <p className="mb-16 leading-none lg:mb-8 md:text-sm md:mb-4 text-gray">
                  Главный офис
                </p>
                <div className="flex items-end sm:items-center ">
                  <Title tag="h1" className={cn(s.title)}>
                    Ставрополь
                  </Title>
                  <PinLink className="ml-auto mb-4 sm:mb-0" size="lg" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={s.cabinet} data-scroll-section>
          <div
            className={cn(
              "border-b border-gray lg:pb-4 lg:pt-12 md:pt-8 md:pb-8"
            )}
          >
            <div className="container">
              <div className="grid grid-cols-3  min-h-[290px] pt-[90px] lg:grid-cols-2 lg:pt-0 md:min-h-0">
                <p className="text-[40px] md:text-[28px] sm:text-sm">
                  Отдел продаж
                </p>
                <div className="flex flex-col">
                  <span className="mb-5 text-grayDark md:mb-2 md:text-sm">
                    Адрес:
                  </span>
                  <p className="text-xl sm:text-[16px]">
                    г. Ставрополь, ул. Чапаева, 4/1
                  </p>
                </div>

                <div className="flex flex-col lg:col-start-2 lg:mt-8">
                  <span className="mb-5 text-grayDark md:mb-2  md:text-sm">
                    Телефон:
                  </span>
                  <Link
                    href="tel:+78652239033"
                    className="text-xl mb-2 md:mb-1 sm:text-[16px] sm:leading-none sm:mb-4"
                  >
                    8 (8652)-23-90-33
                  </Link>
                  <Link
                    href="tel:+79189488592"
                    className="text-xl sm:text-[16px] sm:leading-none"
                  >
                    8 (918) 948-85-92
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className={cn(
              "border-b border-gray lg:pb-4 lg:pt-12 md:pt-8 md:pb-8"
            )}
          >
            <div className="container">
              <div className="grid grid-cols-3  min-h-[290px] pt-[90px] lg:grid-cols-2 lg:pt-0 md:min-h-0">
                <p className="text-[40px] md:text-[28px] sm:text-sm">
                  Представительство
                </p>
                <div className="flex flex-col">
                  <span className="mb-5 text-grayDark md:mb-2  md:text-sm">
                    Адрес:
                  </span>
                  <p className="text-xl sm:text-[16px] sm:leading-none">
                    г. Ставрополь, ул. Чапаева, 4/1
                  </p>
                </div>

                <div className="flex flex-col lg:col-start-2 lg:mt-8">
                  <span className="mb-5 text-grayDark md:mb-2  md:text-sm">
                    Телефон:
                  </span>
                  <Link
                    href="tel:+78652230133"
                    className="text-xl mb-2 md:mb-1 sm:text-[16px] sm:leading-none"
                  >
                    8 (8652) 23 01 33
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-[242px]" data-scroll-section>
          {fillials.map((item) => (
            <Fillial
              key={item.id}
              title={item.title}
              name={item.name}
              address={item.address}
              phone={item.phone}
              className="mb-[207px]"
            />
          ))}
        </section>

        {/* <CompanyGroup /> */}

        {/* <CooperationForm className="mt-[600px]" /> */}
      </>
    </>
  );
}
