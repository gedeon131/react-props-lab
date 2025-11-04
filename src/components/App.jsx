import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

import Gedeon1 from "../images/Gedeon1.jpeg"; // 

const urlImage = Gedeon1;
const text = "Personal blog by Gedeon Freycinet";

function App() {
  return (
    <div className="App">
      <Header name="Learning React.js" />
      <About image={urlImage} about={text} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
