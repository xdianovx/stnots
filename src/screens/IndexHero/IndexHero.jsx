import s from "./IndexHero.module.scss";

import { Title } from "../../ui/index";

export const IndexHero = () => {
  const title = "Мы строим\nсчастливое\nбудущее";
  return (
    <section className={s.section}>
      <div className="container">
        <div className={s.wrap}>
          <Title tag="h1">{title}</Title>
        </div>
      </div>
    </section>
  );
};
