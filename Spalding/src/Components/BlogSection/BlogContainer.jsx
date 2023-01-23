import React from "react";
import BlogSection from "./BlogSection";
import BlogImg from "../../../icons/blogimg1.png";
import BlogImg2 from "../../../icons/BlogImg2.png";
import BlogImg3 from "../../../icons/BlogImg3.png";
import "./BlogSection.css";

function BlogContainer() {
  return (
    <div className="blog-container">
      <h1>BLOG</h1>
      <a href="#">
        <p>wiew more</p>
      </a>
      <div>
        <BlogSection title="For Marketers Communicators" img={BlogImg} />
        <BlogSection title="For Marketers Communicators" img={BlogImg2} />
        <BlogSection title="For Marketers Communicators" img={BlogImg3} />
      </div>
    </div>
  );
}

export default BlogContainer;
