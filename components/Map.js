import { getCenter } from 'geolib'
import React from 'react'
import { useState } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'

const Map = ({ searchResults }) => {
  const [selectedLocation, setSelectedLocation] = useState({})
  // transform search result to latitude and longitude
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }))
  const center = getCenter(coordinates)
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  })
  console.log(searchResults)
  return (
    <ReactMapGL
      mapStyle="mapbox://styles/smarifuli43/ckzu7ekpo000d14t83rgy15hi"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onMove={(e) => setViewport(e.nextViewport)}
    >
      
    </ReactMapGL>
  )
}

export default Map
