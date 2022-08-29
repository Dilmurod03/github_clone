import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// import logo from '../../../assets/images/logo.svg'
// import bell from '../../../assets/images/bell-white.svg'
// import plus from '../../../assets/images/plus.svg'
// import dropdown from '../../../assets/images/dropdown.png'
// import hamburger from '../../../assets/images/hamburger.svg'
import dataContext from '../../Context/dataContext';
import './main.css'

function index(props) {

  const[values, setValues] = useState('')
  const{setName} = useContext(dataContext)
  const navigate = useNavigate()

  function search(e) {
    if(e.key === 'Enter'){
      setName(values)
      setValues('')
    }
  }

  return (
    <header className='header'>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="containers navbar__containers d-flex">
          <button
            className="navbar-toggler hamburger-btn"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img src={hamburger} alt="hamburger" width='24' height='24' />

            <a className="navbar-brand-active mt-2 mt-lg-0" href="/home">
              <img
              className='navbar-img'
                src={logo}
                height="32"
                alt="logo"
                loading="lazy"
                width='32'
              />
            </a>

            <a className='me-3 text-decoration-none' href="/home">
            <img src={bell} alt="20" height='20' />
            </a>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <a className="navbar-brand mt-2 mt-lg-0 text-decoration-none" href="/home">
              <img
              className='navbar-img'
                src={logo}
                height="32"
                alt="logo"
                loading="lazy"
                width='32'
              />
            </a>

            <input onKeyPress={(e) => search(e)} value={values} onChange={(e) => setValues(e.target.value)} className='header-input px-4' type="search" placeholder='Search or jump to...' />

            <ul className="navbar-nav me-auto ms-2 mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-white text-decoration-none" href="/home">Pull requests</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white text-decoration-none" href="/home">Issues</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white text-decoration-none" href="/home">Marketplace</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white text-decoration-none" href="/home">Explore</a>
              </li>
              <li className="nav-item nav-item-active">
                <a onClick={() => navigate('/')} className="nav-link nav-link-active text-white text-decoration-none">Sign out</a>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center">


            <a className='navbar-bell me-3 text-decoration-none' href="/home">
            <img src={bell} alt="20" height='20' />
            </a>

            <div className="dropdown dropdown-plus">
              <a
                className="text-reset me-3 dropdown-toggle hidden-arrow text-decoration-none" href="/home"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
              <img src={plus} alt="28" height='21' />

              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item text-decoration-none" href="/home">New repository</a>
                </li>
                <li>
                  <a className="dropdown-item text-decoration-none" href="/home">Import repository</a>
                </li>
                <li>
                  <a className="dropdown-item text-decoration-none" href="/home">New gist</a>
                </li>
                <li>
                  <a className="dropdown-item text-decoration-none" href="/home">New organization</a>
                </li>
                <li>
                  <a className="dropdown-item text-decoration-none" href="/home">New project</a>
                </li>
              </ul>
            </div>
            <div className="dropdown dropdown-account">
              <a
                className="dropdown-toggle d-flex align-items-center hidden-arrow"  href="/home"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={dropdown}
                  className="rounded-circle"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <div className="line mt-2"></div>
                  <div className='plus-item my-3'>
                  <svg className="octicon octicon-smiley" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path  d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM5 8a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zM5.32 9.636a.75.75 0 011.038.175l.007.009c.103.118.22.222.35.31.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371.13-.088.247-.192.35-.31l.007-.008a.75.75 0 111.222.87l-.614-.431c.614.43.614.431.613.431v.001l-.001.002-.002.003-.005.007-.014.019a1.984 1.984 0 01-.184.213c-.16.166-.338.316-.53.445-.63.418-1.37.638-2.127.629-.946 0-1.652-.308-2.126-.63a3.32 3.32 0 01-.715-.657l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 01.183-1.044h.001z"></path></svg>
                  <span className='ms-2'>Set status</span>
                  </div>

                  <div className="line"></div>
                </li>

                <li className='pt-3'>
                  <a className="dropdown-item text-decoration-none" href="/home">Your profile</a>
                </li>
                <li>
                  <a className="dropdown-item text-decoration-none" href="/home">Your repositories</a>
                </li>
                <li>
                  <a className="dropdown-item text-decoration-none" href="/home">Your codespaces</a>
                </li>
                <li>
                  <a className="dropdown-item text-decoration-none" href="/home">Your projects</a>
                </li>
                <li>
                  <a className="dropdown-item text-decoration-none" href="/home">Your stars</a>
                </li>
                <li>
                  <a className="dropdown-item text-decoration-none" href="/home">Your gists</a>
                </li>

                <li className='pt-3'>
                  <div className='line'></div>
                  <a className="dropdown-item text-decoration-none" href="/home">Upgrade</a>
                </li>

                <li>
                  <a className="dropdown-item text-decoration-none" href="/home">Feature preview</a>
                </li>

                <li>
                  <a className="dropdown-item text-decoration-none" href="/home">help</a>
                </li>

                <li>
                  <a className="dropdown-item text-decoration-none" href="/home">Settings</a>
                </li>

                <li className='pt-3'>
                <div className='line'></div>
                  <button onClick={() => navigate('/')} className="dropdown-item text-decoration-none" >Sign out</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default index;