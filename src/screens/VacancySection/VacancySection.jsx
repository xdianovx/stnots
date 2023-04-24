import Link from "next/link";

import { VacancyItem } from "./VacancyItem";
import cn from "classnames";

export const VacancySection = ({ className, data }) => {
  return (
    <section className={cn("", className)} data-scroll-section>
      <div className="container">
        <div className="flex items-end">
          <h2 className="text-[56px] leading-[120%]">
            Актуальные
            <br /> вакансии на сегодня
          </h2>

          <div className="ml-auto">
            <Link href="/">Ростов-на-Дону</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray mt-20">
        <div className="flex">
          <div className="border-r border-gray pt-[72px] pl-[150px] max-w-[680px] w-full">
            (16+ свободных вакансий )
          </div>
          <div className="flex flex-col grow">
            {data.map((item) => (
              <VacancyItem data={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
