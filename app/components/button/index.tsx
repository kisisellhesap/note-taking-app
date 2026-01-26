interface ButtonProps {
  text: string;
  type: "primary" | "secondary" | "border";
  disabled?: boolean;
  icon?: React.ReactNode;
}
const Button = ({ text, type, disabled = false, icon }: ButtonProps) => {
  const buttonTypes = {
    primary: `hover:bg-Blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-Neutral-400 ${disabled ? "bg-Neutral-100 text-Neutral-300" : "bg-Blue-500 text-white"}`,
    secondary: `border border-transparent hover:border-Neutral-300 hover:bg-white hover:text-Neutral-950 focus:border-Neutral-950 focus:ring-2 focus:ring-offset-2 focus:ring-Neutral-400 ${disabled ? "bg-Neutral-50 text-Neutral-300" : "bg-Neutral-100 dark:bg-Neutral-800 dark:text-Neutral-400 text-Neutral-600"}`,
    border: `border border-Neutral-300 dark:border-Neutral-600 dark:hover:text-Neutral-950 hover:border-transparent hover:bg-Neutral-100 focus:ring-2 focus:ring-offset-2 focus:ring-Neutral-400 focus:border-Neutral-950 ${disabled ? "bg-Neutral-50 text-Neutral-300" : "bg-transparent text-Neutral-950 dark:text-white"}`,
  };
  return (
    <button
      className={`flex gap-2 items-center px-4 py-3 radius-8 cursor-pointer text-preset-4 ${buttonTypes[type]}`}
      disabled={disabled}
    >
      {icon && icon}
      <span>{text}</span>
    </button>
  );
};

export default Button;
