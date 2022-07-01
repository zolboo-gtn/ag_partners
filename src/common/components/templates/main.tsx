import type { FCC } from "react";

import { Footer, Header, MobileHeader, Navbar } from "common/components";

export const MainLayout: FCC = ({ children }) => {
  return (
    <div className="flex min-h-screen w-screen flex-col">
      <header>
        <Navbar current="partners" />
        <Header />
        <MobileHeader />
      </header>
      {/* <div className="h-full w-full overflow-y-auto"></div> */}
      {children}
      <Footer />
    </div>
  );
};
