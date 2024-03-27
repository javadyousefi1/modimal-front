import { ReactNode } from "react";

interface ButtonPropType {
  children: ReactNode;
  type?: "button" | "submit",
  theme?: "primary" | "white",
  className?: string,
  disabled?: boolean,
}
const Button = ({ children, className, type = "button", theme = "white", disabled = false }: ButtonPropType) => {

  const buttonStyle = `text-black px-3 py-2 md:px-16 w-full disabled:cursor-not-allowed disabled:bg-gray-500 disabled:opacity-50 transition linear duration-150 ${theme === "white" ? "bg-white" : "bg-primary-600 text-white"} ${className}`;

  return <button disabled={disabled} type={type} className={buttonStyle}>{children}</button>;
};

export default Button;
