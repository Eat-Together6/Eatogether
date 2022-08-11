import React from "react";
import styled from "styled-components";
import PagiButton from "../../components/EtcItem/PagiButton";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f3f3f3;
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
    box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #f3f3f3;
    border: none;
    background-color: #ffff;
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
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 30px;
`;

const HistoryText = styled.span`
    font-family: 'BMHANNAPro';
    height: 45px;
    padding: 0px 20px;
    border-radius:0.55rem;
    box-shadow: inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #f3f3f3;
    border: none;
    display: flex;
    align-items: center;
`;

const BtnWrap = styled.button`
    display:flex;
    margin-top: auto;
    margin-bottom: 90px;
`;

const MoveButton = styled.button`
    font-family: 'BMHANNAPro';
    background-color: white;
    font-weight: 800;
    width: 50px;
    height: 38px;
    border-radius: 0.55rem;
    box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #f3f3f3;
    border: none;
    &:hover{
        box-shadow: inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #f3f3f3;
    }
    cursor: pointer;
`;

const OrderHistory = () => {
    return (
        <Container>
            <HistoryCard>
                <Title>케이틀린님의 주문내역</Title>
                <HistoryWrap>
                    <HistoryText>C님은 3/5 15:00  A님, B님과 함께 주문을 했었어요</HistoryText>
                    <HistoryText>C님은 3/9 15:00  A 님과 함께 주문을 했었어요</HistoryText>
                    <HistoryText>C님은 3/17 15:00 D 님과 함께 주문을 했었어요</HistoryText>
                </HistoryWrap>
                <BtnWrap>
                    <MoveButton>이전</MoveButton>
                    <PagiButton btnlabel={1}/>
                    <PagiButton btnlabel={2}/>
                    <PagiButton btnlabel={3}/>
                    <PagiButton btnlabel={4}/>
                    <PagiButton btnlabel={5}/>
                    <MoveButton>다음</MoveButton>
                </BtnWrap>
            </HistoryCard>
        </Container>
    );
}
export default OrderHistory;