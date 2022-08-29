import React, { useState, useContext } from 'react';
import dataContext from '../Context/dataContext';
import './main.css'

function index(props) {

  const[name, setName] = useState('')
  const[password, setPassword] = useState('');
  const {useAuth} = useContext(dataContext)

  const params = {
    name: name,
    password: password
  }

  return (
    <div className='login'>
      <div className="container">
      <div className='text-center'>
      <svg height="48" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="48" data-view-component="true" className="octicon octicon-mark-github">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
      </svg>

      <h1 className='login-heading'>
      Sign in to GitHub
      </h1>
      </div>

      <form className='login-form'>
        <p className='login-email'>
        Username or email address
        </p>

        <input value={name} onChange={(e) => setName(e.target.value)} className='login-email-input' type="text" placeholder='Username' />

        <span className='login-password'>
        Password
        </span>

        <span className='login-forgot text-end'>
          Forgot password?
        </span>

        <input value={password} onChange={(e) => setPassword(e.target.value)} className='login-password-input' type="text" placeholder='Password' />

        <button onClick={() => useAuth(params)} className='login-btn'>Sign in</button>
      </form>

      <div className='create'>
        <h3 className='create-heading'>
        New to GitHub? <a className='create-link' href="#">
        Create an account .
        </a>
        </h3>
      </div>

      <ul className='login-list list-unstyled d-flex justify-content-around'>
        <li>
          <a className='login-list-link text-decoration-none' href="#">
            Terms
          </a>

        </li>

        <li>
          <a className='login-list-link' href="#">
            Privacy
          </a>

        </li>

        <li>
          <a className='login-list-link' href="#">
            Security
          </a>
        </li>

        <li>
          <a className='login-list-link login-list-link-active' href="#">
            Contact GitHub
          </a>
        </li>
      </ul>
      </div>
    </div>
  );
}

export default index;