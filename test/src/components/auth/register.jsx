import React, { useState } from "react";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "../auth/auth.scss";

const Register = () => {
  // const [showpass, setShowPass] = useState(false);

  // const togglePassword = () => {
  //   setShowPass(!showpass);
  // };

  const initalValues = {
    username: "",
    email: "",
    phonenumber: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(6).max(12).required("You must enter username !"),
    password: Yup.string().min(6).max(20).required("You must enter password !"),
    email: Yup.string().min(6).max(30),
    phonenumber: Yup.string().min(10).max(11),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:7070/Users/create", data).then(() => {
      console.log(data);
    });
  };

  return (
    <div className="regis-contain">
      <Formik
        initialValues={initalValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <h1>Register</h1>
          <label>UserName: </label>
          <ErrorMessage name="username" component="span" />
          <Field id="input-regis" name="username" placeholder="UserName..." />
          <label>Email: </label>
          <ErrorMessage name="email" component="span" />
          <Field id="input-regis" name="email" placeholder="Email...." />
          <label>Phone: </label>
          <ErrorMessage name="phonenumber" component="span" />
          <Field
            id="input-regis"
            name="phonenumber"
            placeholder="Phonenumber...."
          />
          <label>Password: </label>
          <ErrorMessage name="password" component="span" />
          <Field id="input-regis" name="password" placeholder="Password...." />
          <label>Repeatpassword: </label>
          <ErrorMessage name="repeatpassword" component="span" />
          <Field
            id="input-regis"
            name="repeatpassword"
            placeholder="RePassword...."
          />
          <button type="submit">Sign Up</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
