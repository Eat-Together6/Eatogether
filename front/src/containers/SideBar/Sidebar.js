import React, { useRef, useEffect, useState } from "react";
import sidebar from "./sidebar.module.css";
import axios from "axios";
import { getLocations } from "api/location";

const SideBar = () => {
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

  //
  async function getOrders() {
    const orders = await axios.get("http://127.0.0.1:8000/orders/").then((response) => response.data);
    setResult(orders);
    console.log("??",orders)
  }

  // 주문 state
  const [Result, setResult] = useState(null);

  // 주문 effect
  useEffect(() => {
    getOrders();
    // retreiveLocations()
  }, []);

  return (
    <div className={sidebar.wrapper}>
      <input type="button" className={arrow.active ? sidebar.arrow : `${sidebar.arrow} ${sidebar.arrowActive}`} onClick={isActive} />
      <div className={arrow.active ? sidebar.sidebar : `${sidebar.sidebar} ${sidebar.sidebarActive}`}>
        <div className={sidebar.title}>Order List</div>
        <div className={sidebar.content}>
          {Result &&
            Result.map((i) => {
              return (
                <div className={sidebar.myorder}>
                  <div>
                    {i.brand}
                    <br></br>
                    {i.time}
                    <br></br>
                    <br></br>
                  </div>
                </div>
              );
            })}

          <div className={sidebar.otherorder}></div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;