import React from 'react';
import Mapp from './map';
import {usePosition} from './usePosition';

export const Demo = ({watch, settings}) => {
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
      latitude: {latitude}<br/>
      longitude: {longitude}<br/>
			timestamp: {time}<br/>
      accuracy: {accuracy && `${accuracy} m`}<br/>
      error: {error} {loader}
		<br/>
		<br/>
		<Mapp latitude = {latitude} longitude = {longitude}/> 
    </>
  );
};

export default Demo;
