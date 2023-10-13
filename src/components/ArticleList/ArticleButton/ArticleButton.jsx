import React, { useState } from "react";
import "./ArticleButton.css";

function ArticleButton({ click }) {
  const [count, setCount] = useState(0);

  function handleClick(e) {
    setCount(count + 1);
    click();
  }

  return (
    <div className="button__content">
      <button className="btn btn-primary btn-lg" onClick={handleClick}>
        Hide
      </button>
      Clicked {count} times
    </div>
  );
}

export default ArticleButton;
