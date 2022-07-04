import { MenuIcon } from "@heroicons/react/outline";
import type { FC } from "react";

import { drawerId } from "common/components";
import { classNames, scrollToById } from "common/utils";
import Link from "next/link";

export const Header: FC = () => {
  return (
    <div className="bg-base-300">
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
    <div className={classNames("flex items-center bg-base-300", "md:hidden")}>
      <div className="flex w-[calc(50%-60px)] items-center">
        <label htmlFor={drawerId} className="btn btn-square btn-ghost">
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
      <a className="flex w-[120px] items-center justify-center">{`GARAGE`}</a>
    </Link>
  );
};

const Menu: FC = () => {
  const items = [
    {
      key: "contactus",
      value: "Contact us",
      onClick: () => scrollToById("contact-form"),
    },
    {
      key: "brands",
      value: "Brands",
      onClick: () => scrollToById("brands"),
    },
    {
      key: "partners",
      value: "Partners",
      onClick: () => scrollToById("partners"),
    },
  ];

  return (
    <ul className="flex gap-x-5">
      {items.map(({ key, value, onClick }) => (
        <li key={key}>
          <button onClick={onClick}>{value}</button>
        </li>
      ))}
    </ul>
  );
};
