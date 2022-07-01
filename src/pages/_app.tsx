import "tailwindcss/tailwind.css";

import type { AppPropsWithLayout } from "next/app";
import type { FCC } from "react";

const MyApp: React.FC<AppPropsWithLayout> = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <AppWrapper>
      {getLayout(<Component {...pageProps} />, pageProps)}
    </AppWrapper>
  );
};

const AppWrapper: FCC = ({ children }) => {
  return <>{children}</>;
};

export default MyApp;
