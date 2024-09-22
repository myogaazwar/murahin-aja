import { Input } from './Input';
import { Label } from './Label';

const InputForm = ({ name, title, id, type, placeholder, validation }) => {
  return (
    <div className='flex flex-col mt-5 poppins-regular gap-y-2'>
      <Label htmlFor={name}>{title}</Label>
      <Input
        validation={validation}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputForm;
