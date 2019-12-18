import React from 'react'
import { Map, Marker, TileLayer, Popup } from 'react-leaflet'

const MapPage = () => {
  const position = [15.309391, -61.379304]

  if (typeof window !== 'undefined') {
    return (
      <div>
        <Map center={position} zoom={13}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
          <Marker position={position}>
            <Popup>Digi Bank Corporation #36 Cork Street,<br />
              2nd Floor, P. O. Box 1293, Roseau, Dominica</Popup>
          </Marker>
        </Map>
      </div>
    )
  }

  return null
}

export default MapPage