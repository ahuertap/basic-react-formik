import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

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

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
    },
    validationSchema: validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">First Name</label>
      <input id="firstname" type="text" { ...formik.getFieldProps('firstname') } />
      {formik.touched.firstname && formik.errors.firstname ? (<div>{formik.errors.firstname}</div>) : null}

      <label htmlFor="email">Last Name</label>
      <input id="lastname" type="text" { ...formik.getFieldProps('lastname') } />
      {formik.touched.lastname && formik.errors.lastname ? (<div>{formik.errors.lastname}</div>) : null}

      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" { ...formik.getFieldProps('email') } />
      {formik.touched.email && formik.errors.email ? (<div>{formik.errors.email}</div>) : null}

      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupForm;
