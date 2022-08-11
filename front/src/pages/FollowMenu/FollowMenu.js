import Box from "@mui/material/Box";
import BoardInput from "../../components/EtcItem/BoardInput";
import { Link } from "react-router-dom";
import BoardInput2 from "../../components/EtcItem/BoardInput2";
import BoardInput3 from "../../components/EtcItem/BoardInput3";
import BoardInput4 from "../../components/EtcItem/BoardInput4";

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
  // width: "100%",
  display: "flex",
  marginRight: "60px",
  flexDirection: "column",
  marginBottom: "30px",
  // alignItems: "center",
  // justifyContent: "center",
};

const btnWrapper = {
  display: "flex",
  alignItems: "center",
  height: "200px",
  justifyContent: "center",
  marginLeft: "100px",
};

const divLeft = {
  float: "left",
  width: "50%",
};

const divRight = {
  backgroundColor: "#f3f3f3",
  float: "right",
  width: "50%",
  height: "80%",
};

const orderMenu = {
  display: "flex",
  width: "50%",
};

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
            <BoardInput3 label={"전달 사항"} />
            <BoardInput4 label={"리더 닉네임"} />
          </div>
        </Box>
      </div>
      <div style={divRight}>
        <Box style={Contents_one}>
          <div style={headerStyle2}>
            <h2>나의 메뉴 추가하기</h2>
          </div>
          <div style={Contents_three}>
            <div id="orderMenu" style={orderMenu}>
              <BoardInput2 label={"주문 희망 메뉴"} name="menu" />
              <BoardInput2 label={"메뉴 가격"} name="menuCost" />
            </div>
            <div id="list"></div>
            <BoardInput label={"총 금액"} name="sum" />
          </div>
        </Box>
      </div>
    </>
  );
}

export default FollowMenu;
