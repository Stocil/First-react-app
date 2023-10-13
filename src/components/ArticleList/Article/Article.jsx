import React, { useState } from "react";
import "./Article.css";
import ArticleButton from "../ArticleButton/ArticleButton";

function Article(props) {
  const { article } = props;
  const [isShow, setIsShow] = useState(true);

  function handleClick() {
    setIsShow(!isShow);
  }

  if (isShow) {
    return (
      <div className="card">
        <div className="card-header">
          <h2>{article.subtitle}</h2>
        </div>

        <div className="card-body">
          <section className="body">{article.text}</section>

          <ArticleButton click={handleClick} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="card">
        <div className="card-body">
          <ArticleButton click={handleClick} />
        </div>
      </div>
    );
  }
}

export default Article;
