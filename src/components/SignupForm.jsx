import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import BaseInput from './base/BaseInput';
import BaseCheckbox from './base/BaseCheckbox';
import BaseSelect from './base/BaseSelect';

const validate = () => {
  return Yup.object({
    firstname: Yup.string()
      .max(15, 'The Firstname must be at least 15 characters or less')
      .required('The Firstname is Required'),
    lastname: Yup.string()
      .max(20, 'The Lastname must be at least 20 characters or less')
      .required('The Lastname is Required'),
    email: Yup.string().email('Invalid email address').required('The Email is Required'),
    acceptedTerms: Yup.boolean()
      .required('This field is required')
      .oneOf([true], 'You must accept the terms and conditions.'),
    jobType: Yup.string()
      .oneOf(['designer', 'development', 'product', 'other'], 'Invalid job type.')
      .required('The job type is required.'),
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
    acceptedTerms: false,
    jobType: '',
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validate} onSubmit={handleSubmit} >
      <Form>
        <BaseInput label="First Name:" name="firstname" type="text" />
        <BaseInput label="Last Name:" name="lastname" type="text" />
        <BaseInput label="Email:" name="email" type="email" />

        <BaseSelect label="Job Type:" name="jobType">
          <option value="">Select a job type</option>
          <option value="designer">Designer</option>
          <option value="development">Developer</option>
          <option value="product">Product Manager</option>
          <option value="other">Other</option>
        </BaseSelect>

        <BaseCheckbox name="acceptedTerms">
          I accept terms and conditions
        </BaseCheckbox>

        <div>
          <button type="submit">Submit</button>
        </div>
      </Form>
    </Formik>
  );
};

export default SignupForm;
