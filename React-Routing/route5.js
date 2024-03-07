// what do we have inside useLocation
// we have state for passing data
// Blog.js
// uselocation er modde data golo aace so
// mapping ko re ante hobe nah 
// directly use korte parbo

import { useParams, useLocation } from "react-router-dom";
//const Blog = () => {
  const location = useLocation();
  console.log(location);
//};

//pass data using state in Link
<Link className="link" to={title} state={{ id, title, body }}>
  Learn More
</Link>;

import React from "react";
import { useParams, useLocation } from "react-router-dom";

const Blog = () => {
  const location = useLocation();
  const { title } = useParams();

  return (
    <div>
      <div>
        <h2>{title}</h2>
        {location.state.body && <p>{location.state.body}</p>}
      </div>
    </div>
  );
};

export default Blog;