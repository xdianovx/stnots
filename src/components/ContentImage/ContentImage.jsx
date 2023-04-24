import Image from "next/image";

import cn from "classnames";
import { useLayoutEffect, useRef } from "react";

export const ContentImage = ({ className, image, label }) => {
  const ref = useRef(null);
  // useLayoutEffect(() => {
  //   gsap.to(ref.current, {
  //     duration: 1.5,
  //     y: 100 * scrollProgress,
  //   });
  // }, [ref]);
  return (
    <div className={cn("w-full", className)}>
      <div className="relative h-[680px] lg:h-[480px] overflow-hidden">
        <Image
          src={image}
          data-speed=".3"
          alt={label}
          fill
          className="object-cover"
        />
      </div>
      {label && <p className="mt-8 leading-[120%] md:mt-4">{label}</p>}
    </div>
  );
};
