import type { NextPageWithLayout } from "next";

import { MainLayout } from "common/components";
import { ContactForm, Hero, Partners } from "modules/others/components";

const HomePage: NextPageWithLayout = () => {
  return (
    <main>
      <Hero />
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 px-5">
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
