import Image from "next/image";
import React from "react";
import { LinkCircle } from "../../ui/index";

export const ProjectSlide = ({ data }) => {
  return (
    <div className="w-full">
      <Image
        className="w-full block object-cover h-[710px] xl:h-[480px] md:h-[400px] sm:w-full"
        src={data.img}
        alt={data.title}
      />

      <div className="flex items-center pt-5 pb-2 md:flex-col md:items-start">
        <h2 className="text-3xl leading-none">{data.title}</h2>
        <div className="flex mx-auto md:mx-0 md:mt-4">
          {data.params.map((item, idx) => (
            <div key={idx} className="flex md:gap-2 sm:flex-col">
              <p className="leading-none md:hidden">/</p>
              <p
                className="leading-none mx-7 md:mx-0 md:mr-4 sm:w-full"
                key={idx}
              >
                {item}
              </p>
            </div>
          ))}
        </div>

        <div className="ml-auto mr-5 w-8 h-8 flex justify-center ">
          <LinkCircle link={data.link} className="mx-auto" text={""} />
        </div>
      </div>
    </div>
  );
};
