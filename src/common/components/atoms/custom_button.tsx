import Link from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import { classNames } from "common/utils";
import { Spinner } from "./spinner";

type TButtonColorScheme = "primary";
type TButtonVariant = "solid" | "outline" | "ghost";
interface ICustomButton {
  colorScheme?: TButtonColorScheme;
  icon?: ReactNode;
  isLoading?: boolean;
  variant?: TButtonVariant;
}
export const CustomButton: React.FC<
  ButtonHTMLAttributes<HTMLButtonElement> & ICustomButton
> = ({
  children,
  className,
  colorScheme = "primary",
  icon,
  isLoading,
  variant = "solid",
  ...props
}) => {
  const colors = colorSchemeToColors(colorScheme);
  const __classNames = colorsToClassNames(variant, colors);

  return (
    <button
      className={classNames(
        "flex min-h-[48px] items-center justify-center rounded-md px-4 text-[14px] font-bold leading-none duration-200",
        "disabled:cursor-not-allowed disabled:opacity-40",
        variant === "solid" && classNames("text-white", ...__classNames),
        variant === "outline" && classNames("border bg-white", ...__classNames),
        variant === "ghost" && classNames(...__classNames),
        className
      )}
      formNoValidate={props.type === "submit"}
      {...props}
    >
      <div
        className={classNames(
          "flex items-center gap-x-2.5",
          isLoading && "invisible"
        )}
      >
        {icon}
        {children}
      </div>
      {isLoading && <Spinner className="absolute" />}
    </button>
  );
};

interface ICustomLinkButton {
  colorScheme?: TButtonColorScheme;
  disabled?: boolean;
  href: string;
  icon?: ReactNode;
  variant?: TButtonVariant;
}
export const CustomLinkButton: React.FC<
  AnchorHTMLAttributes<HTMLAnchorElement> & ICustomLinkButton
> = ({
  children,
  className,
  colorScheme = "primary",
  disabled,
  href,
  icon,
  variant = "solid",
  ...props
}) => {
  const colors = colorSchemeToColors(colorScheme);
  const __classNames = colorsToClassNames(variant, colors);

  return (
    <Link href={href}>
      <a
        className={classNames(
          "flex min-h-[48px] items-center justify-center rounded-md px-4 text-[14px] font-bold leading-none duration-200",
          disabled && "pointer-events-none opacity-50",
          variant === "solid" && classNames("text-white", ...__classNames),
          variant === "outline" &&
            classNames("border bg-white", ...__classNames),
          variant === "ghost" && classNames(...__classNames),
          className
        )}
        {...props}
      >
        <div className={classNames("flex items-center gap-x-2.5")}>
          {icon}
          {children}
        </div>
      </a>
    </Link>
  );
};

const colorsToClassNames = (
  variant: TButtonVariant,
  colors: { bgColor: string; borderColor: string; textColor: string }
) => {
  const { bgColor, borderColor, textColor } = colors;

  switch (variant) {
    case "ghost":
      return [textColor];
    case "outline":
      return [borderColor, textColor];
    case "solid":
      return [bgColor];
  }
};
const colorSchemeToColors = (colorScheme: TButtonColorScheme) => {
  switch (colorScheme) {
    case "primary":
      return {
        bgColor: "bg-blue-400",
        borderColor: "border-blue-400",
        textColor: "text-blue-400",
      };
  }
};
