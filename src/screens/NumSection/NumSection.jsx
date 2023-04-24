import { NumItem } from "./NumItem";
import ImgSrc from "./img.jpg";
import cn from "classnames";

import s from "./NumSection.module.scss";

export const NumSection = ({ className }) => {
  const data = [
    {
      id: 1,
      title: "Опыт компании",
      value: "10 лет",
      num: "01",
      image: ImgSrc,
    },
    {
      id: 2,
      title: "Вовремя сданых проектов",
      value: "16",
      num: "03",
      image: ImgSrc,
    },
    {
      id: 3,
      title: "Построенного жилья",
      value: "20203",
      num: "03",
      image: ImgSrc,
    },
    {
      id: 4,
      title: "Заселённых квартир",
      value: "4512",
      num: "04",
      image: ImgSrc,
    },
  ];

  return (
    <section className={cn(s.section, className)} data-scroll-section>
      <div className={s.wrap}>
        {data.map((item) => (
          <NumItem key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
};
