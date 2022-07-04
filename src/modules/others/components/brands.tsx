import Link from "next/link";
import type { FC } from "react";

import { classNames } from "common/utils";

export const Brands: FC = () => {
  const items = [
    {
      key: "brand1",
      value: "Brand 1",
    },
    {
      key: "brand2",
      value: "Brand 2",
    },
    {
      key: "brand3",
      value: "Brand 3",
    },
    {
      key: "brand4",
      value: "Brand 4",
    },
    {
      key: "brand5",
      value: "Brand 5",
    },
  ];

  return (
    <div
      id="brands"
      className="flex flex-col items-center gap-y-5 rounded-md bg-base-300"
    >
      <ul
        className={classNames(
          "grid w-full grid-cols-2",
          "md:grid-cols-6",
          "lg:grid-cols-5"
        )}
      >
        {items.map(({ key, value }, index) => {
          return (
            <li
              key={key}
              className={classNames(
                index === 4 && "col-span-2",
                "md:col-span-2",
                index > 2 && "md:col-span-3",
                "lg:col-span-1"
              )}
            >
              <Link href="/">
                <a className="flex h-[100px] w-full items-center justify-center">
                  {value}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
