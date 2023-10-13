import React from "react";
import Article from "./Article/Article";

function ArticleList(props) {
  const { articles } = props;

  return articles.map((article) => (
    <Article key={article.id} article={article} />
  ));
}

export default ArticleList;
