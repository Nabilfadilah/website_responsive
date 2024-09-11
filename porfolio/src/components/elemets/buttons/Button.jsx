const Button = (props) => {
  // konsep desctrukturing
  const {
    children,
    className = "bg-black",
    onClick = () => {},
    type = "button",
    href = "#", // tambahkan default href
  } = props;
  return (
    <a
      // konsep desctrukturing
      className={`h-10 px-6 font-semibold rounded-md ${className} text-white`}
      href={href}
      role="button" // tambahkan role button untuk semantik aksesibilitas
    >
      {/* konsep desctrukturing */}
      {children}
    </a>

    // <button
    //   // konsep desctrukturing
    //   className={`h-10 px-6 font-semibold rounded-md ${className} text-white`}
    //   type={type}
    //   // event handler
    //   onClick={onClick}
    // >
    //   {/* konsep desctrukturing */}
    //   {children}
    // </button>
  );
};

export default Button;
