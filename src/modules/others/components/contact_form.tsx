import { MailIcon, PhoneIcon } from "@heroicons/react/outline";
import { FC, useState } from "react";

import { CustomInput, CustomTextArea } from "common/components";
import { classNames } from "common/utils";

export const ContactForm: FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div
      id="contact-form"
      className={classNames(
        "rounded-md bg-base-300 px-5 py-10",
        "md:grid md:grid-cols-3 md:gap-6"
      )}
    >
      {/* contact information */}
      <div className="md:col-span-1">
        <h3>{`Contact information`}</h3>
        <p>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</p>
        <div className="flex gap-x-2.5">
          <PhoneIcon className="h-6 w-6" />
          <p>{`+976-99887766`}</p>
        </div>
        <div className="flex items-center gap-x-2.5">
          <MailIcon className="h-6 w-6" />
          <p>{`test@email.com`}</p>
        </div>
      </div>
      {/* Contact form */}
      <div className={classNames("md:col-span-2")}>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            // mock loading
            setIsLoading(true);
            setTimeout(() => setIsLoading(false), 2000);
          }}
        >
          <div>
            <div className="grid grid-cols-2 gap-6">
              <CustomInput
                className="col-span-2 sm:col-span-1"
                label="Full name"
                placeholder="Full name"
              />
              <CustomInput
                className="col-span-2 sm:col-span-1"
                label="Company name"
                placeholder="Company name"
              />
              <CustomInput
                className="col-span-2 sm:col-span-1"
                label="Email"
                placeholder="example@email.com"
                type="email"
              />
              <CustomInput
                className="col-span-2 sm:col-span-1"
                label="Phone"
                placeholder="99887766"
                type="tel"
              />
              <CustomTextArea
                className="col-span-2"
                label="Message"
                placeholder="Message"
              />
            </div>
            <div className="py-5 text-right">
              <button
                className={classNames("btn", isLoading && "loading")}
              >{`Submit`}</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
