import Box from "@mui/material/Box";
import UnstyledButtonsSimple from "../../components/EtcItem/BasicButton";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import styles from "./styles.js";
import { useRecoilState } from "recoil";
import locationState from "state/locationState";

function CreateMenu() {
  const address = useRecoilState(locationState);
  console.log(address[0].address)
  // 서버에 보낼 Form
  const [form, setForm] = useState({
    storeName: "",
    time: "00:00:00",
    menu: [],
    cost: 0,
    description: "",
  });

  const handlingForm = (e) => {
    const { name, value } = e.target;
    console.log({
      storeName: form.storeName,
      order_time: form.time,
      description: form.description,
    });
  };

  return (
    <>
      <div style={styles.background}>
        <Box>
          <div style={styles.headerStyle}>
            <h1>새 메뉴 작성하기</h1>
          </div>
        </Box>
        <Box style={styles.Contents_one}>
          <div style={styles.Contents_two}>
            <div style={styles.menuDiv}>
              <label style={styles.label}>픽업 주소</label>
              <input style={styles.input} placeholder={address[0].address} defaultValue={address[0].address} />
            </div>
            <div style={styles.menuDiv}>
              <label style={styles.label} name="storeName" value={form.storeName} onChange={handlingForm}>
                음식점명
              </label>
              <input style={styles.input} placeholder="음식점 이름을 입력해주세요" />
            </div>
            <div style={styles.menuDiv}>
              <label style={styles.label} name="date" value={form.date} onChange={handlingForm}>
                주문 희망 날짜
              </label>
              <input style={styles.input} type="date" />
            </div>
            <div style={styles.menuDiv}>
              <label style={styles.label} name="time" value={form.time} onChange={handlingForm}>
                주문 희망 시간
              </label>
              <input style={styles.input} type="time" />
            </div>
            <div style={styles.menuDiv}>
              <label style={styles.label} name="description" value={form.description} onChange={handlingForm}>
                전달사항
              </label>
              <input style={styles.input} placeholder="전달사항이 있다면 입력해주세요" />
            </div>
            <div id="list"></div>
            <div id="btnWrap" style={styles.btnWrapper}>
              <Link style={{ textDecoration: "none", color: "black" }} to="/">
                <UnstyledButtonsSimple label={"작성"} />
              </Link>
              <Link style={{ textDecoration: "none", color: "black" }} to="/">
                <UnstyledButtonsSimple label={"작성 취소"} />
              </Link>
            </div>
          </div>
        </Box>
      </div>
    </>
  );
}

export default CreateMenu;
