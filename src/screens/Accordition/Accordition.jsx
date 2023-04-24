import { AccordionItem } from "./AccordionItem";
import ImageSrc from "./img.png";
import cn from "classnames";

import s from "./Accordition.module.scss";
import { TextMd } from "../../components";

export const Accordition = ({ className, text, title, subtitle }) => {
  const data = [
    {
      id: 1,
      image: ImageSrc,
      title: "Уровень",
      num: "01",
      link: "#level",
      data: {
        text: "Оформляйте полис ДМС от партнера «Альфа-страхование», и получайте своевременную и качественную медицинскую помощь с выгодой 30%. Сумму страхового взноса можно включить в ипотечный платеж и больше не беспокоиться о дополнительных тратах. ",
        features: [
          { id: 1, num: "01", text: "Надежные партнеры" },
          { id: 2, num: "02", text: "Широкий выбор услуг" },
          { id: 3, num: "03", text: "Стоимость\nвключена в ипотеку" },
          { id: 4, num: "04", text: "Широкая\nсеть клиник" },
        ],
      },
    },
    {
      id: 2,
      image: ImageSrc,

      title: "Оценка",
      num: "02",
      link: "#cost",
      data: {
        text: "Оформляйте полис ДМС от партнера «Альфа-страхование», и получайте своевременную и качественную медицинскую помощь с выгодой 30%. Сумму страхового взноса можно включить в ипотечный платеж и больше не беспокоиться о дополнительных тратах. ",
        features: [
          { id: 1, num: "01", text: "Надежные партнеры" },
          { id: 2, num: "02", text: "Широкий выбор услуг" },
          { id: 3, num: "03", text: "Стоимость\nвключена в ипотеку" },
          { id: 4, num: "04", text: "Широкая\nсеть клиник" },
        ],
      },
    },
    {
      id: 3,
      image: ImageSrc,
      title: "Страхование",
      num: "03",
      link: "#insurance",
      data: {
        text: "Оформляйте полис ДМС от партнера «Альфа-страхование», и получайте своевременную и качественную медицинскую помощь с выгодой 30%. Сумму страхового взноса можно включить в ипотечный платеж и больше не беспокоиться о дополнительных тратах. ",
        features: [
          { id: 1, num: "01", text: "Надежные партнеры" },
          { id: 2, num: "02", text: "Широкий выбор услуг" },
          { id: 3, num: "03", text: "Стоимость\nвключена в ипотеку" },
          { id: 4, num: "04", text: "Широкая\nсеть клиник" },
        ],
      },
    },
  ];

  return (
    <section className={cn(s.section, className)} data-scroll-section>
      <div className={s.top}>
        <div className="container">
          <div className={cn(s.wrap, "grid-2")}>
            <h2 className={cn("text-gray")}>{title}</h2>
            <div className="sm:mt-8">
              <TextMd text={text} />
              {subtitle && <p className="mt-20 sm:mt-10">{subtitle}</p>}
            </div>
          </div>
        </div>
      </div>

      <div className={s.bottom}>
        {data.map((item) => (
          <AccordionItem
            key={item.id}
            image={item.image}
            title={item.title}
            num={item.num}
            id={item.id}
            link={item.link}
            data={item.data}
          />
        ))}
      </div>
    </section>
  );
};
