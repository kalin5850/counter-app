import React, { Component } from "react";

class Counter extends Component {
  // state is obj containing any data
  state = {
    count: 0,
  };

  render() {
    return (
      <div>
        <span style={{ fontSize: 30 }} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1>Zeor</h1> : count;
  }
}

export default Counter;
