import { MenuIcon } from "@heroicons/react/outline";
import type { FC } from "react";

import { drawerId } from "common/components";
import { classNames, scrollToById } from "common/utils";
import Link from "next/link";

export const Header: FC = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <div
          className={classNames(
            "hidden h-10 items-center justify-between p-5",
            "md:flex"
          )}
        >
          <Logo />
          <Menu />
        </div>
      </div>
    </div>
  );
};

export const MobileHeader: FC = () => {
  return (
    <div className={classNames("flex items-center bg-white", "md:hidden")}>
      <div className="flex w-[calc(50%-60px)] items-center">
        <label htmlFor={drawerId} className="btn btn-ghost btn-square">
          <MenuIcon className="h-5 w-5" />
        </label>
      </div>
      <Logo />
    </div>
  );
};

const Logo: FC = () => {
  return (
    <Link href="/">
      <a className="flex w-[120px] items-center justify-center">
        {`AUTOGARAGE`}
      </a>
    </Link>
  );
};

const Menu: FC = () => {
  return (
    <ul className="flex gap-x-5">
      {[
        {
          key: "contactus",
          value: "Contact us",
          onClick: () => scrollToById("contact-form"),
        },
        {
          key: "partners",
          value: "Our partners",
          onClick: () => scrollToById("our-partners"),
        },
      ].map(({ key, value, onClick }) => (
        <li key={key}>
          <button onClick={onClick}>{value}</button>
        </li>
      ))}
    </ul>
  );
};
