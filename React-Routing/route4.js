//first e data.js e kicu data rakbo

export const blogsData = [
  {
    id: 1,
    title: "html",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe doloremque impedit cumque aperiam dignissimos cum eveniet reiciendis iste asperiores voluptates repudiandae et, deserunt nobis commodi hic! Ratione accusamus assumenda alias rerum, esse et aperiam nihil sunt amet nobis quod libero sapiente! Harum reiciendis quos tempora blanditiis recusandae impedit iusto ipsum?",
  },
  {
    id: 2,
    title: "css",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe doloremque impedit cumque aperiam dignissimos cum eveniet reiciendis iste asperiores voluptates repudiandae et, deserunt nobis commodi hic! Ratione accusamus assumenda alias rerum, esse et aperiam nihil sunt amet nobis quod libero sapiente! Harum reiciendis quos tempora blanditiis recusandae impedit iusto ipsum?",
  },
  {
    id: 3,
    title: "js",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe doloremque impedit cumque aperiam dignissimos cum eveniet reiciendis iste asperiores voluptates repudiandae et, deserunt nobis commodi hic! Ratione accusamus assumenda alias rerum, esse et aperiam nihil sunt amet nobis quod libero sapiente! Harum reiciendis quos tempora blanditiis recusandae impedit iusto ipsum?",
  },
  {
    id: 4,
    title: "react.js",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe doloremque impedit cumque aperiam dignissimos cum eveniet reiciendis iste asperiores voluptates repudiandae et, deserunt nobis commodi hic! Ratione accusamus assumenda alias rerum, esse et aperiam nihil sunt amet nobis quod libero sapiente! Harum reiciendis quos tempora blanditiis recusandae impedit iusto ipsum?",
  },
];




//step 2: load and map the data in Blogs.js page ....blog page theke data golo ni e asbo


import React, { useState } from "react";
import { Link } from "react-router-dom";

import { blogsData } from "../data";
const Blogs = () => {
  const [blogs, setBlogs] = useState(blogsData); //usestate use ko re data golo ke set ko re raktechi
  
  //body theke kicu data slice ko re dekacchi,baki golo learn more e click korle dekabe
  const truncateString = (str, number) => {
    if (str.length > number) {
      return str.slice(0, number) + "...";
    } else return str;
  };
  
  //data golo ke mapping kortechi
  //body theke front page 100 letter porjonto show korbe
  const renderBlogsElement = blogs.map((blog) => {
    return (
      <article key={blog.id} className="blog">
        <h3>{blog.title}</h3>
        <p>{truncateString(blog.body, 100)}</p>
        <Link className="link" to={blog.title}>
          Learn More
        </Link>
      </article>
    );
  });

  return (
    <div>
      <h2>Blogs Page</h2>
      <section className="blogs">{renderBlogsElement}</section>
    </div>
  );
};

export default Blogs;
// blogs/html -> HTML.JS -> Blog.JS
// blogs/css -> CSS.JS -> Blog.JS
// blogs/js -> JS.JS -> Blog.JS
// blogs/react -> React.JS -> Blog.JS





//step 3: set and get parameter



// in route setup
<Route path="/blogs/:title" element={<Blog />} />;  //blogs er sathe tittle tao di te hobe bcz tittle related kaj kortechi

// where we wish to recieve the dynamic params
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogsData } from "../data";

const Blog = () => {
  const { title } = useParams();  //useparames er maddome tittle ta ke alada ko re ratechi
  const [blogs, setBlogs] = useState(blogsData);
  const [singleBlog, setSingleBlog] = useState();
  
  //jodi tittle match hoi ,,dorlam html e click korle html related golo dekabe,css e click korle css related golo dekabe 
  useEffect(() => {
    const blogData = blogs.find((blog) => blog.title === title);
    setSingleBlog(blogData);
  }, [blogs, title]);

  console.log(singleBlog);

  return (
    <div>
      <div>
        <h2>{title}</h2>
        {singleBlog && <p>{singleBlog.body}</p>}
      </div>
    </div>
  );
};

//export default Blog;