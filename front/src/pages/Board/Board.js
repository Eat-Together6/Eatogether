import React from "react";
import * as style from "./styles";
import styles from "./styles.js";
import Box from "@mui/material/Box";
import styled from "styled-components";

const OrderDiv = styled.div`
  width: 700px;
  font-size: 1.2rem;
  background-color: #ececec;
  font-family: BMHANNAPro;
  padding: 0px 20px;
  border-radius: 0.55rem;
  box-shadow: inset 3px 3px 7px #d3d3d3, inset -3px -3px 7px #ffffff;
`;

const Board = () => {
  return (
    <>
      <div style={styles.background}>
        <Box>
          <div style={styles.headerStyle}>
            <h1>주문 상세 내역</h1>
          </div>

          <div style={styles.Contents_two}>
            <OrderDiv>
              <div style={styles.header}>주문1</div>
              <div style={styles.label}>음식점명</div>
              <div style={styles.label}>픽업 주소</div>
              <div style={styles.label}>주문 희망 날짜</div>
              <div style={styles.label}>주문 희망 시간</div>
              <div style={styles.label}>전달 사항</div>
            </OrderDiv>
          </div>
        </Box>
      </div>
    </>
  );
};

export default Board;
