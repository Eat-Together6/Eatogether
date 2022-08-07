import React, {useRef, useEffect, useState} from "react";
import useGeolocation from "./useGeolocation";

const Map = () => {
    const location = useGeolocation();
    
    const {kakao} = window;
    const [map, setMap] = useState();
    const container = useRef();

    const options = {
        center: new kakao.maps.LatLng(location.coordinates.lat, location.coordinates.lng),
		level: 4
    };

    useEffect(()=>{
        setMap(new kakao.maps.Map(container.current, options));
    },[location]);
    

    return (
        <>
            <div ref={container} style={{width:'auto', height: '100vh'}}></div>
        </>
    );
}

export default Map;