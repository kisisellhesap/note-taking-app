import { ReactNode } from "react";
import { EyeIcon } from "../icons/icons";

interface InputProps {
  label: string;
  value: string;
  leftIcon: ReactNode;
  rightIcon: ReactNode;
  onChange: () => void;
  infoText?: string;
}
const Input = ({ label, value, leftIcon, rightIcon, onChange, infoText }: InputProps) => {
  return (
    <div className="flex flex-col gap-1.5 ">
      <label className="text-preset-4 text-Neutral-950 dark:text-white">{label}</label>
      <div
        className={`radius-8 border border-Neutral-300 px-4 py-3 flex items-center gap-2 bg-transparent hover:bg-Neutral-50 dark:border-Neutral-600 dark:hover:bg-Neutral-800  group   focus-within:ring-2 focus-within:ring-offset-1   has-disabled:bg-Neutral-50 ${false ? "border-Red-500 focus-within:border-Red-500 focus-within:ring-Red-500" : "focus-within:border-Neutral-950 focus-within:ring-Neutral-500"}`}
      >
        <div className="text-Neutral-500">{leftIcon && leftIcon}</div>
        <input
          //   value={value}
          type="text"
          placeholder="Placeholder text"
          className="text-preset-5  text-Neutral-950 dark:text-white h-full placeholder:text-Neutral-500 disabled:placeholder:text-Neutral-300 outline-none w-full"
          onChange={onChange}
        />
        <div className="ml-auto text-Neutral-500">{rightIcon && rightIcon}</div>
      </div>
      {infoText && (
        <div className="flex items-center gap-2">
          <EyeIcon className={`w-5 h-5 ${false ? "text-Red-500" : "text-Neutral-500"}`} />
          <span className={`${false ? "text-Red-500" : "text-Neutral-600"} text-preset-5`}>{infoText} </span>
        </div>
      )}
    </div>
  );
};

export default Input;
