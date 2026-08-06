import React, { Component } from 'react';

class EventBinding extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  countChnge = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.countChnge}>Increase</button>
      </div>
    );
  }
}

export default EventBinding;
