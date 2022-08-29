import React, {useContext} from 'react';
import dataContext from '../Context/dataContext';
import Pagination from '../Pagination'
import './main.css'

function index(props) {

  const {repos} = useContext(dataContext)

  return (
    <div className='repos'>
      <ul className='repos-list list-unstyled m-0 p-0'>
        {repos.length >= 1 ?

          repos.map((item, index) => {
          return         <li key={item.id} className='repos-item'>
            <div className='line-repos'></div>

            <div className='repos-text-wrapper d-flex justify-content-between'>
              <div className='repos-item-left'>
                <a href='/home' className='repos-item-left-heading text-decoration-none'>
                {item.name}
                </a>

                <div className='repos-item-left-news-wrapper'>
                  <span className='repos-item-left-lang'>
                    {item.language ? item.language : ''}
                  </span>

                  <span className='repos-item-left-data'>
                  Updated  {item.updated_at.substring(0,10)}
                  </span>
                </div>
              </div>

            <div className='repos-item-right'>
              <button className='repos-item-right-btn'>
                  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-star d-inline-block mr-2 me-2">
                  <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
                </svg>

                Start

                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-triangle-down ms-2">
                <path d="M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z"></path>
                </svg>
              </button>

              <div className='line-green'>

              </div>
            </div>
            </div>

            <div className='line-repos'></div>
          </li>
        })

        :

        <h1 className='text-center pt-3'>Repositories not found...</h1>

        }
      </ul>

      <Pagination />
    </div>
  );
}

export default index;