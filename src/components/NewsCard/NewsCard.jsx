import Image from "next/image";
import Link from "next/link";

import cn from "classnames";

import s from "./NewsCard.module.scss";

export const NewsCard = ({ data, className }) => {
  return (
    <Link
      href={data.link}
      className={cn(
        s.card,
        className,
        "h-[534px] transition-all hover:scale-[0.96] lg:h-[480px] sm:h-[410px]"
      )}
    >
      <div
        className={cn("relative h-full", {
          ["text-white "]: data.dark,
          ["text-black"]: !data.dark,
        })}
      >
        <div
          className={cn("h-full left-0 top-0 ", {
            ["bg-black "]: data.dark,
            ["bg-grayLight text-white"]: !data.dark,
          })}
        >
          {data.image && (
            <Image
              src={data.image}
              fill
              alt={data.title}
              className="block h-full object-cover"
            />
          )}
        </div>
        <div className="absolute z-10 top-0 h-full w-full flex flex-col py-[48px] px-[48px] sm:p-6">
          <h2 className="sm:text-sm">{data.title}</h2>
          <p className="mt-auto ml-auto text-[56px] sm:leading-none">
            {data.date}
          </p>
        </div>
      </div>
    </Link>
  );
};
