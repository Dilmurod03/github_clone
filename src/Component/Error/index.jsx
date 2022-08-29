import React from 'react';
import './main.css'

function index(props) {
  return (
    <div className='error'>
      <h3 className='error-heading'>
      We couldn’t find any repositories matching 'user:mukhriddin-dev dasdaa'
      </h3>

      <p className='error-desc'>
      You could <span>search all of GitHub</span> or try an
      <span>
      advanced search
      </span>
      </p>
    </div>
  );
}

export default index;