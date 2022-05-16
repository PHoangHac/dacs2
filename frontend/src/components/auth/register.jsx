import React, {useState} from 'react';
import * as Yup from 'yup';

const Register = () => {
  const [showpass, setShowPass] = useState(false);

  const togglePassword = () =>{
    setShowPass(!showpass);
  }

  const initalValues = {
    username: "",
    password: ""
  }

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(6).max(12).required("You must enter username !"),
    password: Yup.string().min(6).max(20).required("You must enter password !")
  })

  return (
    <div className='regis-contain'>
      <form action="">
          <h1>Register</h1>
          <div className='regis-input'>
              <label htmlFor="username">Username: </label>
              <input name="username" type="text" placeholder='Enter username....'/>
              <label htmlFor="username">Email: </label>
              <input type="text" placeholder='Enter email.....'/>
              <label htmlFor="username">Phone: </label>
              <input type="text" placeholder='Enter phonenumber....'/>
              <label htmlFor="username">Password: </label>
              <input type="text" placeholder='Enter password....'/>
              <label htmlFor="username">Re-Password: </label>
              <input type="text" placeholder='Repeat-password....'/>
          </div>
          <div className="regis-btn">
              <button className='regis-btns'>Sign up</button>
          </div>
      </form>
    </div>
  )
}

export default Register;