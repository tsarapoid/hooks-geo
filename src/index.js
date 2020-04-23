import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

import Demo from "./demo";

ReactDOM.render(
  <React.StrictMode>
		{/* <Demo/> */}
		<Demo watch={true}
		settings={
			{enableHighAccuracy: true,
			timeout: Infinity,
			maximumAge: 6000}
		}/>
  </React.StrictMode>,
  document.getElementById('root')
);

/*const defaultSettings = {
  enableHighAccuracy: false,
  timeout: Infinity,
  maximumAge: 0,
};*/