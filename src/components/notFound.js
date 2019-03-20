import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <h1 >
        404 page not found error
    </h1>
   
    <div >
      <Link to="/">Return home and try again</Link>
    </div>
  </div>
);
export default NotFound;