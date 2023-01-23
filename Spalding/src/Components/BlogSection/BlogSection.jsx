import React from "react";
import { useState } from "react";
import "./BlogSection.css";

function BlogSection(props) {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className="blog-card"
      style={{ backgroundImage: `url(${props.img})` }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="blog-section">
        <h1>{props.title}</h1>
        {isHover && (
          <>
            <p>
              Doing blogger outreach or influencer marketing and want to connect
              with new influencers in niche markets? Improve your outreach by
              connecting with thousands of authority bloggers and social media
              influencers in your domain area
            </p>
            <div>
              <a href="#">
                <p>read more</p>
              </a>
              <p>30.09.2019</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default BlogSection;
