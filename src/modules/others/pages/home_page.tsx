import type { NextPageWithLayout } from "next";

import { MainLayout } from "common/components";
import { ContactForm, Hero, Partners } from "modules/others/components";

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <Hero />
      <div className="container mx-auto px-5">
        <Partners />
        <ContactForm />
      </div>
    </>
  );
};

HomePage.getLayout = (page) => {
  return <MainLayout>{page} </MainLayout>;
};

export default HomePage;
