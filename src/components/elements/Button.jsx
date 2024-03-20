const Button = ({ children }) => {
  const buttonStyle = "text-black bg-white px-3 py-2 md:px-16";
  return <button className={buttonStyle}>{children}</button>;
};

export default Button;
