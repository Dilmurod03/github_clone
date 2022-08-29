import React from 'react';
import './main.css'

function index(props) {
  return (
    <div className='projects'>
      <div className='projects-wrapper'>
        <h3 className='projects-heading'>
          Welcome to the all-new projects
        </h3>

        <p className='projects-desc'>
          Built like a spreadsheet, project tables give you a live canvas to filter, sort, and group issues and pull requests. Tailor them to your needs with custom fields and saved views.
        </p>

        <a className='projects-btn text-decoration-none' href="/home">Learn more</a>
      </div>

      <div className='projects-center-wrapper'>
        is:open
      </div>

      <div className='projects-last-wrapper'>
      <h3 className='projects-last-heading'>
      No open projects
        </h3>

        <p className='projects-last-desc'>
        No projects have been opened yet.
        </p>
      </div>
    </div>
  );
}

export default index;