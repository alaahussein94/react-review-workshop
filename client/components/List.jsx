import React, { Component } from "react";
import ListEntry from "./ListEntry.jsx";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      items: []
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onClickEvent = this.onClickEvent.bind(this);
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmitHandler() {
    this.setState(
      {
        items: [...this.state.items, this.state.item] //can't push into react because it wont re-render component
      },
      () => console.log(this.state)
    );
  }

  onClickEvent(index) {
    console.log("Clicked");
    const items = this.state.items.slice();
    items.splice(index, 1);
    this.setState({ items: items });
  }

  render() {
    return (
      <div>
        Item: <input name="item" onChange={this.onChangeHandler} />
        <button onClick={this.onSubmitHandler}>Submit</button>
        <ul>
          {this.state.items.map((item, index) => (
            <ListEntry
              key={item}
              item={item}
              index={index}
              click={this.onClickEvent}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
