export const Input = ({ id, name, type, placeholder, validation }) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      {...validation}
      className='border outline-none  focus:border-blue-600 placeholder:text-sm text-sm text-slate-500 px-2 py-2'
    />
  );
};
