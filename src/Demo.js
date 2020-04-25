import React from 'react';
import Mapp from './hooks/map';
import {usePosition} from './hooks/geo';

import "./styles.css"

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
		<div className="app">
{/*   latitude: {latitude}<br/>
      longitude: {longitude}<br/>
			timestamp: {time}<br/>
      accuracy: {accuracy && `${accuracy} m`}<br/>
      error: {error} {loader}
		<br/>
		<br/> */}
			<div className="demo">
				<Mapp latitude = {latitude} longitude = {longitude}/> 
			</div>
    </div>
  );
};

export default Demo;
