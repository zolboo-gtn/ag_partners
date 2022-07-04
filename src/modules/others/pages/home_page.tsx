import type { NextPageWithLayout } from "next";

import { MainLayout } from "common/components";
import { Brands, ContactForm, Hero, Partners } from "modules/others/components";

const HomePage: NextPageWithLayout = () => {
  return (
    <main>
      <Hero />
      <div className="container mx-auto">
        <div className="my-10 flex flex-col gap-y-10 px-5">
          <Brands />
          <Partners />
          <ContactForm />
        </div>
      </div>
    </main>
  );
};

HomePage.getLayout = (page) => {
  return <MainLayout>{page} </MainLayout>;
};

export default HomePage;
