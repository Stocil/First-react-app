import React from "react";
import article from "../fixtures";
import Article from "./Article/Article";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const title = "Hello World";
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-3">{title}</h1>
      </div>
      <Article article={article[0]} />
      <Article article={article[1]} />
    </div>
  );
}

export default App;
