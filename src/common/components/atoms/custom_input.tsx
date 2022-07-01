import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import { InputHTMLAttributes, useState } from "react";

import { Label } from "common/components";
import { classNames } from "common/utils";

interface ICustomInput {
  error?: string;
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  onInput?: (value: string) => void;
}
export const CustomInput: React.FC<
  Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "onInput"> &
    ICustomInput
> = ({
  autoComplete,
  className,
  disabled,
  error,
  label,
  placeholder,
  type: _type,
  value,
  onChange,
  onInput,
}) => {
  const [type, setType] = useState(_type);

  return (
    <Label label={label}>
      <div className="relative">
        <input
          className={classNames(
            "w-full rounded-md border p-2.5",
            disabled && "cursor-not-allowed",
            error ? "border-red-400" : "border-[#efefef]",
            className
          )}
          autoComplete={autoComplete}
          disabled={disabled}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={(event) => {
            onChange && onChange(event.currentTarget.value);
          }}
          onInput={(event) => {
            onInput && onInput(event.currentTarget.value);
          }}
        />
        {_type === "password" && value && (
          <button
            type="button"
            tabIndex={-1}
            className="absolute right-0 top-1/2 -mt-2.5 mr-2.5"
            onClick={(event) => {
              event.preventDefault();
              setType(type === "password" ? "text" : "password");
            }}
          >
            {type === "password" ? (
              <EyeOffIcon className="h-5 w-5 text-[#929292]" />
            ) : (
              <EyeIcon className="h-5 w-5 text-[#929292]" />
            )}
          </button>
        )}
      </div>
      {error && <p className="text-red-400">{error}</p>}
    </Label>
  );
};
