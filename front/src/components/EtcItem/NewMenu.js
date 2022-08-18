import React from "react";
import styled from "styled-components";

const MenuDiv = styled.div`
  margin: 10px 0;
  font-size: 1.2rem;
  font-weight: 100;
  display: flex;
`;

const MenuLabel = styled.div`
  float: left;
  width: 400px;
  font-size: 1.2rem;
`;

const MenuPrice = styled.div`
  float: right;
  font-size: 1.2rem;
`;

export const NewMenu = ({ menu, sumPrice }) => {
  // 추가 버튼 클릭 시, 입력된 메뉴와 가격 나타내는 컴포넌트
  return (
    <div>
      <MenuDiv>
        <MenuLabel>{menu.menu}</MenuLabel>
        <MenuPrice>{menu.price}원</MenuPrice>
      </MenuDiv>
      {/* <div style={styles.sumStyle}>
        <div style={styles.sumLabel}>총 금액</div>
        <div style={styles.sumPrice}>{sumPrice}원</div>
      </div> */}
    </div>
  );
};

export default NewMenu;
