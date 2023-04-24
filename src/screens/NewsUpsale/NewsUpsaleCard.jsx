import Image from "next/image";

import cn from "classnames";
import { SwiperSlide } from "swiper/react";

export const NewsUpsaleCard = ({ data }) => {
  return (
    <SwiperSlide
      className={cn("h-[534px] relative bg-black text-white", {
        ["bg-gray text-black"]: data.isDark,
        ["w-[405px]"]: !data.isWide,
      })}
    >
      {data.image && (
        <Image
          src={data.image}
          fill
          className="object-cover"
          alt={data.title}
        />
      )}

      <div className="absolute top-0 left-0 w-full h-full  text-white z-10 p-12">
        <h3>{data.title}</h3>
      </div>
    </SwiperSlide>
  );
};
