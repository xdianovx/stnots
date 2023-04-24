import Image from "next/image";
import Link from "next/link";
import React from "react";

export const HeadStuffSliderSlide = ({ data }) => {
  return (
    <Link href="#" className="group">
      <div className="relative h-[720px] transition-all ease-in-out duration-300 group-hover:scale-[.9]">
        <Image src={data.img} fill className="object-cover" alt={data.name} />
      </div>

      <div className="flex items-end mt-16 gap-14">
        <p className="text-[24px] leading-[130%]">{data.name}</p>
        <span className="leading-none mb-1">/</span>
        <p className="text-gray">{data.position}</p>
      </div>
    </Link>
  );
};
