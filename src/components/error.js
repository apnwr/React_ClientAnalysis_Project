import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
      <div>
        <h1>
          Oh No !! You got Error !!! <br />
          This page is under construction.
        </h1>
        <button type='button' >
          <Link to="/">Back to Home</Link>
        </button>
      </div>
    );
}

export default Error;