import Box from "@mui/material/Box";
import BoardInput from "../../components/EtcItem/BoardInput";
import UnstyledButtonsSimple from "../../components/EtcItem/BasicButton";
import { Link } from "react-router-dom";
import BoardInput3 from "../../components/EtcItem/BoardInput3";
import BoardInput4 from "../../components/EtcItem/BoardInput4";

const headerStyle = {
  fontFamily: "BMHANNAPro",
  marginTop: "30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "150px",
};

const Contents_one = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "BMHANNAPro",
};

const Contents_two = {
  fontSize: "30px",
  width: "100%",
  display: "flex",
  marginRight: "60px",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "BMHANNAPro",
};

const btnWrapper = {
  display: "flex",
  alignItems: "center",
  height: "200px",
  justifyContent: "center",
  marginLeft: "100px",
};

const test = {
  display: "flex",
};

// 메뉴 추가 버튼
const btn_click = (e) => {
  // const element = document.getElementById("list");
  // const newDiv = document.createElement("div");
  // const newText = document.createTextNode("AppendChild");
  // newDiv.appendChild(newText);
  // element.appendChild(newDiv);
  const box = document.getElementById("list");
  const newP = document.createElement("p");
  newP.innerHTML = "<input type='text'>";
  box.appendChild(newP);
};

function FollowMenu() {
  return (
    <>
      <Box>
        <div style={headerStyle}>
          <h1>주문 상세 페이지</h1>
        </div>
      </Box>
      <Box style={Contents_one}>
        <div style={Contents_two}>
          <BoardInput3 label={"음식점명"} />
          <BoardInput3 label={"픽업 주소"} />
          <BoardInput3 label={"주문 희망 시간"} />
          <BoardInput3 label={"전달 사항"} />
          <BoardInput4 label={"리더 닉네임"} />
        </div>
      </Box>
    </>
  );
}

export default FollowMenu;
