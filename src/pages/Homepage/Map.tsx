import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

class MapComponent extends React.Component {
  render() {
    const mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png'

    const options = {
      center: [50.0611242, 14.4098988],
      zoom: 16,
    }

    if (typeof window !== 'undefined') {
      return (
        <Map {...options}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={options.center} />
        </Map>
      )
    }
    return null
  }
}

export default MapComponent;
