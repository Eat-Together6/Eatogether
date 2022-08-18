import React from "react";
import * as style from "./styles";
import { createOrder } from "api/order";
import { addLocation } from "api/location";
import { useRecoilState } from "recoil";
import locationState from "state/locationState";
import { Link } from "react-router-dom";

const WriteEnd = ({ setEnd, data }) => {
  const address = useRecoilState(locationState);
  const postOrder = async () => {
    await addLocation({
      location_nickname: address[0].address,
      latitude: address[0].latitude,
      longitude: address[0].longitude,
    })
      .then((res) => {
        createOrder({
          location: res.data.id,
          max_joined_user: data.maxJoiner,
          description: data.description,
          time: data.date + "T" + data.time,
          store: data.store,
        }).then((res) => {
          alert("성공");
        });
      })
      .catch((e) => alert("실패", e));
  };
  const check = () => {
    if (!!data.store && !!data.date && !!data.time && !!data.maxJoiner) {
      postOrder();
    } else {
      alert("전달사항 외 모든 정보를 입력해주세요");
    }
  };

  return (
    <style.Div>
      <style.Wrap>
        <style.Table>
          <tr>
            <td>픽업 위치 :</td>
            <td>{data.address}</td>
          </tr>
          <tr>
            <td>음식점명 :</td>
            <td>{data.store}</td>
          </tr>
          <tr>
            <td>주문 희망 날짜 :</td>
            <td>{data.date}</td>
          </tr>
          <tr>
            <td>주문 희망 시간 :</td>
            <td>{data.time}</td>
          </tr>
          <tr>
            <td>최대 인원 수 :</td>
            <td>{data.maxJoiner}</td>
          </tr>
          <tr>
            <td>전달 사항 :</td>
            <td>{data.description}</td>
          </tr>
        </style.Table>
      </style.Wrap>
      <style.Button
        onClick={() => {
          setEnd(false);
        }}
      >
        수정
      </style.Button>
      <Link to="/">
        <style.Button
          onClick={() => {
            check();
          }}
        >
          등록
        </style.Button>
      </Link>
    </style.Div>
  );
};

export default WriteEnd;
