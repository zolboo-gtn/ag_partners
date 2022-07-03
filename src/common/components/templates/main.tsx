import type { FCC } from "react";

import {
  Drawer,
  Footer,
  Header,
  MobileHeader,
  Navbar,
} from "common/components";

export const MainLayout: FCC = ({ children }) => {
  return (
    <Drawer>
      <div className="flex min-h-screen flex-col">
        <header>
          <Navbar current="partners" />
          <Header />
          <MobileHeader />
        </header>
        {children}
        <Footer />
      </div>
    </Drawer>
  );
};
