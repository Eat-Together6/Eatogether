import React from "react";

const headerStyle = {
  marginTop: "60px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "150px",
};

const Contents = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const Contents_element = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

function CreateMenu() {
  return (
    <>
      <div style={Contents}>
        <div style={headerStyle}>
          <h1>새 메뉴 작성하기</h1>
        </div>
        <div style={Contents_element}>
          <h3>픽업 주소</h3>
          <input type="text"></input>
        </div>
        <div style={Contents_element}>
          <h3>주문 희망 브랜드</h3>
          <input type="text"></input>
        </div>
        <div style={Contents_element}>
          <h3>주문 희망 메뉴, 가격</h3>
          <input type="text"></input>
          <input type="text"></input>
          <button>메뉴 추가</button>
        </div>
        <div style={Contents_element}>
          <h3>주문 희망 시간</h3>
          <input type="text"></input>
        </div>
        <div style={Contents_element}>
          <h3>총 금액</h3>
          <input type="text"></input>
        </div>
        <div style={Contents_element}>
          <button>작성</button>
          <button>작성 취소</button>
        </div>
      </div>
    </>
  );
}

export default CreateMenu;
