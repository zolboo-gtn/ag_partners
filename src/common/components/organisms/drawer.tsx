import Link from "next/link";
import type { FCC } from "react";

export const id = "my-drawer";
export const Drawer: FCC = ({ children }) => {
  return (
    <div className="drawer">
      <input id={id} type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{children}</div>
      <div className="drawer-side">
        <label htmlFor={id} className="drawer-overlay" />
        <ul className="menu w-80 overflow-y-auto bg-base-100 p-4 text-base-content">
          <li>
            <Link href="/">
              <a>Sidebar Item 1</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Sidebar Item 2</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
