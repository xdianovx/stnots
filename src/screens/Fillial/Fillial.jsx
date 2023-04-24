import Link from "next/link";

import cn from "classnames";
import { PinLink } from "../../ui";

export const Fillial = ({ title, className, name, address, phone }) => {
  return (
    <div className={cn(className)}>
      <div className={cn("border-b", "border-gray", "pb-[73px] md:pb-[32px]")}>
        <div className="container">
          <div className="grid grid-2 lg:grid-cols-1">
            <div className="col-start-2 lg:col-start-1">
              <span>Филлиал</span>
              <div className="flex items-center">
                <h2 className="text-[100px] leading-[120%] md:text-[64px] sm:text-[32px]">
                  {title}
                </h2>
                <PinLink className="ml-auto" size="lg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-gray">
        <div className="container">
          <div className="grid py-[60px] grid-cols-[1fr_486px_486px] lg:grid-cols-2">
            <p className="text-[40px] leading-tight md:text-[28px] sm:text-[16px]">
              {name}
            </p>
            <div className="sm:mb-12">
              <p className="text-grayDark mb-4 md:text-sm sm:mb-2">Aдрес:</p>
              <p className="text-xl sm:text-[16px] sm:leading-none">
                {address}
              </p>
            </div>
            <div className="lg:col-start-2">
              <p className="text-grayDark  md:text-sm mb-4 sm:mb-2">Телефон:</p>
              <Link
                href={`tel:${phone}`}
                className="text-xl sm:text-[16px] sm:leading-none"
              >
                {phone}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
