import React from 'react';
import { useFormik } from 'formik';

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      alert("Login Successful");
    },
    validate: (values) => {
      let errors = {};
      if (!values.firstName) errors.firstName = "field required";
      if (!values.lastName) errors.lastName = "field required";
      if (!values.email) errors.email = "field required";
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) 
        errors.email = 'Username should be an email';
      if (!values.psw) errors.psw = "field required";
      return errors;
    },
  });
 
  return (
    <form onSubmit={formik.handleSubmit}>
       <div className="title">Create Account</div>
      <label htmlFor="firstName" className="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        className="firstNameBox"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      {formik.errors.firstName ? (
          <div id="firstNameError" className="firstNameError" style={{ color: "red" }}>
            {formik.errors.firstName}
          </div>
        ) : null}
        <br></br>

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      {formik.errors.lastName ? (
        <div id="lastNameError" style={{ color: "red" }}>
          {formik.errors.lastName}
        </div>
      ) : null}
      <br></br>

      <label htmlFor="email">Username</label>
      <input
        id="emailField"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email ? (
          <div id="emailError" style={{ color: "red" }}>
            {formik.errors.email}
          </div>
        ) : null}
        <br></br>

<label htmlFor="psw">Password</label>
      <input
        id="pswField"
        name="psw"
        type="psw"
        onChange={formik.handleChange}
        value={formik.values.psw}
      />
      {formik.errors.psw ? (
          <div id="pswError" style={{ color: "red" }}>
            {formik.errors.psw}
          </div>
        ) : null}
        <br></br>

      <button id="submitBtn" type="submit">Submit</button>
    </form>
  );
};



export default SignupForm