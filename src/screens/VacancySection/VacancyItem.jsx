import cn from "classnames";
import { Variant, Variants, motion } from "framer-motion";
import { useRef, useState } from "react";

export const VacancyItem = ({ data, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openItem = () => {
    setIsOpen(!isOpen);
  };
  const variants = {
    open: {
      height: "auto",
    },
    close: {
      height: 0,
    },
  };
  return (
    <div>
      <div
        className={cn(
          "py-[70px] pl-[120px] pr-[140px] border-b border-gray group relative cursor-pointer z-2 ",
          className
        )}
        key={data.id}
        onClick={openItem}
      >
        <div
          className={cn(
            "absolute top-0 left-0 w-full h-0 bg-black group-hover:h-full transition-all duration-500 ease-[cubic-bezier(.77,.14,.11,.88)] z-[1]",
            {
              ["bg-black h-full"]: isOpen,
            }
          )}
        ></div>
        <div
          className={cn(
            "z-[2] relative group-hover:text-white flex items-center",
            {
              ["text-white"]: isOpen,
            }
          )}
        >
          <div className="flex flex-col">
            <h3 className="text-[56px] leading-[120%]">{data.title}</h3>
            <div className="flex text-gray leading-none mt-8">
              <p>{data.salary}</p>
              <p className="mx-4">/</p>
              <p>{data.experience}</p>
            </div>
          </div>

          <div
            className={cn(
              "w-4 h-4 rounded-full border border-black shrink-0 ml-auto group-hover:border-white group-hover:w-12 group-hover:h-12",
              {
                ["w-12 h-12 border-white"]: isOpen,
              }
            )}
          ></div>
        </div>
      </div>

      <motion.div
        variants={variants}
        initial="close"
        className="overflow-hidden"
        animate={isOpen ? "open" : "close"}
      >
        <div className="bg-black text-white pt-[70px] pb-[140px] pl-[120px] pr-[140px] h-full">
          {data?.content.map((item, idx) => (
            <div className="mb-[100px] last-of-type:mb-0" key={idx}>
              <p className="text-[40px]">{item.title}</p>
              <ul className="mt-8">
                {item.list.map((list, idx) => (
                  <li className="" key={idx}>
                    {list}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
