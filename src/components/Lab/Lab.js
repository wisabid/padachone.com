import React, { useState, useEffect } from 'react';
import {geolocated} from 'react-geolocated';
import moment from 'moment'; 
import Traveltimes from './Traveltimes'
import Map from '../Lab/Map'
import Search from '../Lab/Search';
import Timer from '../Timer/Timer';
import { tConvert } from '../../utils';
import Bgmusic from '../Prayers/Bgmusic'
import sufi from '../../assets/mp3/bgmusic.mp3'
import Subscribe from '../Subscribe/Subscribe';

const Lab = (props) => {
    const {timings} = props;
    const [onlyPrayers, setOnlyPrayers] = useState({})
    
    useEffect(() => {
        if (timings.hasOwnProperty('Fajr')) {
            let justPrayers = Object.keys(timings).reduce((all, item) => { 
                if (['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'].indexOf(item) !== -1) {
                    all[item] = timings[item];              
                }
                return all;          
              }, {});
            setOnlyPrayers(justPrayers)
        }
    }, [timings])
    
    return (
        <>
        <Bgmusic bgm={sufi}/>
        <h4 style={{marginTop: '40px'}}>Lab (Alpha Releases)</h4>
        <h5>Subscribe</h5>
        <Subscribe />

        <h5>Your TZ : {moment.tz.guess()}</h5>
        {onlyPrayers.hasOwnProperty('Fajr') && <Timer timezone={props.timezone} prayers={onlyPrayers}/>}
        {/* <h1>Welcome Alfie</h1>
          <CountryDropdown
          value={country}
          onChange={(val) => selectCountry(val)} />
        <RegionDropdown
          country={country}
          value={region}
          onChange={(val) => selectRegion(val)} /> */}

        {!props.isGeolocationAvailable
            ?<div>Your browser does not support Geolocation</div>
            :!props.isGeolocationEnabled
                ?<div style={{marginTop:'30px'}}><h5 >Message from Lab : "Geolocation is not enabled. Please enable location. Please refresh to go back"</h5></div>
                :props.coords
                    ? <div>
                      {/* <table>
                    <tbody>
                        <tr><td>latitude</td><td>{props.coords.latitude}</td></tr>
                        <tr><td>longitude</td><td>{props.coords.longitude}</td></tr>
                        <tr><td>altitude</td><td>{props.coords.altitude}</td></tr>
                        <tr><td>heading</td><td>{props.coords.heading}</td></tr>
                        <tr><td>speed</td><td>{props.coords.speed}</td></tr>
                    </tbody>
                    </table> */}
                    
                    <h5>Travel Times</h5>
                    <Traveltimes lat={props.coords.latitude} lon={props.coords.longitude} />
                    <h5>Custom Search</h5>
                    <Search lat={props.coords.latitude} lon={props.coords.longitude}/>
                    
                    <h5>Mosque Map</h5>
                    <div style={{width: '100%', height:'90vh'}}><Map lat={props.coords.latitude} lon={props.coords.longitude} /></div>
                    </div>
                    : <div>Getting the location data&hellip; </div>
                }
                {/* <h4>Lab Alpha Releases</h4> */}
              {/* <Traveltimes lat="52.31406610552598" lon="4.946411339519716" /> */}
              {/* <div style={{width: '100%', height:'90vh'}}><Map lat="52.31406610552598" lon="4.946411339519716" /></div> */}
              {/* <Search lat="52.31406610552598" lon="4.946411339519716" /> */}
        </>
    )
}

export default geolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  })(Lab);