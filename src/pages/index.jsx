import {
  Accordition,
  IndexHero,
  LifeSection,
  NumSection,
  OffersScreen,
  ProjectsSlider,
  ScrollImage,
  TextBlockMd,
} from "../screens";
import { TextBlock } from "../screens/TextBlock/TextBlock";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <IndexHero />
      <ScrollImage />
      <TextBlock
        title={`Мы стремимся стать одним \nиз крупнейших строительно-инвестиционных холдингов федерального и международного уровня.`}
        text={`Все это время «Стройград» стремительно развивался, выходил на новые рынки, наращивал собственную производственную базу, осваивал новые направления бизнеса.`}
        className="mt-[200px] lg:mt-[160px] md:mt-[120px] sm:mt-[64px]"
      />
      <ProjectsSlider className="mt-[360px] xl:mt-[320px] lg:mt-[260px] sm:mt-24 md:mt-[120px] sm:mt-[64px]" />
      <Accordition
        className="mt-[320px] sm:mt-12"
        title={"Сервисы для\nсчастливой жизни"}
        text="Мы стремимся стать одним из крупнейших строительно-инвестиционных холдингов федерального уровня."
        subtitle={
          "Все это время «Стройград» стремительно\nразвивался, выходил на новые рынки."
        }
      />
      <TextBlockMd
        text={
          "Мы создаем все условия, чтобы наши клиенты получали\nлучшие предложения на рынке. Вам остается выбрать\nквартиру и подготовить документы."
        }
        title="Комплексные решения"
        className=""
      />

      <OffersScreen className="" />
      <TextBlock
        title="Мы стремимся стать одним из крупнейших строительно-инвестиционных холдингов федерального и международного уровня."
        text="Все это время «Стройград» стремительно развивался, выходил на новые рынки, наращивал собственную производственную базу, осваивал новые направления бизнеса."
        className="mt-[200px] lg:mt-[160px] md:mt-[120px] sm:mt-20"
      />
      <NumSection className="mt-[228px] md:mt-[160px]" />
      <LifeSection />
    </>
  );
}
