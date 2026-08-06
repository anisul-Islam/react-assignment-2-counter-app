import React, { Component } from 'react';

class OnChange extends Component {
  constructor(props) {
    super(props);

    this.state = {
      changedValue: '',
      showText: ''
    };
  }

  chnageHandaler = (e) => {
    this.setState({
      changedValue: e.target.value
    });
  };

  showText = () => {
    this.setState({
      showText: this.state.changedValue
    });
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.chnageHandaler} />
        <button onClick={this.showText}>Hello</button>
        <p>{this.state.showText}</p>
      </div>
    );
  }
}

export default OnChange;
