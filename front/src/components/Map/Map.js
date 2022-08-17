import React, { useRef, useEffect, useState } from "react";
import * as style from "./styles";
import "./infoWindow.css";
import useGeolocation from "./useGeolocation";
import NewMarker from "assets/images/createMK.png";
import FollowMarker from "assets/images/followMK.png";
import SearchInput from "./SearchInput";
import { useRecoilState } from "recoil";
import locationState from "state/locationState";



const Map = ({setClickLeaderMK, setClickFollowMK}) => {
  const [, setLocation] = useRecoilState(locationState);
  const location = useGeolocation();
  const { kakao } = window;
  const [map, setMap] = useState();
  const container = useRef();
  const options = {
    center: new kakao.maps.LatLng(
      location.coordinates.lat,
      location.coordinates.lng
    ),
    level: 4,
  };
  useEffect(() => {
    setMap(new kakao.maps.Map(container.current, options));
  }, [location]);

  const [popup, setPopup] = useState(false);
  const [address, setAddress] = useState(); 
  const [markers, setMarker] = useState([]);
  const [followMarkers, setFollowMarker] = useState([
    {
      id: 1,
      lat: 37.6426777370276,
      lon: 127.005734734447,
    }
  ]);

  useEffect(() => {
    followMarkers.map((followMarker) => {
      displayFollowMarker(followMarker.lat, followMarker.lon);
    });
  });

  const geocoder = new kakao.maps.services.Geocoder(); //주소-좌표 변환 객체 생성

  const searchAndMove = () => {
    if(markers.length > 0) {
      markers.map((marker) => {
        marker.marker.setMap(null)
        marker.circle.setMap(null)
      })
    }
    geocoder.addressSearch(address, function (result, status) {
      //주소를 좌표로 변환
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        map.setCenter(coords); //변환된 좌표를 지도 중심으로 이동
        displayMarker(coords.Ma, coords.La )
        console.log("주소 검색 완료되었습니다⭕");
        setLocation({
          address: address,
          latitude: coords.Ma,
          longitude: coords.La,
        })
      } else {
        alert("주소가 정확하지 않습니다❌");
      }
    });
  };
   
  // 입력 주소로 마크 표시
  const displayMarker = (lat, lon) => {
    const imageSrc = NewMarker;
    const imageSize = new kakao.maps.Size(50, 50);
    const imageOption = { offset: new kakao.maps.Point(20, 50) };  // 마커 이미지 파일 경로, 사이즈, 주소 좌표 일치시킬 이미지 좌표 옵션
    const marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(lat, lon),
      image: new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
      draggable: true,
    });
    const circle = new kakao.maps.Circle({
      center: new kakao.maps.LatLng(lat, lon), 
      radius: 200, 
      strokeWeight: 0, 
      fillColor: "#B1B1B1", 
      fillOpacity: 0.4,
    });

    marker.setMap(map);
    circle.setMap(map);

    setMarker([...markers, {
      marker: marker,
      circle: circle
    }])

    kakao.maps.event.addListener(marker, 'click', function() {
      setClickLeaderMK(true);
      setClickFollowMK(false);
    });

    kakao.maps.event.addListener(marker, 'dragend', function() {
      setClickLeaderMK(false);
      setClickFollowMK(false);
      circle.setPosition(marker.getPosition())
      searchDetailAddrFromCoords(marker.getPosition(), function(result, status){
          if(status === kakao.maps.services.Status.OK){
              setPopup(false)
              setAddress(result[0].road_address.address_name)
              setLocation({
                address: result[0].road_address.address_name,
                latitude: marker.getPosition().Ma,
                longitude: marker.getPosition().La,
              });
            }
        })
    });
    
    kakao.maps.event.addListener(map, "click", function (mouseEvent) {
      
      setClickLeaderMK(false);
      setClickFollowMK(false);
      const latlng = mouseEvent.latLng; // 클릭한 위도, 경도 정보를 가져옵니다
      marker.setPosition(latlng); // 마커 위치를 클릭한 위치로 옮깁니다
      circle.setPosition(latlng);
      searchDetailAddrFromCoords(latlng, function (result, status) {//클릭 끝난 마커 좌표로 도로명 주소 가져오기
        if (status === kakao.maps.services.Status.OK) {
          setPopup(false); // 도로명주소 팝업 false로 변경 -> 주소검색창 재사용하도록
          setAddress(result[0].road_address.address_name); // 가져온 도로명주소로 address 업데이트
          setLocation({
            address: result[0].road_address.address_name,
            latitude: latlng.Ma,
            longitude: latlng.La,
          })
        }
      });
    });

    
  };
  
  function searchDetailAddrFromCoords(coords, callback) { // 좌표로 법정동 상세 주소 정보를 요청합니다
    geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
  }

  const displayFollowMarker = (lat, lon) => {
    const imageSrc = FollowMarker;
    const imageSize = new kakao.maps.Size(50, 50);
    const imageOption = { offset: new kakao.maps.Point(20, 50) };
    // 마커 이미지 파일 경로, 사이즈, 주소 좌표 일치시킬 이미지 좌표 옵션
    const marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(lat, lon),
      image: new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
    });
    marker.setMap(map); // 마커 지도에 표시

    let iwContent = document.createElement("div");
    iwContent.classList.add("infoWrap");
    iwContent.addEventListener("click", () => {
      infowindow.close();
      setClickFollowMK(false);
      
    });

    let storeName = document.createElement("div");
    storeName.textContent = "long long store name";
    storeName.classList.add("storeName");

    let time = document.createElement("div");
    time.textContent = "15:00 주문예정";
    time.classList.add("time");

    let joinNum = document.createElement("div");
    joinNum.textContent = " 2 / 4 참여 중";
    joinNum.classList.add("joinNum");

    let orderState = document.createElement("div");
    orderState.textContent = "주문 중";
    orderState.classList.add("orderState");

    iwContent.append(storeName, time, joinNum, orderState);

    const infowindow = new kakao.maps.InfoWindow({
      content: iwContent,
    });

    // let isopen = true;
    kakao.maps.event.addListener(marker, "click", function () {
      // 마커 위에 인포윈도우를 표시합니다
      setClickLeaderMK(false);
      setClickFollowMK(true);
      infowindow.open(map,marker);
    });
  };
  return (
    <>
        <style.Container>
            <SearchInput 
              popup={popup} 
              setPopup={setPopup} 
              address={address} 
              setAddress={setAddress} 
              searchAndMove={searchAndMove}
            />
            <style.MapContainer ref={container}></style.MapContainer>
        </style.Container>
    </>
  );
};

export default Map;
