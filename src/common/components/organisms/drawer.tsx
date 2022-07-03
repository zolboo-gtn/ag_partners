import Link from "next/link";
import type { FCC } from "react";

import { scrollToById } from "common/utils";

export const id = "my-drawer";
export const Drawer: FCC = ({ children }) => {
  const items = [
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
  ];

  return (
    <div className="drawer">
      <input id={id} type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{children}</div>
      <div className="drawer-side">
        <label htmlFor={id} className="drawer-overlay" />
        <ul className="menu w-80 overflow-y-auto bg-base-100 p-4 text-base-content">
          {items.map(({ key, value, onClick }) => (
            <li>
              <label key={key} htmlFor={id} onClick={onClick}>
                {value}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
