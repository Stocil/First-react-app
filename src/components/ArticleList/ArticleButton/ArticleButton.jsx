import React from "react";
import "./ArticleButton.css";

function ArticleButton(props) {
  // const [count, setCount] = useState(0);

  const { click, counts } = props;
  const count = counts.count;
  const setCount = counts.setCount;

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
