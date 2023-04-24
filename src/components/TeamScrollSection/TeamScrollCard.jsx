import Image from "next/image";

import cn from "classnames";

export const TeamScrollCard = ({ data, className }) => {
  return (
    <div
      className={cn(
        "flex flex-col ml-auto min-w-[560px] odd:mr-auto odd:ml-0 md:min-w-0 md:max-w-1/2 sm:w-1/2",
        className
      )}
    >
      <div className="relative w-auto h-[670px] md:h-[520px] sm:h-[320px]">
        <Image src={data.image} alt={data.name} fill className="object-cover" />
      </div>

      <div className="flex items-end mt-6 sm:flex-col sm:items-start">
        <h3 className="text-[24px] sm:text-[18px]">{data.name}</h3>
        <div className="text-gray mx-4 mb-1 sm:hidden">/</div>
        <p className="text-gray mb-1">{data.position}</p>
      </div>
    </div>
  );
};
