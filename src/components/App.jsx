import React from "react";
import Article from "./Article";
import article from "../fixtures";

function App() {
  const title = "Hello World";
  return (
    <div className="main">
      <h1 className="main__title title">{title}</h1>
      <Article article={article} />
    </div>
  );
}

export default App;
