import React from "react";
import * as style from "./styles";

const WriteEnd = ({menuData}) => {
    return(
        <style.Wrap>
            <style.Table>
                <tr>
                    <td>픽업 위치</td>
                    <td>{menuData.address}</td>
                </tr>
                <tr>
                    <td>음식점명</td>
                    <td>{menuData.storeName}</td>
                </tr>
                <tr>
                    <td>주문 희망 날짜</td>
                    <td>{menuData.date}</td>
                </tr>
                <tr>
                    <td>주문 희망 시간</td>
                    <td>{menuData.time}</td>
                </tr>
                <tr>
                    <td>전달사항</td>
                    <td>{menuData.description}</td>
                </tr>
            </style.Table>
        </style.Wrap>
    );
}

export default WriteEnd;