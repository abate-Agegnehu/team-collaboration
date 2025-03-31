import React from 'react'

const Login = () => {
  return (
    <div>
      <input type="text" name='name' placeholder='Name' />
      <input type="email" name='email' placeholder='Email' />
      <input type="password" name='password' placeholder='Password' />
       <button >Send</button>
    </div>
  )
}

export default Login
