import React from 'react';
import { useNavigate } from 'react-router'; //navigate korbo

const Error = () => {
  const navigate = useNavigate();
  //go back e click korle jate home page e ni e jai
  return (
    <div>
      <h2>Error Page</h2>
      <button
        onClick={() => {
          navigate('/');
        }}>
        Go back to Home
      </button>
    </div>
  );
};

export default Error;
