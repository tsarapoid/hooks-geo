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

	const date = new Date(timestamp)
	const time = date.toTimeString()
	console.log(date.toLocaleString());

  const loader = !latitude && !error ?
		("Fetching location") : null;
	
  return (
    <>
      <code>
        latitude: {latitude}<br/>
        longitude: {longitude}<br/>
        timestamp: {time}<br/>
        accuracy: {accuracy && `${accuracy} m`}<br/>
        error: {error} {loader}
      </code>
    </>
  );
};

Demo.propTypes = {
  watch: PropTypes.bool,
  settings: PropTypes.object,
};

export default Demo;