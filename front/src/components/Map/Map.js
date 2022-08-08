import React, {useRef, useEffect, useState} from "react";
import useGeolocation from "./useGeolocation";
import NavStyle from "./NavStyle.module.css";

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
    
    //주소 검색 후 해당 위치로 지도 중심 옮기기
    const searchAndMoveByAddress = () => {
        const geocoder = new kakao.maps.services.Geocoder();
        

        geocoder.addressSearch('서울특별시 성북구 솔샘로 44(정릉동)', function(result, status){
            if(status === kakao.maps.services.Status.OK) {
                const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                map.setCenter(coords);
            } else{
                console.log("주소가 정확하지 않습니다❌")
            }
        });
    };
    
    return (
        <>
        <div className={NavStyle.inputWrapper}>
            <form action="" method="">
                <input 
                    type="text" 
                    className={NavStyle.addressInput} 
                    placeholder="2km 오차가 있을 수 있으니 정확한 주소를 입력해주세요" 
                />
                <input 
                    type="button" 
                    className={NavStyle.imgBtn} 
                    onClick={searchAndMoveByAddress}
                />
            </form>
        </div>
            
            <div ref={container} style={{width:'auto', height: '100vh'}}></div>
        </>
    );
}

export default Map;