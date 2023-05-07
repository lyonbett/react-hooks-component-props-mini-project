import React from "react";

export const Article = ({ post }) => {
  return (
    <article>
      <h3>{post.title}</h3>
      <small>
        {post.date || "January 1, 1970"} {post.minutes} min read
      </small>
      <p>{post.preview}</p>
    </article>
  );
};