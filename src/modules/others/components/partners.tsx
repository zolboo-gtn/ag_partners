import Link from "next/link";
import type { FC } from "react";

import { classNames } from "common/utils";

export const Partners: FC = () => {
  const items = [
    {
      key: "partner1",
      value: "Partner 1",
    },
    {
      key: "partner2",
      value: "Partner 2",
    },
    {
      key: "partner3",
      value: "Partner 3",
    },
    {
      key: "partner4",
      value: "Partner 4",
    },
    {
      key: "partner5",
      value: "Partner 5",
    },
    {
      key: "partner6",
      value: "Partner 6",
    },
    {
      key: "partner7",
      value: "Partner 7",
    },
    {
      key: "partner8",
      value: "Partner 8",
    },
  ];

  return (
    <div
      id="partners"
      className="flex flex-col items-center gap-y-5 rounded-md bg-base-300 px-5 py-10"
    >
      <h2>{`Partners`}</h2>
      <ul
        className={classNames(
          "grid w-full grid-cols-2 gap-0.5",
          "md:grid-cols-3",
          "lg:grid-cols-4"
        )}
      >
        {items.map(({ key, value }) => {
          return (
            <li key={key}>
              <Link href="/">
                <a className="flex h-[100px] w-full items-center justify-center bg-base-200">
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
