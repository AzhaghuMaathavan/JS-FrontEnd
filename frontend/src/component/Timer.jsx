import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
    this.timer = null;
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        seconds: prevState.seconds + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <h2>Elapsed time: {this.state.seconds} seconds</h2>
      </div>
    );
  }
}

export default Timer;


/*
import React, { useState, useEffect } from 'react';

function Timer() {[]
  const [count,setcount]=useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setcount(prev->prev+1)
    },1000)
    return () => {
      clearInterval(timer);
    }
  },[count])
  return (
    <div>
      <h2>Elapsed time: {count} seconds</h2>
    </div>
  )
}
export default Timer;
*/
