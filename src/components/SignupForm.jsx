import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import BaseInput from './base/BaseInput';

const validate = () => {
  return Yup.object({
    firstname: Yup.string()
      .max(15, 'The Firstname must be at least 15 characters or less')
      .required('The Firstname is Required'),
    lastname: Yup.string()
      .max(20, 'The Lastname must be at least 20 characters or less')
      .required('The Lastname is Required'),
    email: Yup.string().email('Invalid email address').required('The Email is Required'),
  })
};

const handleSubmit = values => {
  alert(JSON.stringify(values, null, 2));
};

const SignupForm = () => {
  const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validate} onSubmit={handleSubmit} >
      <Form>
        <BaseInput label="First Name:" name="firstname" type="text" />
        <BaseInput label="Last Name:" name="lastname" type="text" />
        <BaseInput label="Email:" name="email" type="email" />

        <div>
          <button type="submit">Submit</button>
        </div>
      </Form>
    </Formik>
  );
};

export default SignupForm;
