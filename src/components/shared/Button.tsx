import { ReactNode } from "react";

type ButtonPropType = {
  children: ReactNode;
  type?: "button" | "submit";
  theme?: "primary" | "white";
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
};
const Button: React.FC<ButtonPropType> = ({
  children,
  className,
  type = "button",
  theme = "white",
  disabled = false,
  onClick = () => {},
}) => {
  const buttonStyle = `text-black px-3 py-2 md:px-5 w-full disabled:cursor-not-allowed disabled:bg-gray-500 disabled:opacity-50 transition linear duration-150 ${
    theme === "white" ? "bg-white" : "bg-primary-600 text-white"
  } ${className}`;

  return (
    <button
      disabled={disabled}
      type={type}
      className={buttonStyle}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
