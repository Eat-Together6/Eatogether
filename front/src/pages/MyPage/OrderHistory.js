import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PagiButton from "../../components/EtcItem/PagiButton";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ececec;
`;

const HistoryCard = styled.div`
    border: 1px solid black;
    width: 600px;
    height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    border-radius: 0.55rem;
    box-shadow: 5px 5px 10px #b1b1b1, -5px -5px 10px #ffffff;
    border: 8px solid #ececec;
    outline: none;
    background-color: #ececec;
`;

const Title = styled.h1`
    font-family: 'BMHANNAPro';
    width: 100%;
    height: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px;
    font-size: 25px;
`;
const HistoryWrap = styled.span`
    width: 70%;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 20px;
`;

const HistoryText = styled.span`
    font-family: 'BMHANNAAir';
    height: 50px;
    padding: 0px 20px;
    border-radius:0.55rem;
    box-shadow: inset 3px 3px 7px #d3d3d3, inset -3px -3px 7px #ffffff;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const BtnWrap = styled.button`
    display:flex;
    margin-top: auto;
    margin-bottom: 50px;
`;

const MoveButton = styled.button`
    font-family: 'BMHANNAPro';
    background-color: #ececec;
    font-weight: 800;
    width: 50px;
    height: 38px;
    border-radius: 0.55rem;
    box-shadow: 5px 5px 10px #b1b1b1, -5px -5px 10px #ffffff;
    border: none;
    &:hover{
        box-shadow: inset 3px 3px 7px #d3d3d3,
        inset -3px -3px 7px #ffffff;
    }
    cursor: pointer;
`;

const OrderHistory = () => {

    const[historydata, setHistoryData] = useState({username: "미스포츈", month: "3", day: "5", time:"15:00", crew:"A"});
    const[pagebutton, setPageButton] = useState({pagenumber: 1})

    useEffect(()=>{
        //데이터 받아오기 await async check!
    }, []);

    return (
        <Container>
            <HistoryCard>
                <Title>{historydata.username}님의 주문내역</Title>
                <HistoryWrap>
                    <HistoryText>{historydata.username}님은 {historydata.month}/{historydata.day} {historydata.time}  {historydata.crew}님과 함께 주문을 했었어요</HistoryText>
                    <HistoryText>{historydata.username}님은 {historydata.month}/{historydata.day} {historydata.time}  {historydata.crew}님과 함께 주문을 했었어요</HistoryText>
                    <HistoryText>{historydata.username}님은 {historydata.month}/{historydata.day} {historydata.time}  {historydata.crew}님과 함께 주문을 했었어요</HistoryText>
                    <HistoryText>{historydata.username}님은 {historydata.month}/{historydata.day} {historydata.time}  {historydata.crew}님과 함께 주문을 했었어요</HistoryText>
                    <HistoryText>{historydata.username}님은 {historydata.month}/{historydata.day} {historydata.time}  {historydata.crew}님과 함께 주문을 했었어요</HistoryText>
                </HistoryWrap>
                <BtnWrap>
                    <MoveButton>이전</MoveButton>
                    <PagiButton btnlabel={pagebutton.pagenumber}/>
                    <MoveButton>다음</MoveButton>
                </BtnWrap>
            </HistoryCard>
        </Container>
    );
}
export default OrderHistory;