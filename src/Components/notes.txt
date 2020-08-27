import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const API =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
class App extends React.Component {
  state = {
    quotes: null,
    randomQuote: null
  };

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        this.setState({
          quotes: data.quotes
        });
      });
  }

  randomQuoteHandler = () => {
    const randNumb = Math.floor(Math.random() * this.state.quotes.length);
    const randomQuote = this.state.quotes[randNumb];

    this.setState({
      randomQuote
    });
  };
  render() {
    return (
      <div className="container">
        <div className="ui card">
          <div className="content">
            <div className="header">
              {this.state.randomQuote !== null && this.state.randomQuote.quote}
            </div>
            <div className="description">
              {this.state.randomQuote !== null && this.state.randomQuote.author}
            </div>
            <br />
            <button
              className="ui black basic button"
              onClick={this.randomQuoteHandler}
            >
              Random Quotes
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
