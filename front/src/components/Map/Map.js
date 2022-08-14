import React, {useRef, useEffect, useState} from "react";
import useGeolocation from "./useGeolocation";
import NavStyle from "./NavStyle.module.css";
import NewMarker from '../../assets/newMarker.png'
import FollowMarker from '../../assets/followMarker.png';
import Post from "./Post";
import { PopperUnstyled } from "@mui/base";

const Map = () => {
    const location = useGeolocation();
    const {kakao} = window;
    const [map, setMap] = useState();
    const container = useRef();
    const options = {
        center: new kakao.maps.LatLng(location.coordinates.lat, location.coordinates.lng),
		level: 3
    };
    useEffect(()=>{
        setMap(new kakao.maps.Map(container.current, options));
    },[location]);
    
    //주소 검색 후 해당 위치로 지도 중심 옮기기
    const [popup, setPopup] = useState(false); //true: 도로명주소 검색창 띄움
    const [address, setAddress] = useState(); // 주소 state
    const [markers, setMarker] = useState([]); // 마커 배열
    const [circles, setCircle] = useState([]); // 원 배열
    const [latLngs, setLatLng] = useState([]); // 좌표 배열
    const [followMarkers, setFollowMarker] = useState([
        {
            id: 1,
            lat: 37.6426777370276,
            lon: 127.005734734447,
            
        },
        {
            id: 2,
            lat: 37.643388653764,
            lon: 127.006683392309,
        },
        {
            id: 3,
            lat: 37.6437089427402,
            lon: 127.006872983831,
        }
    ]);

    useEffect(()=> {
        followMarkers.map((followMarker)=>{
            displayFollowMarker(followMarker.lat, followMarker.lon);
            console.log(0);
        })
    });

    const geocoder = new kakao.maps.services.Geocoder(); //주소-좌표 변환 객체 생성

    const searchAndMoveByAddress = () => {
        geocoder.addressSearch(address, function(result, status){ //주소를 좌표로 변환
            if(status === kakao.maps.services.Status.OK) {
                const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                map.setCenter(coords); //변환된 좌표를 지도 중심으로 이동
                setLatLng([...latLngs, { //변환된 좌표 배열에 추가
                    lat: coords.Ma,
                    lon: coords.La
                }])
                console.log("주소 검색 완료되었습니다⭕")
            } else{
                alert("주소가 정확하지 않습니다❌")
            }
        });
    };
    // 최초 랜더링, latLngs(좌표)업데이트 될때마다 랜더링 - 하나의 마커만 생성
    useEffect(()=>{
        console.log('가장 최근 주소 좌표 : ', latLngs.slice(-1)[0])

        if(latLngs.length > 0){ 
            markers.map((marker)=>{
                marker.setMap(null)
            }) // 마커 배열이 한템포 늦게 업데이트 됨 이거 이용해서 업데이트 전 배열안에 있는 마커들은 삭제(배열은 그대로).
            circles.map((circle)=>{
                circle.setMap(null)
            })
            const lat = latLngs.slice(-1)[0].lat;
            const lon = latLngs.slice(-1)[0].lon;
            displayMarker(lat, lon) // 좌표 배열 중 제일 최신 객체 좌표로 마커 생성.
            displayCircle(lat, lon)
        }
    },[latLngs]) // 좌표가 업데이트 되는 경우는 검색버튼을 클릭했을 때뿐.
    // 입력 주소로 마크 표시
    const displayMarker = (lat, lon) => {
        const imageSrc = NewMarker;
        const imageSize = new kakao.maps.Size(50,50);
        const imageOption = {offset: new kakao.maps.Point(20,50)};
        // 마커 이미지 파일 경로, 사이즈, 주소 좌표 일치시킬 이미지 좌표 옵션
        const marker = new kakao.maps.Marker({ // 마커 객체
            position: new kakao.maps.LatLng(lat, lon),
            image: new kakao.maps.MarkerImage(imageSrc,imageSize,imageOption),
            draggable: true,
        });
        marker.setMap(map); // 마커 지도에 표시
        setMarker([...markers, marker]); // 마커 배열 추가

        kakao.maps.event.addListener(marker, 'dragend', function() { // 마커 드래그가 끝나면
            searchDetailAddrFromCoords(marker.getPosition(), function(result, status){ //드래그 끝난 마커 좌표로 도로명 주소 가져오기
                if(status === kakao.maps.services.Status.OK){
                    setPopup(false) // 도로명주소 팝업 false로 변경 -> 주소검색창 재사용하도록
                    setAddress(result[0].road_address.address_name) // 가져온 도로명주소로 address 업데이트
                }
            })
        });
    }

    function searchDetailAddrFromCoords(coords, callback) { // 좌표로 법정동 상세 주소 정보를 요청합니다
        geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
    }

    const displayCircle = (lat, lon) => {
        const circle = new kakao.maps.Circle({
            center : new kakao.maps.LatLng(lat, lon),  // 원의 중심좌표 입니다 
            radius: 200, // 미터 단위의 원의 반지름
            strokeWeight: 0, // 선의 두께
            fillColor: '#B1B1B1', // 채우기 색깔
            fillOpacity: 0.4,  // 채우기 불투명도  
        }); 

        circle.setMap(map); 
        setCircle([...circles, circle]);
    }

    const displayFollowMarker = (lat, lon) => {
        const imageSrc = FollowMarker;
        const imageSize = new kakao.maps.Size(50,50);
        const imageOption = {offset: new kakao.maps.Point(20,50)};
        // 마커 이미지 파일 경로, 사이즈, 주소 좌표 일치시킬 이미지 좌표 옵션
        const marker = new kakao.maps.Marker({ // 마커 객체
            position: new kakao.maps.LatLng(lat, lon),
            image: new kakao.maps.MarkerImage(imageSrc,imageSize,imageOption),
        });
        marker.setMap(map); // 마커 지도에 표시
    }

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
                    value={address} // 업데이트될 때마다 검색창도 업데이트
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
