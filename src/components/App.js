import React from "react";
import blogData from "../data/blog";
import { About } from "./About";
import { Header } from "./Header";
import { ArticleList } from "./ArticleList";

function App(blogData) {
  return (
    <div className="App">
      <Header />
      <About />
      <ArticleList />
    </div>
  );
}

export default App;