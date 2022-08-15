import React, {useEffect, useState} from "react";
import sidebar from "./sidebar.module.css"
import styled from "styled-components";

import axios from 'axios';

const Sidebar = () => {
    axios.get('http://127.0.0.1:8000/orders/')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}


// const Sidebar = () => {
//     const [arrow, setArrow] = useState({
//         active: true
//     });

//     const isActive = (e) => {
//         setArrow({
//             active: !arrow.active
//         })
//     }
    
    
//     return (
//         <div className={sidebar.wrapper}> 
//             <input type="button" className={arrow.active ? sidebar.arrow : `${sidebar.arrow} ${sidebar.arrowActive}`} onClick={isActive} />
//                 <div className={arrow.active ? sidebar.sidebar : `${sidebar.sidebar} ${sidebar.sidebarActive}`}>
//                     <div className={sidebar.title}>Order List</div>
//                     <div className={sidebar.content}>
//                         <div className={sidebar.myorder}></div>
//                         <ul>
//                             {orders.map(order => (
//                                 <li key={order.id}>
//                                     {order.brand} ({order.time})
//                                 </li>))}
//                         </ul>
//                         <button onClick={ fetchOrders }>다시 불러오기</button>
//                     <div className={sidebar.orderlist}></div>
//                 </div>
//             </div>
//         </div>
//     );
// }

export default Sidebar; 
