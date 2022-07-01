import {
  BriefcaseIcon,
  CollectionIcon,
  UsersIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import type { FC } from "react";

import { classNames } from "common/utils";

interface INavbar {
  current: "shop" | "partners" | "club";
}
export const Navbar: FC<INavbar> = ({ current }) => {
  return (
    <nav className="w-screen overflow-x-auto bg-red-400">
      <ul className="flex h-10 min-w-max justify-center">
        {[
          {
            key: "shop",
            label: "AUTOGARAGE Shop",
            href: "/",
            icon: <BriefcaseIcon className="h-4 w-4" />,
          },
          {
            key: "partners",
            label: "AUTOGARAGE Partners",
            href: "/",
            icon: <CollectionIcon className="h-4 w-4" />,
          },
          {
            key: "club",
            label: "AUTOGARAGE Club",
            href: "/",
            icon: <UsersIcon className="h-4 w-4" />,
          },
        ].map(({ key, label, href, icon }) => (
          <li
            key={key}
            className="flex flex-shrink-0 items-center justify-center text-sm"
          >
            <Link href={href}>
              <a
                className={classNames(
                  "flex items-center gap-x-2 px-5",
                  current === key ? "text-blue-400" : "text-gray-400",
                  current !== key && "hover:text-white"
                )}
              >
                {icon}
                {label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
