import React, { useState } from "react";
import "./ArticleButton.css";

function ArticleButton() {
  const [count, setCount] = useState(0);
  const [isShow, setIsShow] = useState(true);

  function handleClick(e) {
    setCount(count + 1);
    setIsShow(!isShow);
  }

  if (isShow) {
    return (
      <div className="button__content">
        <button className="btn btn-primary btn-lg" onClick={handleClick}>
          Hide
        </button>
        Clicked {count} times
      </div>
    );
  } else {
    return (
      <div className="button__content">
        <button className="btn btn-primary btn-lg" onClick={handleClick}>
          Show
        </button>
      </div>
    );
  }
}

export default ArticleButton;

// If we wanted all the values of the buttons to change by clicking,
// then we would need to raise the states to a common parent.
// We would raise the function and useState, and then,
// when inserting the component, we would pass the click function and
// the number of clicks as props
