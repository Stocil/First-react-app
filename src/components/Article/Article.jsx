import React, { Component } from "react";
import "./Article.css";

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
        <button className="btn btn-primary btn-lg" onClick={this.hideContent}>
          {this.state.isShow ? "Скрыть" : "Показать"}
        </button>
      );

    return (
      <div className="card">
        <div className="card-header">
          <h2>{article.subtitle}</h2>
        </div>

        <div className="card-body">
          <section className="body">{article.text}</section>

          <button className="btn btn-primary btn-lg" onClick={this.hideContent}>
            {this.state.isShow ? "Скрыть" : "Показать"}
          </button>
        </div>
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
