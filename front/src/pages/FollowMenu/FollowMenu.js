import Box from "@mui/material/Box";
import BoardInput from "../../components/EtcItem/BoardInput";
import { Link } from "react-router-dom";
import BoardInput2 from "../../components/EtcItem/BoardInput2";
import BoardInput3 from "../../components/EtcItem/BoardInput3";
import BoardInput4 from "../../components/EtcItem/BoardInput4";
import UnstyledButtonsSimple from "../../components/EtcItem/BasicButton";

const headerStyle = {
  fontFamily: "BMHANNAPro",
  marginTop: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "150px",
};

const headerStyle2 = {
  fontFamily: "BMHANNAPro",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "50px",
  marginTop: "15px",
  marginBottom: "25px",
};

const Contents_one = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const Contents_two = {
  width: "100%",
  display: "flex",
  marginRight: "60px",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const Contents_three = {
  width: "750px",
  display: "flex",
  marginLeft: "0px",
  flexDirection: "column",
  marginBottom: "30px",
  marginLeft: "50px",
  // alignItems: "center",
  // justifyContent: "center",
};

const btnWrapper = {
  display: "flex",
  alignItems: "center",
  height: "100px",
  justifyContent: "center",
  marginLeft: "30px",
};

const deactivatedBtn = {
  backgroundColor: "white",
  color: "#ADADAD",
  fontSize: "1rem",
  padding: "12px 24px",
  borderRadius: "0.55rem",
  margin: 25,
  boxShadow: "3px 3px 6px #b8b9be, -3px -3px 6px #f3f3f3",
  border: "none",
  marginRight: "40px",
  fontWeight: "bold",
  cursor: "pointer",
};

const activatedBtn = `
  background-color: "white",
  fontSize: "1rem",
  padding: "12px 24px",
  borderRadius: "0.55rem",
  margin: 25,
  boxShadow: "3px 3px 6px #b8b9be, -3px -3px 6px #f3f3f3",
  border: "none",
  marginRight: "40px",
  fontWeight: "bold",
  cursor: "pointer",
  &:hover{
    box-shadow: inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #f3f3f3;
  }
`;

const divLeft = {
  float: "left",
  width: "50%",
};

const divRight = {
  backgroundColor: "#f3f3f3",
  borderRadius: "30px",
  float: "right",
  width: "700px",
  marginRight: "30px",
  height: "80%",
};

const orderMenu = {
  display: "flex",
  marginBottom: "10px",
  width: "50%",
};

/////////////////////////////////////
/////////////////////////////////////

function FollowMenu() {
  return (
    <>
      <Box>
        <div style={headerStyle}>
          <h1>주문 상세 페이지</h1>
        </div>
      </Box>
      <div style={divLeft}>
        <Box style={Contents_one}>
          <div style={Contents_two}>
            <BoardInput3 label={"음식점명"} />
            <BoardInput3 label={"픽업 주소"} />
            <BoardInput3 label={"주문 희망 시간"} />
            <BoardInput3 label={"전달사항"} />
            <BoardInput4 label={"리더 닉네임"} />
          </div>
        </Box>
      </div>
      <div style={divRight}>
        <Box style={Contents_one}>
          <div style={headerStyle2}>
            <h2>나의 메뉴 메뉴 추가하기</h2>
          </div>
          <div style={Contents_three}>
            <div id="orderMenu" style={orderMenu}>
              <BoardInput2 label={"주문 희망 메뉴"} name="menu" />
              <BoardInput2 label={"메뉴 가격"} name="menuCost" />
            </div>
            <BoardInput label={"총 금액"} name="sum" />
          </div>
          <div style={btnWrapper}>
            {/* <button style={deactivatedBtn} label={"작성"}>
              작성
            </button> */}
            {/* <button style={activatedBtn} label={"수정"}>
              수정
            </button> */}
            <UnstyledButtonsSimple label={"작성"} />
            <UnstyledButtonsSimple label={"수정"} />
            <UnstyledButtonsSimple label={"채팅하기"} />
          </div>
        </Box>
      </div>
    </>
  );
}

export default FollowMenu;
