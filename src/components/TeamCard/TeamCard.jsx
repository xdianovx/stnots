import Image from "next/image";

import cn from "classnames";

export const TeamCard = ({ data, className }) => {
  return (
    <div className={cn(className, "")}>
      <div className="relative h-[800px] duration-300 ease-in-out transition-all overflow-hidden hover:rounded-full xl:h-[580px] md:h-[480px] sm:h-[500px] sm:w-full xs:h-[320px]">
        <Image
          fill
          src={data.image}
          alt={""}
          className="block h-full object-cover transition-all sm:h-auto sm:w-full"
        />
      </div>

      <div className="grid grid-cols-2 items-end mt-14 xl:mt-10 md:mt-6">
        <div className="text-[56px] leading-[110%] max-w-[445px] mr-auto xl:text-[42px] md:text-[28px]">
          {data.name}
        </div>
        <div className="flex ml-6">
          <div className="text-gray mx-4 sm:hidden">/</div>
          <div className="text-md text-gray shrink-0 md:text-sm sm:hidden">
            {data.position}
          </div>
        </div>
      </div>
    </div>
  );
};
