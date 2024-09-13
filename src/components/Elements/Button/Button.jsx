const Button = ({ onSelect, children, classname }) => {
  return (
    <button
      className={`${classname} px-5 py-2 rounded-lg poppins-regular`}
      onClick={onSelect}
    >
      {children}
    </button>
  );
};

export default Button;
