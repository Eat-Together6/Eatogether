import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import styles from "./styles";

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
  height: 100%;
`;

const Header = styled.div`
  font-family: BMHANNAPro;
  display: flex;
  alignitems: center;
  justify-content: center;
  margin-top: 70px;
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

const menuLabel = styled.div`
  font-size: 30px;
`;

const onClickedEditBtn = () => {
  // setCreateBtnState(!createBtnState);
};

export const CompletedMenuForm = ({ setCreateBtnState }) => {
  return (
    <Background>
      <Box>
        <Header>
          <h2>나의 주문 내역</h2>
        </Header>
        <Link to="/">
          <DelBtn>
            <Del>x</Del>
          </DelBtn>
        </Link>
        <div style={styles.menu}>
          <div style={styles.menuLabel}>김치찌개</div>
          <div style={styles.menuPrice}>5000원</div>
          <div style={styles.menuLabel}>순두부찌개</div>
          <div style={styles.menuPrice}>15000원</div>
        </div>
        <div style={styles.btnWrapper}>
          <button
            style={styles.button}
            onClick={() => {
              setCreateBtnState(false);
            }}
          >
            수정
          </button>
          <button style={styles.button}>채팅</button>
        </div>
      </Box>
    </Background>
  );
};

export default CompletedMenuForm;
