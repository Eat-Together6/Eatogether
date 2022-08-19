import React from "react";
import styles from "./styles.js";
import styled from "styled-components";
import * as style from "./styles";

const FollowOrderDiv = styled.div`
  width: 700px;
  font-size: 1.2rem;
  background-color: white;
  font-family: BMHANNAPro;
  padding: 15px 20px;
  border-radius: 0.55rem;
  box-shadow: inset 3px 3px 7px #d3d3d3, inset -3px -3px 7px #ffffff;
  > * {
    & {
      margin-top: 10px;
    }
    &: first-child {
      margin: 0;
    }
  }
`;

export const FollowForm = () => {
  return (
    <>
      <div style={styles.label}>팔로워1:</div>
      <div style={styles.followData}>
        <FollowOrderDiv>
          <div style={styles.followContent}>
            <div style={styles.followMenu}>메뉴</div>
            <div style={styles.followPrice}>가격</div>
          </div>
          <div style={styles.sumStyle}>
            <div style={styles.sumLabel}>총 금액</div>
            <div style={styles.sumPrice}>원</div>
          </div>
        </FollowOrderDiv>
      </div>
    </>
  );
};

export default FollowForm;
