import React, { Component } from "react";

class Article extends Component {
  // Первый способ задания состояния
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     isShow: true,
  //   };
  // }

  // Второй способ задания состояния
  state = {
    isShow: true,
  };

  render() {
    const { article } = this.props;

    if (!this.state.isShow)
      return (
        <button
          className="main__close-button button"
          onClick={this.hideContent}
        >
          {this.state.isShow ? "Скрыть" : "Показать"}
        </button>
      );

    return (
      <div>
        <h2>{article.subtitle}</h2>
        <section className="body">{article.text}</section>
        <button
          className="main__close-button button"
          onClick={this.hideContent}
        >
          {this.state.isShow ? "Скрыть" : "Показать"}
        </button>
      </div>
    );
  }

  hideContent = (event) => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };
}

export default Article;
