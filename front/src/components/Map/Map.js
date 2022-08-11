import React, {useRef, useEffect, useState} from "react";
import useGeolocation from "./useGeolocation";
import NavStyle from "./NavStyle.module.css";
import NewMarker from '../../assets/newMarker.png'
import Post from "./Post";
import { PopperUnstyled } from "@mui/base";

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
    const [latLng, setLatLng] = useState({
        lat:0,
        lon:0
    });
    const geocoder = new kakao.maps.services.Geocoder();

    const searchAndMoveByAddress = () => {
        console.log('searchAndMoveByAddress :'+ address)
        geocoder.addressSearch(address, function(result, status){
            if(status === kakao.maps.services.Status.OK) {
                const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                map.setCenter(coords);
                setLatLng({
                    lat: coords.Ma,
                    lon: coords.La
                }) // 주소 좌표로 변환하기 아직 쓸일 없는거 같음
                displayMarker(coords.Ma, coords.La)
                console.log("주소 검색 완료되었습니다⭕")
            } else{
                console.log("주소가 정확하지 않습니다❌")
            }
        });
    };
    
    // 입력 주소로 마크 표시
    const displayMarker = (lat, lon) => {
        // 마커 이미지 파일 경로, 사이즈, 주소 좌표 일치시킬 이미지 좌표 옵션
        const imageSrc = NewMarker;
        const imageSize = new kakao.maps.Size(50,50);
        const imageOption = {offset: new kakao.maps.Point(20,50)};
        const markerImage = new kakao.maps.MarkerImage(imageSrc,imageSize,imageOption)
        const markerPosition = new kakao.maps.LatLng(lat, lon);
        const marker = new kakao.maps.Marker({
            position: markerPosition,
            image: markerImage,
            draggable: true
        });
        // console.log(markerPosition.latLng)
        marker.setMap(map);
        // marker.setDraggable(true);
        console.log("마커가 표시되었습니다✅")

        kakao.maps.event.addListener(marker, 'dragend', function() {
            searchDetailAddrFromCoords(marker.getPosition(), function(result, status){
                if(status === kakao.maps.services.Status.OK){
                    setPopup(!popup)
                    setAddress(result[0].road_address.address_name)
                }
            })
        });
    }
    console.log("주소값 : ", address)
    function searchDetailAddrFromCoords(coords, callback) {
        // 좌표로 법정동 상세 주소 정보를 요청합니다
        geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
    }

    const [popup, setPopup] = useState(false);
    console.log(popup)

    return (
        <div>
        <div className={NavStyle.inputWrapper}>
            <form action="" method="">
                <input 
                    type="text" 
                    className={NavStyle.addressInput} 
                    placeholder="주소를 입력해주세요"
                    onClick={()=>{
                        setPopup(!popup)
                    }}
                    value={address}
                /> 
                
                <input 
                    type="button" 
                    className={NavStyle.imgBtn} 
                    onClick={searchAndMoveByAddress}
                />
                {popup && <Post setAddress={setAddress} />}
            </form>
        </div>
        
        <div ref={container} className={NavStyle.map}></div>
        </div>
    );
}

export default Map;