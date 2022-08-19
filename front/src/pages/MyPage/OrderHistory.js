import React, { useEffect, useState } from "react";
import * as style from "./styles";
import PagiButton from "components/EtcItem/PagiButton";
import { getOrders } from "api/order";
import auth from "api/auth";

const OrderHistory = () => {
    const[historydata, setHistoryData] = useState([{
        store: "bbq",
        time:"15:00",
    }]);
    
    const[pagebutton, setPageButton] = useState({
        pagenumber: 1
    });

    const [userdata, setUserData] = useState({
        name: "케이틀린"
      });

    const getHistoryData = async() => {
        await getOrders()
        .then((response) => {
          console.log(response)
          setHistoryData(response.data)
        });

        await auth.getUser()
        .then((response) => {
        console.log(response)
        setUserData(response.data)
        });
    }
    

    useEffect(()=>{
        getHistoryData()
        //데이터 받아오기 await async check!
    }, []);

    const PagiNationPrev = () => {
        setPageButton((data)=>{return {pagenumber: data.pagenumber>1? data.pagenumber-1 : 1}});
    }

    const PagiNationNext = () => {
        setPageButton((data)=>{return {pagenumber: data.pagenumber<data.length/5? data.pagenumber+1 : data.pagenumber}});
    }
    return (
        <style.Container>
            <style.HistoryCard>
                <style.Title>{userdata.name}님의 주문내역</style.Title>
                <style.HistoryWrap>
                    {historydata.map( (data,i) => <style.HistoryText style={{display: (pagebutton.pagenumber-1)*5 <= i && i<(pagebutton.pagenumber-1)*5+5 ? "flex" : "none"}}>{data.time}에 {data.store}에서 주문했어요</style.HistoryText>)}
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