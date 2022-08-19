import React from "react";
import styles from "./styles.js";
import * as style from "../styles";

export const FollowForm = () => {
  return (
    <>
      <div style={styles.label}>팔로워1:</div>
      <div style={styles.followData}>
        <style.FollowOrderDiv>
          <div style={styles.followContent}>
            <div style={styles.followMenu}>메뉴</div>
            <div style={styles.followPrice}>가격</div>
          </div>
          <div style={styles.sumStyle}>
            <div style={styles.sumLabel}>총 금액</div>
            <div style={styles.sumPrice}>원</div>
          </div>
        </style.FollowOrderDiv>
      </div>
    </>
  );
};

export default FollowForm;
