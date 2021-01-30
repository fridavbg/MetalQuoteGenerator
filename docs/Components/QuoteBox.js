import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

class QuoteBox extends Component {
  constructor() {
    super();
    this.state = {
      quote: "",
      author: "",
    };
  }

  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/fridavbg/8c342b8b8a540ee865dc1766dc81736e/raw/4a63a0015f1ddc46600cdfc621589151b20e106f/rockQuotes.json"
    )
      .then((data) => data.json())
      .then((quotes) => this.setState({ quotes }));
  }

  getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * this.state.quotes.length);
    const randomQuote = this.state.quotes[randomIndex];
    this.setState({
      quote: randomQuote["quote"],
      author: randomQuote["author"],
    });
  };

  render() {
    return (
      <div>
        <div id="background-image">
          <div class="quote-box">
            {/* Quote with author text */}
            <div id="quote">
              <p id="text">{this.state.quote}</p>
              <p id="author">{this.state.author}</p>

              {/* BUTTON */}
              <button id="new-quote" onClick={this.getRandomQuote}>
                Get a Quote
              </button>
            </div>
            <FontAwesomeIcon icon={faTwitter} id="tweet-quote" href="" />
          </div>
        </div>
      </div>
    );
  }
}

export default QuoteBox;
