import React, { useEffect, useState } from "react";
import * as style from "./styles";
import PagiButton from "components/EtcItem/PagiButton";

const OrderHistory = () => {

    const[historydata, setHistoryData] = useState({username: "미스포츈", month: "3", day: "5", time:"15:00", crew:"A"});
    const[pagebutton, setPageButton] = useState({pagenumber: 1})

    useEffect(()=>{
        //데이터 받아오기 await async check!
    }, []);

    return (
        <style.Container>
            <style.HistoryCard>
                <style.Title>{historydata.username}님의 주문내역</style.Title>
                <style.HistoryWrap>
                    <style.HistoryText>{historydata.username}님은 {historydata.month}/{historydata.day} {historydata.time}  {historydata.crew}님과 함께 주문을 했었어요</style.HistoryText>
                    <style.HistoryText>{historydata.username}님은 {historydata.month}/{historydata.day} {historydata.time}  {historydata.crew}님과 함께 주문을 했었어요</style.HistoryText>
                    <style.HistoryText>{historydata.username}님은 {historydata.month}/{historydata.day} {historydata.time}  {historydata.crew}님과 함께 주문을 했었어요</style.HistoryText>
                    <style.HistoryText>{historydata.username}님은 {historydata.month}/{historydata.day} {historydata.time}  {historydata.crew}님과 함께 주문을 했었어요</style.HistoryText>
                    <style.HistoryText>{historydata.username}님은 {historydata.month}/{historydata.day} {historydata.time}  {historydata.crew}님과 함께 주문을 했었어요</style.HistoryText>
                </style.HistoryWrap>
                <style.BtnWrap>
                    <style.MoveButton>이전</style.MoveButton>
                    <PagiButton btnlabel={pagebutton.pagenumber}/>
                    <style.MoveButton>다음</style.MoveButton>
                </style.BtnWrap>
            </style.HistoryCard>
        </style.Container>
    );
}
export default OrderHistory;