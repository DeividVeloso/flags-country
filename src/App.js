import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Flag from "./components/Flag";

const Status = {
  CORRECT: 0,
  WRONG: 1,
  NOT_AWSER: 2
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: "",
      selectedFlag: {},
      namesRandon: [],
      isCorrect: Status.NOT_AWSER
    };
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all", {
      method: "GET"
    })
      .then(data => data.json())
      .then(items => {
        let namesRandon = [];
        for (let i = 0; i < items.length; i++) {
          if (i < 4) {
            namesRandon.push(items[Math.floor(Math.random() * items.length)]);
          }
        }

        const selectedFlag =
          namesRandon[Math.floor(Math.random() * namesRandon.length)];

        this.setState({ selectedFlag: selectedFlag, namesRandon });
      });
  }

  handleChange = event => {
    this.setState({
      flag: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.flag === this.state.selectedFlag.name) {
      this.setState({ isCorrect: Status.CORRECT });
    } else {
      this.setState({ isCorrect: Status.WRONG });
    }
  };

  render() {
    return (
      <div>
        <Header />
        <form onSubmit={this.handleSubmit}>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            {this.state.namesRandon.map((item, index) => {
              return (
                <div key={index}>
                  <input
                    name="flag"
                    type="radio"
                    value={item.name}
                    onChange={this.handleChange}
                  />
                  <label>{item.name}</label>
                </div>
              );
            })}
            <button type="submit">Guess</button>
          </div>
        </form>
        {this.state.isCorrect === Status.CORRECT ? (
          <h1>SUCESSO PORRA</h1>
        ) : this.state.isCorrect === Status.WRONG ? (
          <h1>Errou</h1>
        ) : null}
        <Flag
          alt={this.state.selectedFlag.demonym}
          src={this.state.selectedFlag.flag}
        />
      </div>
    );
  }
}

export default App;
