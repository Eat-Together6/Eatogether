import React from "react";
import * as style from "./styles";
import Box from "@mui/material/Box";
import styles from "./styles.js";
import FollowForm from "pages/Board/FollowForm/FollowForm";

const Post = () => {
  return (
    <Box>
      <div style={styles.headerStyle}>
        <h1>주문 상세 내역</h1>
      </div>

      <div style={styles.Contents_two}>
        <style.OrderDiv>
          <div style={styles.header}>주문1</div>
          <div style={styles.label}>음식점명:</div>
          <div style={styles.data}> 데이터</div>
          <div style={styles.label}>픽업 주소:</div>
          <div style={styles.data}> 데이터</div>
          <div style={styles.label}>주문 희망 날짜:</div>
          <div style={styles.data}> 데이터</div>
          <div style={styles.label}>주문 희망 시간:</div>
          <div style={styles.data}> 데이터</div>
          <div style={styles.label}>전달 사항:</div>
          <div style={styles.data}> 데이터</div>
          {/*//// 팔로워 1명의 폼 ////*/}
          <FollowForm></FollowForm>
        </style.OrderDiv>
      </div>
    </Box>
  );
};

export default Post;
