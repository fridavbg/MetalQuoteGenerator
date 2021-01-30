import React, { Component } from "react";
import "./App.css";
import "./Components/QuoteBox";
import QuoteBox from "./Components/QuoteBox";
import Footer from "./Components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Rock Quotes</h1>
        <div>
          <QuoteBox />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
