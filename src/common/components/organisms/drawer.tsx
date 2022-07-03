import type { FCC } from "react";

export const id = "my-drawer";
export const Drawer: FCC = ({ children }) => {
  return (
    <div className="drawer">
      <input id={id} type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {children}
        {/* <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
          Open drawer
        </label> */}
      </div>
      <div className="drawer-side">
        <label htmlFor={id} className="drawer-overlay"></label>
        <ul className="menu w-80 overflow-y-auto bg-base-100 p-4 text-base-content">
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
