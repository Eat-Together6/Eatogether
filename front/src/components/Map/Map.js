import React, { useRef, useEffect, useState } from "react";
import * as style from "./styles";
import "./infoWindow.css";
import useGeolocation from "./useGeolocation";
import NewMarker from "assets/images/createMK.png";
import FollowMarker from "assets/images/followMK.png";
import SearchInput from "./SearchInput";
import { useRecoilState } from "recoil";
import locationState from "state/locationState";
import orderState from "state/orderState";
import { getOrders } from "api/order";

const Map = ({ setClickLeaderMK, setClickFollowMK }) => {
  const { kakao } = window;
  const [, setLocation] = useRecoilState(locationState); // (address, lat, lon)전역 useState 이용
  const [, setOrderState] = useRecoilState(orderState);
  const [popup, setPopup] = useState(false); // 도로명 검색창 불러오기 boolean
  const [isClick, setIsClick] = useState(true); // 검색창에 주소 value로 입력하기 위한 useState boolean
  const [markers, setMarker] = useState([]); // 마커(+원) 객체 배열
  const geocoder = new kakao.maps.services.Geocoder(); //주소-좌표 변환 객체 생성
  const searchDetailAddrFromCoords = (coords, callback) => {
    geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
  }; // 좌표로 법정동 상세 주소 정보 요청
  const [followMarkers, setFollowMarker] = useState([
    {
      id: 999,
      lat: 37.6426777370276,
      lon: 127.005734734447,
      store: "",
      ordertime: "",
    },
  ]);

  //Map 지도 생성하기
  const location = useGeolocation(); // 첫 화면, 대강적인 나의 위치 가져옴
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
    setMap(new kakao.maps.Map(container.current, options)); // 지도 생성
  }, [location]);

  // followMarker 서버로부터 정보 받아와 지도에 표시
  const getOrderAndFollow = async () => {
    await getOrders()
      .then((res) => {
        // for (let order of res.data) {
        //   const id = order.id;
        //   const lat = order.location_obj.latitude;
        //   const lon = order.location_obj.longitude;
        //   displayFollowMarker(id, lat, lon);
        // }
        const orderList = res.data.map((order) => {
          return {
            id: order.id,
            lat: order.location_obj.latitude,
            lon: order.location_obj.longitude,
            store: order.store,
            ordertime: order.time.substring(11, 16),
          };
        });
        setFollowMarker(orderList);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getOrderAndFollow();
  }, []);

  useEffect(() => {
    followMarkers.map((followMarker) => {
      displayFollowMarker(
        followMarker.id,
        followMarker.lat,
        followMarker.lon,
        followMarker.store,
        followMarker.ordertime
      );
    });
  });

  // 여기서부터 함수 모음임 //
  //  searchAndMove 함수 : 주소 인자 받으면 좌표로 변환해 지도 이동 및 마커 생성 함수 호출
  const searchAndMove = (address) => {
    if (markers.length > 0) {
      markers.map((marker) => {
        marker.marker.setMap(null);
        marker.circle.setMap(null);
      });
    }
    geocoder.addressSearch(address, function (result, status) {
      //주소를 좌표로 변환
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        map.setCenter(coords); //변환된 좌표를 지도 중심으로 이동
        displayMarker(coords.Ma, coords.La);
        console.log("주소 검색 완료되었습니다⭕");
        setLocation({
          address: address,
          latitude: coords.Ma,
          longitude: coords.La,
        });
        setIsClick(false);
      }
    });
  };

  // displayMarker 함수 : 좌표 인자로 받아 마커 생성. (마커 반경 기능, 마커 클릭 기능, 드래그 이동 기능, 지도 클릭시 마커 이동 기능)
  const displayMarker = (lat, lon) => {
    const imageSrc = NewMarker;
    const imageSize = new kakao.maps.Size(50, 50);
    const imageOption = { offset: new kakao.maps.Point(20, 50) }; // 마커 이미지 파일 경로, 사이즈, 주소 좌표 일치시킬 이미지 좌표 옵션
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
    setClickLeaderMK(true);
    setMarker([
      ...markers,
      {
        marker: marker,
        circle: circle,
      },
    ]);

    kakao.maps.event.addListener(marker, "click", function () {
      setClickLeaderMK(true);
      setClickFollowMK(false);
    });

    kakao.maps.event.addListener(marker, "dragend", function () {
      setClickLeaderMK(true);
      setClickFollowMK(false);
      circle.setPosition(marker.getPosition());
      searchDetailAddrFromCoords(
        marker.getPosition(),
        function (result, status) {
          if (status === kakao.maps.services.Status.OK) {
            setPopup(false);
            setLocation({
              address: result[0].road_address.address_name,
              latitude: marker.getPosition().Ma,
              longitude: marker.getPosition().La,
            });
            setIsClick(false);
          }
        }
      );
    });

    kakao.maps.event.addListener(map, "click", function (mouseEvent) {
      setClickLeaderMK(true);
      setClickFollowMK(false);
      const latlng = mouseEvent.latLng; // 클릭한 위도, 경도 정보를 가져옵니다
      marker.setPosition(latlng); // 마커 위치를 클릭한 위치로 옮깁니다
      circle.setPosition(latlng);
      searchDetailAddrFromCoords(latlng, function (result, status) {
        //클릭 끝난 마커 좌표로 도로명 주소 가져오기
        if (status === kakao.maps.services.Status.OK) {
          setPopup(false); // 도로명주소 팝업 false로 변경 -> 주소검색창 재사용하도록
          setLocation({
            address: result[0].road_address.address_name,
            latitude: latlng.Ma,
            longitude: latlng.La,
          });
          setIsClick(false);
        }
      });
    });
  };

  // displayFollowMarker 함수 : 좌표 인자로 받아 마커 생성 및 info 창 생성.
  const displayFollowMarker = (id, lat, lon, store, ordertime) => {
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
    storeName.textContent = store;
    storeName.classList.add("storeName");

    let time = document.createElement("div");
    time.textContent = `${ordertime}주문예정`;
    time.classList.add("time");

    let joinNum = document.createElement("div");
    joinNum.textContent = " 2 / 4 참여 중";
    joinNum.classList.add("joinNum");

    let orderState = document.createElement("div");
    orderState.textContent = "주문 중";
    orderState.classList.add("orderState");

    iwContent.append(storeName, time, orderState);

    const infowindow = new kakao.maps.InfoWindow({
      content: iwContent,
    });

    // let isopen = true;
    kakao.maps.event.addListener(marker, "click", function () {
      // 마커 위에 인포윈도우를 표시합니다
      setClickLeaderMK(false);
      setClickFollowMK(true);
      infowindow.open(map, marker);
      console.log("마커아이디", id);
      setOrderState({
        id: id,
        availableOrders: [],
      });
    });
  };

  return (
    <>
      <style.Container>
        <SearchInput
          popup={popup}
          setPopup={setPopup}
          searchAndMove={searchAndMove}
          isClick={isClick}
          setIsClick={setIsClick}
        />
        <style.MapContainer ref={container}></style.MapContainer>
      </style.Container>
    </>
  );
};

export default Map;
