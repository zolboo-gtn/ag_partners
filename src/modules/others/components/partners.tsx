import type { FC } from "react";

import { classNames } from "common/utils";

export const Partners: FC = () => {
  const items = [
    "Partner",
    "Partner",
    "Partner",
    "Partner",
    "Partner",
    "Partner",
    "Partner",
    "Partner",
  ];

  return (
    <div id="our-partners" className="flex flex-col items-center">
      <h2>{`Our Partners`}</h2>
      <div
        className={classNames(
          "grid w-full grid-cols-2 gap-0.5",
          "md:grid-cols-3",
          "lg:grid-cols-4"
        )}
      >
        {items.map((partner) => {
          return (
            <div className="flex h-[100px] w-full items-center justify-center  bg-gray-200">
              {partner}
            </div>
          );
        })}
      </div>
    </div>
  );
};
