import React, { Component } from 'react';

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello, React!'
    };
    console.log('Constructor called');
  }

  componentDidMount() {
    console.log('ComponentDidMount called');
  }

  componentDidUpdate() {
    console.log('ComponentDidUpdate called');
  }

  componentWillUnmount() {
    console.log('ComponentWillUnmount called');
  }

  handleClick = () => {
    this.setState({
      message: 'Updated message!'
    });
  };

  render() {
    console.log('Render called');
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={this.handleClick}>Update Message</button>
      </div>
    );
  }
}

export default LifeCycle;


/*App.js
import React from 'react';
import LifeCycle from './components/LifeCycle';

function App() {
  return (
    <div>
      <LifeCycle />
    </div>
  );
}

export default App;
*/