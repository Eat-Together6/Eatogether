import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as style from "./styles";
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

function onRegister() {
  alert("등록완료! 채팅으로 연결해드릴게요");
}

export const CompletedMenuForm = ({ newmenus, sumPrice, description }) => {
  return (
    <Background>
      <Box style={styles.Contents_one}>
        <div style={styles.headerStyle}>
          <h2>나의 주문 내역</h2>
        </div>
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
        <div style={styles.descriptionDiv}>
          <div style={styles.descriptionLabel}>전달사항</div>
          <div style={styles.descriptionContent}>{description}</div>
        </div>
        <div style={styles.btnWrapper}>
          {/* 등록 완료버튼 클릭-> 서버로 주문 폼 보냄, 채팅연결 */}
          <Link to="">
            <style.Button onClick={onRegister}>등록 완료</style.Button>
          </Link>
          <Link to="/">
            <style.Button>등록 취소</style.Button>
          </Link>
        </div>
      </Box>
    </Background>
  );
};

export default CompletedMenuForm;
