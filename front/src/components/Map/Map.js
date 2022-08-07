import React, {useRef, useEffect, useState} from "react";

const Map = () => {

    const {kakao} = window;
    const [map, setMap] = useState();
    const container = useRef();
    const options = {
        center: new kakao.maps.LatLng(37.537183, 127.005454),
		level: 3
    };

    useEffect(()=>{
        setMap(new kakao.maps.Map(container.current, options));
    },[]);
    

    return (
        <>
            <div ref={container} style={{width:'auto', height: '100vh'}}></div>
        </>
    );
}

export default Map;