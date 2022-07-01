import type { NextPageWithLayout } from "next";
import type { FC } from "react";

import { CustomInput, MainLayout } from "common/components";

const HomePage: NextPageWithLayout = () => {
  return (
    <div className="px-5">
      <Partners />
      <ContactForm />
    </div>
  );
};

HomePage.getLayout = (page) => {
  return <MainLayout>{page} </MainLayout>;
};

export default HomePage;

const Partners: FC = () => {
  return <div></div>;
};

const ContactForm: FC = () => {
  return (
    <form id="contact-form" className="flex w-full flex-col md:w-[600px]">
      <CustomInput label="Full name" placeholder="Full name" />
      <CustomInput label="Company name" placeholder="Company name" />
      <CustomInput label="Email" placeholder="example@email.com" type="email" />
    </form>
  );
};
