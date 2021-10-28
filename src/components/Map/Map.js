import React, { Component } from 'react';
import './Map.css';
import { GeoJSON, MapContainer, CircleMarker, Circle} from 'react-leaflet';
import {  TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import mapData from '../data/mapData.json';
import teslaData from '../data/tesla.json';
import citiesData from '../data/us_cities.json';
import tempData from '../data/tempData.json'
import L from 'leaflet';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;


const position = [40.7127837,-74.0059413];

const redOptions = { color: 'red' }
const orangeOptions = {color: 'orange'}
const greenOptions = {color:'lightgreen'}
const blueoptions = {color:'blue'}

class Map extends Component {
    state={};
    colorPicker(x){
        if(x>=85){
            return redOptions;
        }else if(x<85&&x>=75){
            return orangeOptions;
        }else if(x<75&&x>=60){
            return greenOptions;
        }else{
            return blueoptions;
        }

    }
    render() {
        return (
            
            <MapContainer center={position} zoom={4} scrollWheelZoom={true}>
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                
                {tempData.map(city=>(
                    <CircleMarker 
                        center={[city.latitude,city.longitude]}
                        pathOptions={this.colorPicker(city.temp)

                        } 




                        radius={20}>
                            <Popup className='popup'>
                                City: {city.city}<br />
                                Temperature: {city.temp}
                            </Popup>
                    </CircleMarker>
                ))}
                <Circle center={position} pathOptions={{fillColor: 'blue'}} radius={600}></Circle>
          </MapContainer>
            
        );
    }
}

export default Map;



