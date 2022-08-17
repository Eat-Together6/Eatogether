import Box from "@mui/material/Box";
import * as style from "./styles";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import styles from "./styles.js";
import { useRecoilState } from "recoil";
import locationState from "state/locationState";
import WriteEnd from "pages/CreateMenu/WriteEnd";

function CreateMenu() {
  const address = useRecoilState(locationState);
  const [end, setEnd] = useState(false);
  // 서버에 보낼 state
  const [leaderOrder, setLeaderOrder] = useState({
      address : address[0].address,
      storeName : "",
      date : "",
      time : "",
      description : ""
  });

  const storeName = useRef();
  const date = useRef();
  const time = useRef();
  const description = useRef();

  const writeEnd = () => {
    setLeaderOrder({
      address : address[0].address,
      storeName : storeName.current.value,
      date : date.current.value,
      time : time.current.value,
      description : description.current.value
    })
    setEnd(true);
  };
  console.log("end" ,end)
  return (
    <>
      <div style={styles.background}>
        <Box>
          <div style={styles.headerStyle}>
            <h1>새 메뉴 작성하기</h1>
          </div>
        </Box>
        { end 
        ? (
            <Box style={styles.Contents_one}>
              <WriteEnd menuData={leaderOrder} />
              <div>
                <style.Button onClick={()=>{setEnd(false)}}>수정</style.Button>
                <style.Button onClick={()=>{alert("등록하시겠습니까?")}}>등록</style.Button>
              </div>
              
            </Box>
          )
        : (
           <Box style={styles.Contents_one}>
            <div style={styles.Contents_two}>
              <div style={styles.menuDiv}>
                <label style={styles.label}>픽업 주소</label>
                <input style={styles.input} placeholder={address[0].address} defaultValue={address[0].address} />
              </div>
              <div style={styles.menuDiv}>
                <label style={styles.label} name="storeName" >
                  음식점명
                </label>
                <input style={styles.input} ref={storeName} placeholder="음식점 이름을 입력해주세요" required/>
              </div>
              <div style={styles.menuDiv}>
                <label style={styles.label} name="date" >
                  주문 희망 날짜
                </label>
                <input style={styles.input} type="date" ref={date} required/>
              </div>
              <div style={styles.menuDiv}>
                <label style={styles.label} name="time" >
                  주문 희망 시간
                </label>
                <input style={styles.input} type="time" ref={time} required/>
              </div>
              <div style={styles.menuDiv}>
                <label style={styles.label} name="description"  >
                  전달사항
                </label>
                <input style={styles.input} placeholder="전달사항이 있다면 입력해주세요" ref={description} />
              </div>
              <div id="list"></div>
              <div id="btnWrap" style={styles.btnWrapper}>
              {}
              <style.Button onClick={writeEnd}>작성완료</style.Button>
              </div>
            </div>
          </Box>
        )
        }
        
      </div>
    </>
  );
}

export default CreateMenu;
