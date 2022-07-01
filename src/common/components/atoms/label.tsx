import { LabelHTMLAttributes } from "react";

import { classNames } from "common/utils";

interface ILabel {
  label?: string;
  preventDefault?: boolean;
  required?: boolean;
  orientation?: "column" | "row" | "row-reverse";
  textClassName?: string;
}
export const Label: React.FC<
  LabelHTMLAttributes<HTMLLabelElement> & ILabel
> = ({
  children,
  className,
  label,
  orientation = "column",
  preventDefault,
  textClassName,
  ...props
}) => {
  return (
    <label
      className={classNames(
        "flex w-full flex-row",
        orientation === "column"
          ? "flex-col"
          : orientation === "row"
          ? "flex-row"
          : "flex-row-reverse",
        className
      )}
      onClick={(event) => preventDefault && event.preventDefault()}
      {...props}
    >
      {label && (
        <p className={classNames("font-bold leading-[2]", textClassName)}>
          {label}
        </p>
      )}
      {children}
    </label>
  );
};
