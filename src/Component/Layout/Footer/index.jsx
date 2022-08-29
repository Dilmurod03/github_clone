import React from 'react';
import './main.css'

function index(props) {
  return (
    <footer className='footer'>
      <div className="containers-main d-flex flex-column">
      <div className='line'>

      </div>

      <div className='footer-wrapper d-flex align-items-center flex-wrap mt-5'>

      <a className='footer-logo text-decoration-none text-decoration-none' href="/home">
        <svg aria-hidden="true" height="24" viewBox="0 0 16 16" version="1.1" width="24" data-view-component="true" className="octicon octicon-mark-github">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
        </svg>
      </a>

      <p className='footer-data ms-2'>
      © {new Date().getFullYear()} GitHub, Inc
      </p>

      <ul className='footer-list list-unstyled m-0 p-0 ms-5'>
        <li className='footer-item'>
          <a className='footer-list-link text-decoration-none' href="/home">
            Terms
          </a>
        </li>

        <li className='footer-item'>
          <a className='footer-list-link text-decoration-none' href="/home">
            Privacy
          </a>
        </li>

        <li className='footer-item'>
          <a className='footer-list-link text-decoration-none' href="/home">
            Security
          </a>
        </li>

        <li className='footer-item'>
          <a className='footer-list-link text-decoration-none' href="/home">
            Status
          </a>
        </li>

        <li className='footer-item'>
          <a className='footer-list-link text-decoration-none' href="/home">
            Docs
          </a>
        </li>

        <li className='footer-item'>
          <a className='footer-list-link text-decoration-none' href="/home">
            Contact GitHub
          </a>
        </li>

        <li className='footer-item'>
          <a className='footer-list-link text-decoration-none' href="/home">
            Pricing
          </a>
        </li>

        <li className='footer-item'>
          <a className='footer-list-link text-decoration-none' href="/home">
            API
          </a>
        </li>

        <li className='footer-item'>
          <a className='footer-list-link text-decoration-none' href="/home">
            Training
          </a>
        </li>

        <li className='footer-item'>
          <a className='footer-list-link text-decoration-none' href="/home">
            Blog
          </a>
        </li>

        <li className='footer-item'>
          <a className='footer-list-link text-decoration-none' href="/home">
            About
          </a>
        </li>
      </ul>
      </div>
      </div>
    </footer>
  );
}

export default index;