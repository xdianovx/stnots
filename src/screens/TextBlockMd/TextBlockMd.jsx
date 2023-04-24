import React from "react";
import { TextMd } from "../../components";

export const TextBlockMd = ({ className, text, title }) => {
  return (
    <section className={className}>
      <div className="container">
        <div className="h-screen flex flex-col justify-center">
          <span className="text-gray">{title}</span>
          <TextMd text={text} className="mt-20" />
        </div>
      </div>
    </section>
  );
};
