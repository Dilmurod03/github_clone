import React, { useContext } from 'react';
import dataContext from '../Context/dataContext';

function index(props) {

  const {page} = useContext(dataContext)
  const {setPage} = useContext(dataContext)

  return (
    <>
    <ul className="pagination justify-content-center mt-4">
      <li className='page-item'>
        <button onClick={() => setPage(page - 1)} className={`page-link text-info ${page <= 1 ? 'disabled' : ''}`}>Previous</button>
      </li>
      <li className="page-item">
        <button onClick={() => setPage(page + 1)} className={`page-link text-info ${page >= 4 ? 'disabled' : ''}`}>Next</button>
      </li>
    </ul>
    </>
  );
}

export default index;