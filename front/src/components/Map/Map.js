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

    const [address, setAddress] = useState();

    const searchAddress = (e) => {
        setAddress(e.target.value)
    }
    const [latLng, setLatLng] = useState({
        lat:0,
        lon:0
    });

    const searchAndMoveByAddress = () => {
        
        const geocoder = new kakao.maps.services.Geocoder();
        
        console.log('searchAndMoveByAddress :'+ address)
        geocoder.addressSearch(address, function(result, status){
            if(status === kakao.maps.services.Status.OK) {
                const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                map.setCenter(coords);
                setLatLng({
                    lat: coords.Ma,
                    lon: coords.La
                }) // 주소 좌표로 변환하기
                (() => {
                    
                })
                
            } else{
                console.log("주소가 정확하지 않습니다❌")
            }
        });
    };
    
    // 입력 주소로 마크 표시
    const displayMarker = () => {
        // 마커 이미지 파일 경로, 사이즈, 주소 좌표 일치시킬 이미지 좌표 옵션
        const imageSrc = 'https://cdn-user-icons.flaticon.com/76554/76554220/1660026748603.svg?token=exp=1660027650~hmac=3b8ffd882da33c344c651ea22bff73f5';
        const imageSize = new kakao.maps.Size(50,50);
        const imageOption = {offset: new kakao.maps.Point(20,50)};

        const markerImage = new kakao.maps.MarkerImage(imageSrc,imageSize,imageOption)
        
        const markerPosition = new kakao.maps.LatLng(latLng.lat, latLng.lon);
        const marker = new kakao.maps.Marker({
            position: markerPosition,
            image: markerImage
        });
        // console.log(markerPosition.latLng)
        marker.setMap(map);
    }
    
    return (
        <>
        <div className={NavStyle.inputWrapper}>
            <form action="" method="">
                <input 
                    type="text" 
                    className={NavStyle.addressInput} 
                    placeholder="주소를 입력해주세요"
                    onChange={searchAddress}
                />
                <input 
                    type="button" 
                    className={NavStyle.imgBtn} 
                    onClick={() => {
                        searchAndMoveByAddress()
                        displayMarker()
                        }
                    }
                />
            </form>
        </div>
        
        <div ref={container} className={NavStyle.map} style={{}}></div>
        </>
    );
}

export default Map;