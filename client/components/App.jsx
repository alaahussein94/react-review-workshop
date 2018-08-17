import React, { Component } from "react";
import List from "./List.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: ""
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(e) {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => console.log(this.state)
    );
  }

  render() {
    const { first, last } = this.state;

    if (first === "Alaa" && last === "Hussein") {
      return <List />;
    } else {
      return (
        <div>
          First: <input name="first" onChange={this.onChangeHandler} />
          Last: <input name="last" onChange={this.onChangeHandler} />
          {/* Hello from Component, {first} {last} */}
        </div>
      );
    }
  }
}

export default App;
