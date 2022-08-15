import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import BoardInput2 from "../../components/EtcItem/BoardInput2";
import BoardInput3 from "../../components/EtcItem/BoardInput3";
import BoardInput4 from "../../components/EtcItem/BoardInput4";
import UnstyledButtonsSimple from "../../components/EtcItem/BasicButton";
import { useState, useRef, useEffect } from "react";

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

// 메뉴 추가 버튼
const NewMenu = ({ menu, onRemove }) => {
  // 추가 버튼 클릭 시, 입력된 메뉴와 가격 나타내는 컴포넌트
  return (
    <div>
      <div style={newMenuDiv}>
        <span style={menuSpan}>{menu.menu}</span>
        <span style={menuSpan}>{menu.price}원</span>
        <button style={menuDel} onClick={() => onRemove(menu.id)}>
          x
        </button>
      </div>
    </div>
  );
};

const menuDiv = {
  margin: "10px 0",
  marginLeft: "40px",
};

const menuLabel = { fontSize: "1.2rem" };

const menuInput = {
  width: "180px",
  fontSize: "0.875rem",
  fontWeight: "100",
  lineHeight: "1",
  borderRadius: "38px",
  padding: "12px",
  backgroundColor: "#F3F6F9",
  boxShadow: "inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #f3f3f3",
  margin: "0 20px",
  border: "none",
};

const menuButton = {
  cursor: "pointer",
  position: "absolute",
  margin: "5px 0",
  width: "40px",
  height: "30px",
  lineHeight: "30px",
  borderRadius: "0.55rem",
  backgroundColor: "white",
  boxShadow: "3px 3px 6px #b8b9be, -3px -3px 6px #f3f3f3",
};

const newMenuDiv = {
  margin: " 10px 0",
  marginRight: "120px",
  textAlign: "right",
  fontSize: "1.2rem",
  fontWeight: "100",
  height: "30px",
};

const menuSpan = {
  marginRight: "20px",
  lineHeight: "30px",
};

const menuDel = {
  padding: "0",
  cursor: "pointer",
  width: "15px",
  height: "15px",
  borderRadius: "50px",
  backgroundColor: "#fa4444",
  boxShadow: "3px 3px 6px #b8b9be, -3px -3px 6px #f3f3f3",
};

function FollowMenu() {
  const [newmenus, setNewmenus] = useState([]); //사용자가 입력한 메뉴들 배열
  const menu = useRef(); // 메뉴 input 값 가져오기 위한 ref
  const price = useRef(); // 가격 input 값 가져오기 위한 ref
  let sumPrice = 0; // 총 가격 구할 변수 선언
  const onCreate = (e) => {
    // 추가 클릭시 , 메누 배열 다음 id 값, 메뉴와 가격 input에 들어있는 value를 배열에 새롭게 추가 --> input값들은 빈 value로 돌리기
    if (menu.current.value !== "" && price.current.value !== "") {
      setNewmenus([
        ...newmenus,
        {
          id: newmenus.length === 0 ? 1 : newmenus.slice(-1)[0].id + 1,
          menu: menu.current.value,
          price: price.current.value,
        },
      ]);
      menu.current.value = "";
      price.current.value = "";
    } else {
      console.log("메뉴와 가격을 입력해주세요"); // input 값이 비어있는데 추가 버튼 누를 시 배열 추가 안됨. 경고메세지
    }
  };
  const onRemove = (id) => {
    // 삭제하고자 하는 배열 내 객체 id와 일치하면 배열에서 삭제
    setNewmenus(newmenus.filter((menu) => menu.id !== id)); // filter : 일치하지 않는 id로 새로운 배열 만듦. (즉, id일치하면 배열에서 삭제)
  };

  newmenus.map((newmenu) => {
    // 배열 안 객체를 하나씩 돌면서 sumPrice 변수에 각 가격 더해 총가격 구하기
    sumPrice += parseInt(newmenu.price);
  });
  console.log(sumPrice); // 총가격은 잘 나오는데 이걸 value 값에 연결 어떻게 하는지 모르겠음.

  function menu_OnMouseover() {
    document.getElementById("menuButton").style.boxShadow = "inset 2px 2px 5px #b8b9be";
  }
  function menu_onMouseOut() {
    document.getElementById("menuButton").style.boxShadow = "3px 3px 6px #b8b9be, -3px -3px 6px #f3f3f3";
  }

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
            <div>
              <div style={menuDiv}>
                <label style={menuLabel} htmlFor="menu">
                  주문 희망 메뉴
                </label>
                <input style={menuInput} ref={menu} id="menu" type="text" placeholder="메뉴를 입력하세요" />
                <label style={menuLabel} htmlFor="price">
                  가격
                </label>
                <input style={menuInput} ref={price} id="price" type="text" placeholder="가격을 입력하세요" />
                <button id="menuButton" style={menuButton} onClick={onCreate} onMouseOver={menu_OnMouseover} onMouseOut={menu_onMouseOut}>
                  추가
                </button>
              </div>
              {newmenus.map(
                (
                  newmenu //배열에 들어있는 값들 map을 통해 하나씩 꺼내서 NewMenu 컴포넌트로 html 생성 , newmenu는 newmenus 배열 내 객체 하나를 뜻함.
                ) => (
                  <NewMenu menu={newmenu} onRemove={onRemove} /> // menu와 onRemove 보라색은 컴포넌트로 넘겨주는 인자 표시,{onRemove} 함수 넘겨줌.
                )
              )}
            </div>
            <BoardInput2 label={"총 금액"} name="sum" />
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
