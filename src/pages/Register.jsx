import bgRegister from '/image/bg-register.jpg';

import AuthLayouts from '../components/Layouts/AuthLayouts';
import FormRegister from '../components/FormInputs/FormRegister';

const RegisterPage = () => {
  return (
    <AuthLayouts
      type={'register'}
      title={'Register Page'}
      image={bgRegister}
      description={'Join With US'}
    >
      <FormRegister />
    </AuthLayouts>
  );
};

export default RegisterPage;
