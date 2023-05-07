import React from "react";
import { Article } from "./Article";
import blogData from "../data/blog";

export const ArticleList = (props) => {
  return (
    <main>
      {blogData.posts.map((post) => (
        <Article key={post.id} post={post} />
      ))}
    </main>
  );
};