import React from 'react'
import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'
/* import Overlay from 'pigeon-overlay' */

const osm = (x, y, z) => {
    const s = String.fromCharCode(97 + (x + y + z) % 3)
    return `https://${s}.tile.openstreetmap.org/${z}/${x}/${y}.png`
}

/* export const providers = {
  osm: (x, y, z) => {
    const s = String.fromCharCode(97 + (x + y + z) % 3)
    return `https://${s}.tile.openstreetmap.org/${z}/${x}/${y}.png`
  },
  stamenTerrain: (x, y, z, dpr) => {
    return `https://stamen-tiles.a.ssl.fastly.net/terrain/${z}/${x}/${y}${dpr >= 2 ? '@2x' : ''}.jpg`
  },
  stamenToner: (x, y, z, dpr) => {
    return `https://stamen-tiles.a.ssl.fastly.net/toner/${z}/${x}/${y}${dpr >= 2 ? '@2x' : ''}.png`
  }
} */


/*
window.innerWidth
window.innerHeight
*/


/* export const Mapp = ({latitude = 45.0428000, longitude = 41.9734000}) => ( */
export const Mapp = ({latitude = 45.0428000, longitude = 41.9734000}) => (	
	<Map
		provider={osm}
		center={[latitude, longitude]}
/*  width={400}
		height={200} */
 		zoom={18}
		minZoom={12}
		maxZoom={18}
		zoomSnap={true}
		animate={true}
		animating={false}
		metaWheelZoom={false}
		twoFingerDrag={false}
		mouseEvents={true}
		touchEvents={true}
	>
		<Marker anchor={[latitude, longitude]}
			payload={1} onClick={({ event, anchor, payload }) => {}}
		/>

{/*	<Overlay anchor={[50.879, 4.6997]} offset={[120, 79]}>
      <img src='pigeon.jpg' width={240} height={158} alt='' />
    </Overlay> */}
  </Map>
)

export default Mapp