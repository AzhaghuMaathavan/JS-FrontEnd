import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node
};

export default ErrorBoundary;


/*Hero.jsx

import React from 'react';
import PropTypes from 'prop-types';

function Hero({ heroName }) {
  if (heroName === 'Joker') {
    throw new Error('Not a hero!');
  }

  return <div>{heroName}</div>;
}

Hero.propTypes = {
  heroName: PropTypes.string.isRequired
};

export default Hero;
*/

/*App.js
import React from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary>
    </div>
  );
}

export default App;
*/