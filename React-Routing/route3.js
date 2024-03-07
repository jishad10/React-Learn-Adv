//navigate mani hocce oi button e click korle navigate ko re kon page e ni e jabe

import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Error Page</h2>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go to Home Page
      </button>
    </div>
  );
};

export default Error;