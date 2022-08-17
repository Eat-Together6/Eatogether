import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Background = styled.div`
  background-color: #f3f3f3;
  border-radius: 30px;
  float: right;
  width: 700px;
  margin-right: 30px;
  height: 200px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header = styled.div`
  font-family: BMHANNAPro;
  display: flex;
  alignitems: center;
  justify-content: center;
  height: 50px;
  margin-top: 15px;
  margin-bottom: 25px;
`;

const DelBtn = styled.div`
  margin-left: 730px;
  cursor: pointer;
  width: 18px;
  height: 18px;
  border-radius: 50px;
  background-color: #fa4444;
  box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #f3f3f3;
`;

const Del = styled.div`
  margin-left: 4px;
`;

export const CompletedMenuForm = () => {
  return (
    <Background>
      <Box>
        <Header>
          <h2>나의 주문 내역</h2>
        </Header>
        <Link to="/createMenu">
          <DelBtn>
            <Del>x</Del>
          </DelBtn>
        </Link>
      </Box>
    </Background>
  );
};

export default CompletedMenuForm;
