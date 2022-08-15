import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ececec;
`;

export const MypageCard = styled.div`
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

export const Title = styled.h1`
  font-family: "BMHANNAPro";
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px;
  font-size: 25px;
`;

export const FaceLogo = styled.img`
  width: 70px;
  height: 70px;
`;

export const InfoWrap = styled.div`
  width: 70%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InfoLabel = styled.span`
  font-family: "BMHANNAAir";
  font-size: 18px;
  font-weight: 800;
  margin: 10px;
`;

export const InfoText = styled.span`
  background-color: #ececec;
  font-family: "BMHANNAAir";
  height: 38px;
  padding: 0px 20px;
  border-radius: 0.55rem;
  box-shadow: inset 3px 3px 7px #d3d3d3, inset -3px -3px 7px #ffffff;
  border: none;
  display: flex;
  align-items: center;
`;

export const LinkStyle = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
};

export const HistoryCard = styled.div`
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

export const HistoryWrap = styled.span`
    width: 70%;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 20px;
`;

export const HistoryText = styled.span`
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

export const BtnWrap = styled.button`
    display:flex;
    margin-top: auto;
    margin-bottom: 50px;
`;

export const MoveButton = styled.button`
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