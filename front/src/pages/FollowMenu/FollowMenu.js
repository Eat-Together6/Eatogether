import Box from "@mui/material/Box";
import React, { useState, useRef, useEffect } from "react";
import styles from "./styles.js";
import * as style from "./styles";
import { useRecoilValue } from "recoil";
import { authState } from "state";
import CompletedMenuForm from "components/EtcItem/CompletedMenuForm/CompletedMenuForm.js";
import { useRecoilState } from "recoil";
import locationState from "state/locationState";
import orderState from "state/orderState";
import useInput from "hooks/useInput.js";
import { useLocation } from "react-router-dom";
import { getOrder, getOrders } from "api/order.js";

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

// 주문 데이터를 받아옴
const getOrderAndShow = async (id) => {
  await getOrders(id)
    .then((res) => {
      console.log(res.data);
      console.log(console.data[id]);
    })
    .catch((e) => console.log(e));
};

function FollowMenu() {
  // 주문 데이터를 받아서 사용
  useEffect(() => {
    getOrderAndShow(id);
  }, []);
  const address = useRecoilState(locationState);
  const markerId = useRecoilState(orderState)[0].id;
  console.log("참여하기id", markerId);
  const userInfo = useRecoilValue(authState);
  const [createBtnState, setCreateBtnState] = useState(false);
  const [description, onChange, reset] = useInput({
    description: "",
  });
  //사용자가 입력한 메뉴들 배열
  const [newmenus, setNewmenus] = useState([]);
  // 메뉴 input 값 가져오기 위한 ref
  const menu = useRef();
  // 가격 input 값 가져오기 위한 ref
  const price = useRef(); 
  let sumPrice = 0; 
  const location = useLocation();

  // 작성버튼 클릭 상태 
  const onClickedCreateBtn = () => {
    setCreateBtnState(!createBtnState);
  };

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
      alert("메뉴와 가격을 입력해주세요");
    }
  };
  
  // 메뉴추가 후 삭제
  const onRemoveMenu = (id) => {
    setNewmenus(newmenus.filter((menu) => menu.id !== id)); 
  };

  // 서버에서 받아온 time 날짜와 시간 분리
  const date = res.data.time.subString(0, 9);
  const time = res.data.time.subString(11, 18)

  // 메뉴의 총 가격 계산
  newmenus.map((newmenu) => {
    sumPrice += parseInt(newmenu.price);
  });

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
                <input style={styles.input} placeholder="음식명 데이터" value={.store}readOnly />
              </div>
              <div style={styles.menuDiv}>
                <label style={styles.label}>픽업 주소</label>
                <input style={styles.input} placeholder={address[0].address} defaultValue={address[0].address} />
              </div>
              <div style={styles.menuDiv}>
                <label style={styles.label}>주문 희망 날짜</label>
                <input style={styles.input} placeholder="주문 희망 날짜 데이터" value={.time} readOnly />
              </div>
              <div style={styles.menuDiv}>
                <label style={styles.label}>주문 희망 시간</label>
                <input style={styles.input} placeholder="주문 희망 시간 데이터" value={.time} readOnly />
              </div>
              <div style={styles.menuDiv}>
                <label style={styles.label}>전달사항</label>
                <input style={styles.input} placeholder="전달사항 데이터" value={.description}readOnly />
              </div>
            </div>
          </Box>
        </div>
        {createBtnState ? (
          // 작성버튼 클릭-> 주문서 작성 완료된 폼
          <>
            <CompletedMenuForm newmenus={newmenus} sumPrice={sumPrice} description={description.description} />
          </>
        ) : (
          // 작성버튼 클릭x-> 기본 따라가기 폼
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
                      <style.menuButton onClick={onAddMenu}>추가</style.menuButton>
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
                      <style.menuButton onClick={onAddMenu} disabled>
                        추가
                      </style.menuButton>
                    </div>
                  )}
                  {newmenus.map(
                    (
                       //배열에 들어있는 값들 map을 통해 하나씩 꺼내서 NewMenu 컴포넌트로 html 생성 , newmenu는 newmenus 배열 내 객체 하나를 뜻함.
                      newmenu
                    ) => (
                       // menu와 onRemove 보라색은 컴포넌트로 넘겨주는 인자 표시,{onRemove} 함수 넘겨줌.
                      <NewMenu menu={newmenu} onRemoveMenu={onRemoveMenu} />
                    )
                  )}
                </div>
                <div style={styles.sumStyle}>
                  <div style={styles.sumLabel}>총 금액</div>
                  <div style={styles.sumPrice}>{sumPrice}원</div>
                </div>
                <div style={styles.menuDiv}>
                  <label style={styles.label}>전달사항</label>
                  <input style={styles.input} name="description" placeholder="전달사항을 입력해주세요" value={description.value} onChange={onChange} />
                </div>
              </div>
              <div>
                {userInfo.isLoggedIn ? (
                  // 로그인ㅇ -> 버튼 클릭 가능
                  <div style={styles.btnWrapper}>
                    <style.Button onClick={onClickedCreateBtn}>작성</style.Button>
                    <style.Button>채팅</style.Button>
                  </div>
                ) : (
                  // 로그인x -> 버튼 클릭 불가능
                  <div style={styles.btnWrapper}>
                    <style.Button disabled>작성</style.Button>
                    <style.Button disabled>채팅</style.Button>
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
