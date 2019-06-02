import { useState } from 'react';

const useSignUpForm = (state, callback) => {
  const [inputs, setInputs] = useState(state);
  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    callback();
  };
  const handleInputChange = (event) => {
    event.persist();
    // eslint-disable-next-line no-shadow
    setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
  };
  return {
    handleSubmit,
    handleInputChange,
    inputs,
  };
};
export default useSignUpForm;
