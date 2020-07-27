import React from 'react'
// import L from 'leaflet';
// import { TileLayer, Marker, Popup,LayersControl,FeatureGroup,Circle } from 'react-leaflet';
// import Control from 'react-leaflet-control';
// import MarkerClusterGroup from "react-leaflet-markercluster";
import { Button, Tooltip } from 'antd';
import { ExpandAltOutlined } from '@ant-design/icons';

import { YMaps, Map, Placemark, RoutePanel } from 'react-yandex-maps';

// import leafGreen from './assets/pin.png';
// import leafRed from './assets/leaf-red.png';
// import leafOrange from './assets/leaf-orange.png';
// import leafShadow from './assets/leaf-shadow.png';

// import "leaflet/dist/leaflet.css";
// import 'react-leaflet-markercluster/dist/styles.min.css';

import {
  MapContainer,
  Container,
} from './styles.js';

import './style.css'


class Maps extends React.Component {
  render() {
    return (
      <Container>
            <YMaps className='mapsSize'>
              <Map className='mapsSize' defaultState={{ center: [43.40373797, 39.96738195,], zoom: 14, controls: [], }}>
              <Placemark geometry={[43.40373797, 39.96738195,]} />
              </Map>
          </YMaps>
          </Container>
    );
  }
}

export default Maps;