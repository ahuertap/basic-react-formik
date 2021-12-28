import React from 'react';
import { useFormik } from 'formik';

const validate = values => {
  const errors = {};
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  if (!values.firstname) {
    errors.firstname = 'The Firstname is Required';
  } else if (values.firstname.length > 15) {
    errors.firstname = 'The Firstname must be at least 15 characters or less';
  }

  if (!values.lastname) {
    errors.lastname = 'The Lastname is Required';
  } else if (values.lastname.length > 20) {
    errors.lastname = 'The Lastname must be at least 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'The Email is Required';
  } else if (!emailRegex.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">First Name</label>
      <input
        id="firstname"
        name="firstname"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstname}
      />
      {formik.touched.firstname && formik.errors.firstname ? <div>{formik.errors.firstname}</div> : null}

      <label htmlFor="email">Last Name</label>
      <input
        id="lastname"
        name="lastname"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastname}
      />
      {formik.touched.lastname && formik.errors.lastname ? <div>{formik.errors.lastname}</div> : null}

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}

      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupForm;
