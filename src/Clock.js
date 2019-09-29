import React from 'react';

export default class Clock extends React.Component {
  state = {
    time: new Date()
  };
    componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date()
    });
  }

  render() {
    return (
      <div className="clock">
        <h2>It is {this.state.time.toLocaleTimeString()}</h2>
      </div>
    );
  }
}
