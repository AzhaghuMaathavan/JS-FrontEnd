import React from 'react';
import PropTypes from 'prop-types';

function DisplayData({ staticData, dynamicData }) {
  return (
    <div>
      <h2>Static Data:</h2>
      <p>{staticData}</p>
      <h2>Dynamic Data:</h2>
      <p>{dynamicData}</p>
    </div>
  );
}

DisplayData.propTypes = {
  staticData: PropTypes.string.isRequired,
  dynamicData: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
    PropTypes.node
  ]).isRequired
};

export default DisplayData;