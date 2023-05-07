import React from "react";
import blogData from "../data/blog";

export const Header = () => {
  return (
    <div>
      <h1>{blogData.name}</h1>
    </div>
  );
};
