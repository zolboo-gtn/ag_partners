import { TextareaHTMLAttributes } from "react";

import { classNames } from "common/utils";

interface ICustomTextArea {
  error?: string;
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  onInput?: (value: string) => void;
}
export const CustomTextArea: React.FC<
  Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "onChange" | "onInput"> &
    ICustomTextArea
> = ({ className, error, label, onChange, onInput, ...props }) => {
  return (
    <div className={classNames("form-control", className)}>
      {label && (
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
      )}
      <textarea
        className="textarea textarea-bordered"
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
