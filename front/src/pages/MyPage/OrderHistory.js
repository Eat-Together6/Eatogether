import React, { useEffect, useState } from "react";
import * as style from "./styles";
import PagiButton from "components/EtcItem/PagiButton";
import {getOrderAndJoinOrders} from "api/order";

const OrderHistory = () => {
    const[historydata, setHistoryData] = useState({
        name: "미스포츈",
        month: "3",
        day: "5",
        time:"15:00",
        crew:"A"
    });
    
    const[pagebutton, setPageButton] = useState({
        pagenumber: 1
    });

    const [testData, setTestData] = useState([1,2,3,4,5,6,7,8,9,10,11]);

    const getHistoryData = async() => {
        await getOrderAndJoinOrders("user")
        .then((response) => {
          console.log(response)
        });
      }
    

    useEffect(()=>{
        getHistoryData()
        //데이터 받아오기 await async check!
    }, []);

    const PagiNationPrev = () => {
        setPageButton((e)=>{return {pagenumber: e.pagenumber>1? e.pagenumber-1 : 1}});
    }

    const PagiNationNext = () => {
        setPageButton((e)=>{return {pagenumber: e.pagenumber<testData.length/5? e.pagenumber+1 : e.pagenumber}});
    }
    return (
        <style.Container>
            <style.HistoryCard>
                <style.Title>{historydata.username}님의 주문내역</style.Title>
                <style.HistoryWrap>
                    {testData.map( (e,i) => <style.HistoryText style={{display: (pagebutton.pagenumber-1)*5 <= i && i<(pagebutton.pagenumber-1)*5+5 ? "flex" : "none"}}>{historydata.username}님은 {historydata.month}/{historydata.day} {historydata.time} {historydata.crew}님과 주문했어요</style.HistoryText>)}
                </style.HistoryWrap>
                <style.BtnWrap>
                    <style.MoveButton onClick={PagiNationPrev}>이전</style.MoveButton>
                    <PagiButton btnlabel={pagebutton.pagenumber}/>
                    <style.MoveButton onClick={PagiNationNext}>다음</style.MoveButton>
                </style.BtnWrap>
            </style.HistoryCard>
        </style.Container>
    );
}
export default OrderHistory;