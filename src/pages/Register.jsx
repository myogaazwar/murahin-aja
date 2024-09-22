import bgRegister from '/image/bg-register.jpg';

import AuthLayouts from '../components/Layouts/AuthLayouts';
import FormRegister from '../components/FormInputs/FormRegister';
import { useEffect, useState } from 'react';

const RegisterPage = () => {
  const [successMessage, setSuccessMessage] = useState();

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage('');
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  return (
    <AuthLayouts
      type={'register'}
      title={'Register Page'}
      image={bgRegister}
      description={'Join With US'}
    >
      <h1 className='text-center mt-5 poppins-bold-italic text-green-500  drop-shadow-sm'>
        {successMessage}
      </h1>
      <FormRegister setSuccessMessage={setSuccessMessage} />
    </AuthLayouts>
  );
};

export default RegisterPage;
