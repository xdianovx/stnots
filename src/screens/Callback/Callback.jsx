import { useState } from "react";
import { TextMd } from "../../components";
import { Input, SubmitButton } from "../../ui";
import cn from "classnames";

export const Callback = ({ className }) => {
  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    const { value, id } = e.target;
    if (id === "email") setEmail(value);
  };

  return (
    <section className={cn(className, "")}>
      <div className="container">
        <div className="grid grid-cols-2 items-start">
          <span className="text-gray">Новости для вас</span>
          <div className="w-full">
            <TextMd
              text={
                "Заполните форму, что-бы\nмы могли отправлять вам\nна почту самые актуальные\nновости компании"
              }
            />
            <form className="mt-[156px]">
              <div className="flex gap-4">
                <Input
                  label="Почта"
                  name="email"
                  handleChange={handleChange}
                  inputText={email}
                />
                <SubmitButton className="shrink-0" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
