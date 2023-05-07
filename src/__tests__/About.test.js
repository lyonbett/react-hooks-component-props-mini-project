import React from "react";
import blogData from "../data/blog";

export const About = () => {
  return (
    <aside>
      <img
        src={blogData.image}
        placeholder="https://via.placeholder.com/215"
        alt="Blog logo"
      />
      <p>{blogData.about}</p>
    </aside>
  );
};