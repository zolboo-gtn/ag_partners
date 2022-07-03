import type { AppPropsWithLayout } from "next/app";

import { AppWrapper } from "modules/app/components";

const AGPartnersApp: React.FC<AppPropsWithLayout> = ({
  Component,
  pageProps,
}) => {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <AppWrapper>
      {getLayout(<Component {...pageProps} />, pageProps)}
    </AppWrapper>
  );
};

export default AGPartnersApp;
