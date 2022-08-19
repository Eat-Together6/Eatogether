import React, { useRef, useEffect, useState } from "react";
import sidebar from "./sidebar.module.css";
import axios from "../../api/config";
import { getLocations } from "api/location";
import { format } from "date-fns";
import { getOrder } from "api/order.js";

function formatDate(date) {
  return format(date, "HH:mm");
}

const SideBar = ({ orders }) => {
  // const [coordinates, setCoordinates] =useState([])
  // const retreiveLocations = async() => {
  //   await getLocations()
  //   .then((res) => {
  //     setCoordinates(res.data.map(item =>(
  //       {lat:item.latitude, long:item.logitude}
  //       )))
  //     console.log(res.data)
  //     }
  //       )

  // }
  // console.log(coordinates)

  // 사이드바 나타내기 및 숨기기
  const [arrow, setArrow] = useState({
    active: true,
  });

  const isActive = (e) => {
    setArrow({
      active: !arrow.active,
    });
  };

  return (
    <div className={sidebar.wrapper}>
      <input
        type="button"
        className={
          arrow.active
            ? sidebar.arrow
            : `${sidebar.arrow} ${sidebar.arrowActive}`
        }
        onClick={isActive}
      />
      <div
        className={
          arrow.active
            ? sidebar.sidebar
            : `${sidebar.sidebar} ${sidebar.sidebarActive}`
        }
      >
        <div className={sidebar.title}>Order List</div>
        <div className={sidebar.content}>
          {orders &&
            orders.map((i) => {
              return (
                <div className={sidebar.myorder}>
                  <div>
                    <br></br>
                    {i.store} {formatDate(new Date(i.time))}
                    <br></br>
                    주문을 기다리는 중 ! !
                  </div>
                </div>
              );
            })}

          <div className={sidebar.otherorder}></div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
