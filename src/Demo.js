import React from 'react';
import PropTypes from 'prop-types';
import {usePosition} from './usePosition';

const Demo = ({watch, settings}) => {
  const {
    latitude,
    longitude,
    timestamp,
    accuracy,
    error,
  } = usePosition(watch, settings);

  const loader = !latitude && !error ? (
    <>
      <br/>
      <div>fetching location...</div>
    </>
  ) : null;

  return (
    <>
      <code>
        latitude: {latitude}<br/>
        longitude: {longitude}<br/>
        timestamp: {timestamp}<br/>
        accuracy: {accuracy && `${accuracy}m`}<br/>
        error: {error}
      </code>
      <br/>
			{loader}
    </>
  );
};

Demo.propTypes = {
  watch: PropTypes.bool,
  settings: PropTypes.object,
};

export default Demo;