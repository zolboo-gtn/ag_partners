import { useId } from "react";
import type { InputHTMLAttributes } from "react";

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
> = ({ className, error, label, onChange, onInput, ...props }) => {
  const id = useId();

  return (
    <div className={classNames("form-control", className)}>
      {label && (
        <label className="label" htmlFor={id}>
          <span className="label-text">{label}</span>
        </label>
      )}
      <input
        className="input input-bordered"
        id={id}
        onChange={(event) => {
          onChange && onChange(event.currentTarget.value);
        }}
        onInput={(event) => {
          onInput && onInput(event.currentTarget.value);
        }}
        {...props}
      />
    </div>
  );
};
