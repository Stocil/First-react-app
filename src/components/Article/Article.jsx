import React from "react";
import "./Article.css";
import ArticleButton from "../ArticleButton/ArticleButton";

function Article(props) {
  const { article } = props;

  const articleList = article.map((articleItem) => (
    <div key={articleItem.id} className="card">
      <div className="card-header">
        <h2>{articleItem.subtitle}</h2>
      </div>

      <div className="card-body">
        <section className="body">{articleItem.text}</section>

        <ArticleButton />
      </div>
    </div>
  ));

  return <ul className="card__list">{articleList}</ul>;
}

export default Article;
