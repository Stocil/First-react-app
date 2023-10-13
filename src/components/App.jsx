import React from "react";
import article from "../fixtures";
import ArticleList from "./ArticleList/ArticleList";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const title = "Hello World";
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-3">{title}</h1>
      </div>
      <ArticleList articles={article} />
    </div>
  );
}

export default App;
