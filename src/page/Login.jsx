import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import Styles from '../Styles/login.module.css'
const Login = () => {

  const [creds,setCreds]=useState({});

  const handleChange=(e)=>{
    const{name,value} = e.target

    setCreds({
      ...creds,
      [name]:value
    })
  }
  const {Login} = useContext(AuthContext)
  const submit=(e)=>{
    e.preventDefault();
    Login()
  }
  return (
    <div>Login
      <p>Please create your account and enjoy</p>
        <form className={Styles.box}
         onSubmit={submit}
        >
          <input
             name="email"
             type="email"
             placeholder='Enter email.....'
             onChange={handleChange}
              />
          <input 
              name="email"
              type="password" 
              placeholder='Enter password.....'
              onChange={handleChange}
             />
          <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login