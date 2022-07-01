import { MenuIcon } from "@heroicons/react/outline";
import Link from "next/link";
import type { FC } from "react";

import { classNames, scrollToById } from "common/utils";

export const Header: FC = () => {
  return (
    <div
      className={classNames(
        "hidden h-10 items-center justify-between bg-yellow-400 p-5",
        "md:flex"
      )}
    >
      <Logo />
      <Menu />
    </div>
  );
};

export const MobileHeader: FC = () => {
  return (
    <div
      className={classNames(
        "flex h-10 items-center bg-yellow-400 p-5",
        "md:hidden"
      )}
    >
      <div className="flex w-[calc(50%-60px)] items-center">
        <button>
          <MenuIcon className="h-5 w-5" />
        </button>
      </div>
      <Logo />
    </div>
  );
};

const Logo: FC = () => {
  return (
    <div className="flex w-[120px] items-center justify-center bg-red-400">{`AUTOGARAGE`}</div>
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
