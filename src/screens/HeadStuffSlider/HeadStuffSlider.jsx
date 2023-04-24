import { HeadStuffSliderComponent, TextMd } from "../../components";
import { LinkCircle } from "../../ui";
import cn from "classnames";

export const HeadStuffSlider = ({ className }) => {
  return (
    <section className={cn("", className)}>
      <div className="container">
        <span className="text-gray">Руководство</span>
        <div className="flex items-end mt-24">
          <TextMd
            className="max-w-[1100px]"
            text={
              "Благодаря большому опыту и мастерству руководящего состава все компании работают как слаженная команда профессионалов, ведомая единой целью — удовлетворение интересов любимого потребителя. "
            }
          />

          <LinkCircle className="ml-auto" link="/team" text="Команда" />
        </div>
      </div>

      <HeadStuffSliderComponent />
    </section>
  );
};
