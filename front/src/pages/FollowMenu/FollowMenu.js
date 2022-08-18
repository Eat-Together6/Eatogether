import Box from "@mui/material/Box";
import { useState, useRef, useEffect } from "react";
import styles from "./styles.js";
import { useRecoilValue } from "recoil";
import { authState } from "state";
import CompletedMenuForm from "components/EtcItem/CompletedMenuForm/CompletedMenuForm.js";
import { useRecoilState } from "recoil";
import locationState from "state/locationState";
import { useLocation } from "react-router-dom";
import { getOrder } from "api/order.js";

// 메뉴 추가 버튼
const NewMenu = ({ menu, onRemoveMenu }) => {
  // 추가 버튼 클릭 시, 입력된 메뉴와 가격 나타내는 컴포넌트
  return (
    <div>
      <div style={styles.newMenuDiv}>
        <span style={styles.menuSpan}>{menu.menu}</span>
        <span style={styles.menuSpan}>{menu.price}원</span>
        <button style={styles.menuDel} onClick={() => onRemoveMenu(menu.id)}>
          x
        </button>
      </div>
    </div>
  );
};

function FollowMenu() {
  const address = useRecoilState(locationState);
  const userInfo = useRecoilValue(authState);
  const [createBtnState, setCreateBtnState] = useState(false); // 작성 버튼 useState
  const [newmenus, setNewmenus] = useState([]); //사용자가 입력한 메뉴들 배열
  const menu = useRef(); // 메뉴 input 값 가져오기 위한 ref
  const price = useRef(); // 가격 input 값 가져오기 위한 ref
  let sumPrice = 0; // 총 가격 구할 변수 선언
  const location = useLocation();

  useEffect(()=>{
    getOrderInfo(2)
  },[])

  const onClickedCreateBtn = () => {
    setCreateBtnState(!createBtnState);
  };
  const getOrderInfo = async(id) =>{
    await  getOrder(id).then(res=>{
      console.log(res.data)
    }).catch(err=>console.log(err))
  }

  const onAddMenu = (e) => {
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
  const onRemoveMenu = (id) => {
    // 삭제하고자 하는 배열 내 객체 id와 일치하면 배열에서 삭제
    setNewmenus(newmenus.filter((menu) => menu.id !== id)); // filter : 일치하지 않는 id로 새로운 배열 만듦. (즉, id일치하면 배열에서 삭제)
  };

  newmenus.map((newmenu) => {
    sumPrice += parseInt(newmenu.price);
  });

  function menu_OnMouseover() {
    document.getElementById("menuButton").style.boxShadow = "inset 2px 2px 5px #b8b9be";
  }
  function menu_onMouseOut() {
    document.getElementById("menuButton").style.boxShadow = "3px 3px 6px #b8b9be, -3px -3px 6px #f3f3f3";
  }

  return (
    <>
      <div style={styles.background}>
        <Box>
          <div style={styles.headerStyle}>
            <h1>주문 상세 페이지</h1>
          </div>
        </Box>
        <div style={styles.divLeft}>
          <Box style={styles.Contents_one}>
            <div style={styles.Contents_two}>
              <div style={styles.menuDiv}>
                <label style={styles.label}>음식점명</label>
                <input style={styles.input} placeholder="음식명 데이터" />
              </div>
              <div style={styles.menuDiv}>
                <label style={styles.label}>픽업 주소</label>
                <input style={styles.input} placeholder={address[0].address} defaultValue={address[0].address} />
              </div>
              <div style={styles.menuDiv}>
                <label style={styles.label}>주문 희망 날짜</label>
                <input style={styles.input} placeholder="주문 희망 날짜 데이터" />
              </div>
              <div style={styles.menuDiv}>
                <label style={styles.label}>주문 희망 시간</label>
                <input style={styles.input} placeholder="주문 희망 시간 데이터" />
              </div>
              <div style={styles.menuDiv}>
                <label style={styles.label}>전달사항</label>
                <input style={styles.input} placeholder="전달사항 데이터" />
              </div>
            </div>
          </Box>
        </div>
        {createBtnState ? (
          <>
            <CompletedMenuForm setCreateBtnState={setCreateBtnState} />
          </>
        ) : (
          <div style={styles.divRight} id="divRight">
            <Box style={styles.Contents_one}>
              <div style={styles.headerStyle2}>
                <h2>나의 메뉴 추가하기</h2>
              </div>
              <div style={styles.Contents_three}>
                <div>
                  {userInfo.isLoggedIn ? (
                    <div style={styles.menuDiv}>
                      <label style={styles.menuLabel} htmlFor="menu">
                        주문 희망 메뉴
                      </label>
                      <input style={styles.menuInput} ref={menu} id="menu" type="text" placeholder="메뉴를 입력하세요" />
                      <label style={styles.menuLabel} htmlFor="price">
                        가격
                      </label>
                      <input style={styles.menuInput} ref={price} id="price" type="text" placeholder="가격을 입력하세요" />
                      <button id="menuButton" style={styles.menuButton} onClick={onAddMenu} onMouseOver={menu_OnMouseover} onMouseOut={menu_onMouseOut}>
                        추가
                      </button>
                    </div>
                  ) : (
                    <div style={styles.menuDiv}>
                      <label style={styles.menuLabel} htmlFor="menu">
                        주문 희망 메뉴
                      </label>
                      <input style={styles.menuInput} ref={menu} id="menu" type="text" placeholder="메뉴를 입력하세요" disabled />
                      <label style={styles.menuLabel} htmlFor="price">
                        가격
                      </label>
                      <input style={styles.menuInput} ref={price} id="price" type="text" placeholder="가격을 입력하세요" disabled />
                      <button
                        id="menuButton"
                        style={styles.menuButton}
                        onClick={onAddMenu}
                        onMouseOver={menu_OnMouseover}
                        onMouseOut={menu_onMouseOut}
                        disabled
                      >
                        추가
                      </button>
                    </div>
                  )}
                  {newmenus.map(
                    (
                      newmenu //배열에 들어있는 값들 map을 통해 하나씩 꺼내서 NewMenu 컴포넌트로 html 생성 , newmenu는 newmenus 배열 내 객체 하나를 뜻함.
                    ) => (
                      <NewMenu menu={newmenu} onRemoveMenu={onRemoveMenu} /> // menu와 onRemove 보라색은 컴포넌트로 넘겨주는 인자 표시,{onRemove} 함수 넘겨줌.
                    )
                  )}
                </div>
                <div style={styles.sumStyle}>
                  <div style={styles.sumLabel}>총 금액</div>
                  <div style={styles.sumPrice}>{sumPrice}원</div>
                </div>
              </div>
              <div>
                {userInfo.isLoggedIn ? (
                  <div style={styles.btnWrapper}>
                    <button style={styles.button} onClick={onClickedCreateBtn}>
                      작성
                    </button>
                    <button style={styles.button}>채팅</button>
                  </div>
                ) : (
                  <div style={styles.btnWrapper}>
                    <button style={styles.button} disabled>
                      작성
                    </button>
                    <button style={styles.button} disabled>
                      채팅
                    </button>
                  </div>
                )}
              </div>
            </Box>
          </div>
        )}
      </div>
    </>
  );
}

export default FollowMenu;
