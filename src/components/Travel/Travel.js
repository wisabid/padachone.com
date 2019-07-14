import React, {useState, useContext} from 'react';
import {geolocated} from 'react-geolocated';
import Traveltimes from './Traveltimes';
import SiteMessage from '../Messages/SiteMessage';
import {useRenderCounts} from '../../hooks/api-hooks';
import {UserContext} from '../../store/context/userContext';
// import Bgmusic from '../Prayers/Bgmusic'
// import bgm from '../../assets/mp3/quietTime.mp3'

const Travel = (props) => {
    useRenderCounts('Travel.js');
    const [music, setMusic] = useState({show: false, playing : false});
    const [volume, setVolume] = React.useState(false);
    const {visitor : {latitude, longitude}} = useContext(UserContext);
    return (
        <>
            {/* <Bgmusic bgm={bgm} volume={volume} setPlaying={() => {setMusic({show: true, playing : true})}}/> */}
            {!props.isGeolocationAvailable
                ?<SiteMessage type="info" message={`Your browser does not support Geolocation. Please refresh to go back`} action="Refresh" />
                :!props.isGeolocationEnabled
                    ?(latitude && longitude)
                        ?<Traveltimes 
                            lat={latitude} 
                            lon={longitude} 
                            music={music} 
                            setMusic={setMusic} 
                            volume={volume} 
                            setVolume={setVolume}
                        />
                        :<div>
                        <SiteMessage type="info" message={`Geolocation is not enabled. Please enable location. Please refresh to go back`} action="Refresh" />
                        {/* <h5 >Message from Lab : "Geolocation is not enabled. Please enable location. Please <a href="/">refresh</a> to go back"</h5> */}
                    </div>
                    :props.coords
                        ?<>
                            <Traveltimes 
                                lat={props.coords.latitude} 
                                lon={props.coords.longitude} 
                                music={music} 
                                setMusic={setMusic} 
                                volume={volume} 
                                setVolume={setVolume}
                            />
                        </>
                        :<div>Getting the location data&hellip; </div>
            }  
                     {/* me */}
            {/* <Traveltimes lat="52.3741198" lon="4.9630779" music={music} setMusic={setMusic} volume={volume} setVolume={setVolume} method={props.method} school={props.school}/> */}
        </>
    )
}

export default geolocated({
    positionOptions: {
      enableHighAccuracy: true,
    },
    userDecisionTimeout: 5000,
  })(Travel);