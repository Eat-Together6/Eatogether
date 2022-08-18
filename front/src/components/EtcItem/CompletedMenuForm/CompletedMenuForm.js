import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import styles from "./styles";
import NewMenu from "../NewMenu";
import Box from "@mui/material/Box";

const Background = styled.div`
  background-color: #f3f3f3;
  border-radius: 30px;
  float: right;
  width: 700px;
  margin-right: 30px;
`;

// const Box = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100%;
// `;

const Header = styled.div`
  font-family: BMHANNAPro;
  display: flex;
  alignitems: center;
  justify-content: center;
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

export const CompletedMenuForm = ({ setCreateBtnState, newmenus, sumPrice }) => {
  console.log("dd", newmenus);
  console.log("price", sumPrice);
  return (
    <Background>
      <Box style={styles.Contents_one}>
        <div style={styles.headerStyle}>
          <h2>나의 주문 내역</h2>
        </div>
        <Link to="/">
          <DelBtn>
            <Del>x</Del>
          </DelBtn>
        </Link>
        {/* 나의 주문 메뉴 (메뉴, 가격) */}
        <div style={styles.menu}>
          {newmenus.map((newmenu) => (
            <NewMenu menu={newmenu} />
          ))}
        </div>
        <div style={styles.sumStyle}>
          <div style={styles.sumLabel}>총 금액</div>
          <div style={styles.sumPrice}>{sumPrice}원</div>
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
