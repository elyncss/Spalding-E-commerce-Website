import React from "react";
import "./BlogSection.css";

function BlogSection(props) {
  return (
    <div className="blog-card" style={{ backgroundImage: `url(${props.img})` }}>
      <div className="blog-section">
        <h1>{props.title}</h1>
      </div>
    </div>
  );
}

export default BlogSection;
