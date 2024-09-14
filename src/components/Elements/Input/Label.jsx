export const Label = ({ htmlFor, children }) => {
  return (
    <label className='text-sm' htmlFor={htmlFor}>
      {children}
    </label>
  );
};
