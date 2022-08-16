import React, { useRef, useEffect, useState } from "react";
import * as style from "./styles";
import "./infoWindow.css";
import useGeolocation from "./useGeolocation";
import NewMarker from "assets/images/newMarker.png";
import FollowMarker from "assets/images/followMarker.png";
import SearchInput from "./SearchInput";



const Map = () => {
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
  const [latLngs, setLatLng] = useState([]);
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
        setLatLng([
          ...latLngs,
          {
            //변환된 좌표 배열에 추가
            lat: coords.Ma,
            lon: coords.La,
          },
        ]);
        displayMarker(coords.Ma, coords.La )
        console.log("주소 검색 완료되었습니다⭕",coords.Ma, coords.La );
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
    
    kakao.maps.event.addListener(map, "click", function (mouseEvent) {
      const latlng = mouseEvent.latLng; // 클릭한 위도, 경도 정보를 가져옵니다
      marker.setPosition(latlng); // 마커 위치를 클릭한 위치로 옮깁니다
      circle.setPosition(latlng);
      searchDetailAddrFromCoords(latlng, function (result, status) {//클릭 끝난 마커 좌표로 도로명 주소 가져오기
        if (status === kakao.maps.services.Status.OK) {
          setPopup(false); // 도로명주소 팝업 false로 변경 -> 주소검색창 재사용하도록
          setAddress(result[0].road_address.address_name); // 가져온 도로명주소로 address 업데이트
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
      isopen = true;
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

    let isopen = true;
    kakao.maps.event.addListener(marker, "click", function () {
      // 마커 위에 인포윈도우를 표시합니다
      if (isopen) {
        infowindow.open(map, marker);
        isopen = false;
      } else {
        infowindow.close();
        isopen = true;
      }
    });
  };

  // 최초 랜더링, latLngs(좌표)업데이트 될때마다 랜더링 - 하나의 마커만 생성
  // useEffect(() => {
  //   console.log("가장 최근 주소 좌표 : ", latLngs.slice(-1)[0]);
  //   if (latLngs.length > 0) {
  //     markers.map((marker) => {
  //       marker.marker.setMap(null);
  //       marker.circle.setMap(null);
  //     }); // 마커 배열이 한템포 늦게 업데이트 됨 이거 이용해서 업데이트 전 배열안에 있는 마커들은 삭제(배열은 그대로).
  //     const lat = latLngs.slice(-1)[0].lat;
  //     const lon = latLngs.slice(-1)[0].lon;
  //     displayMarker(lat, lon); // 좌표 배열 중 제일 최신 객체 좌표로 마커 생성.
  //   }
  // }, [latLngs]); // 좌표가 업데이트 되는 경우는 검색버튼을 클릭했을 때뿐.

  return (
    <>
        <style.Container>
            <SearchInput 
              popup={popup} 
              setPopup={setPopup} 
              address={address} 
              setAddress={setAddress} 
              searchAndMoveByAddress={searchAndMove}
            />
            <style.MapContainer ref={container}></style.MapContainer>
        </style.Container>
    </>
  );
};

export default Map;
