import Box from "@mui/material/Box";
import BoardInput from "../../components/EtcItem/BoardInput";
import UnstyledButtonsSimple from "../../components/EtcItem/BasicButton";
import { Link } from "react-router-dom";
import BoardInput2 from "../../components/EtcItem/BoardInput2";
import { useState, useRef, useEffect } from "react";
import { red } from "@mui/material/colors";
import { borderRadius } from "@mui/system";

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
  height: "100px",
  justifyContent: "center",
  marginLeft: "100px",
};

const menuDiv = {margin: '10px 0'}

const menuLabel = {fontSize: '1.2rem',};

const menuInput = {
  width: '230px',
  fontSize: '0.875rem',
  fontWeight: '100',
  lineHeight: '1',
  borderRadius: '38px',
  padding: '12px',
  backgroundColor: '#F3F6F9',
  boxShadow: 'inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #f3f3f3',
  margin: '0 20px',
  border: 'none'
};

const menuButton = {
  cursor: 'pointer',
  position: 'absolute',
  margin: '5px 0',
  width: '40px',
  height: '30px',
  lineHeight: '30px',
  borderRadius: '0.55rem',
  backgroundColor: 'white',
  boxShadow: '3px 3px 6px #b8b9be, -3px -3px 6px #f3f3f3'
};

const newMenuDiv = {
  margin: ' 10px 0',
  textAlign: 'right',
  fontSize: '1.2rem',
  fontWeight: '100',
  height: '30px',
}

const menuSpan = {
  marginRight: '20px',
  lineHeight: '30px',
}

const menuDel = {
  padding: '0',
  cursor: 'pointer',
  width: '15px',
  height: '15px',
  borderRadius: '50px',
  backgroundColor: '#fa4444',
  boxShadow: '3px 3px 6px #b8b9be, -3px -3px 6px #f3f3f3'
}

// 메뉴 추가 버튼
const NewMenu = ({menu, onRemove}) => {
  // 추가 버튼 클릭 시, 입력된 메뉴와 가격 나타내는 컴포넌트
  return (
      <div>
          <div style={newMenuDiv}>
            <span  style={menuSpan}>{menu.menu}</span>
            <span  style={menuSpan}>{menu.price}원</span>
            <button style={menuDel} onClick={() => onRemove(menu.id)}>x</button>
          </div> 
      </div>
     
  );
};

function CreateMenu() {
  const [newmenus, setNewmenus] = useState([]); //사용자가 입력한 메뉴들 배열
    const menu = useRef(); // 메뉴 input 값 가져오기 위한 ref
    const price = useRef(); // 가격 input 값 가져오기 위한 ref
    let sumPrice = 0; // 총 가격 구할 변수 선언
    const onCreate = (e) =>{ // 추가 클릭시 , 메누 배열 다음 id 값, 메뉴와 가격 input에 들어있는 value를 배열에 새롭게 추가 --> input값들은 빈 value로 돌리기
        if(menu.current.value !== '' && price.current.value !== ''){
            setNewmenus([...newmenus, {
                id: (newmenus.length === 0 ? 1 : newmenus.slice(-1)[0].id +1),
                menu: menu.current.value,
                price: price.current.value
            }])
            menu.current.value = ''
            price.current.value =''
        } else {
            console.log('메뉴와 가격을 입력해주세요') // input 값이 비어있는데 추가 버튼 누를 시 배열 추가 안됨. 경고메세지
        }
    }
    const onRemove = (id) => { // 삭제하고자 하는 배열 내 객체 id와 일치하면 배열에서 삭제 
        setNewmenus(newmenus.filter(menu => menu.id !== id)) // filter : 일치하지 않는 id로 새로운 배열 만듦. (즉, id일치하면 배열에서 삭제)
    }

    newmenus.map((newmenu) => { // 배열 안 객체를 하나씩 돌면서 sumPrice 변수에 각 가격 더해 총가격 구하기
      sumPrice += parseInt(newmenu.price)
    })
    console.log(sumPrice); // 총가격은 잘 나오는데 이걸 value 값에 연결 어떻게 하는지 모르겠음.

  return (
    <>
      <Box>
        <div style={headerStyle}>
          <h1>새 메뉴 작성하기</h1>
        </div>
      </Box>
      <Box style={Contents_one}>
        <div style={Contents_two}>
          <BoardInput class="addess" label={"픽업 주소"} name="address" />
          <BoardInput label={"주문 희망 브랜드"} name="barnd" />
          <BoardInput label={"주문 희망 시간"} name="time" />

          <div >
            <div style={menuDiv}>
                <label style={menuLabel} htmlFor='menu' >주문희망메뉴</label>
                <input style={menuInput} ref={menu} id='menu' type="text" placeholder="메뉴를 입력하세요"/>
                <label style={menuLabel} htmlFor='price'>가격</label>
                <input style={menuInput} ref={price} id='price'type="text" placeholder="가격을 입력하세요"/>
                <button style={menuButton} onClick={onCreate}>추가</button>
            </div>
                {newmenus.map((newmenu)=>( //배열에 들어있는 값들 map을 통해 하나씩 꺼내서 NewMenu 컴포넌트로 html 생성 , newmenu는 newmenus 배열 내 객체 하나를 뜻함.
                    <NewMenu menu={newmenu} onRemove={onRemove} /> // menu와 onRemove 보라색은 컴포넌트로 넘겨주는 인자 표시,{onRemove} 함수 넘겨줌.
                ))}   
           
        </div>

          <div id="list"></div>
          <BoardInput label={"총 금액"} name="sum" />
          <BoardInput label={"전달 사항"} name="description" />
          <div id="btnWrap" style={btnWrapper}>
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              <UnstyledButtonsSimple label={"작성"} />
            </Link>
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              <UnstyledButtonsSimple label={"작성 취소"} />
            </Link>
          </div>
        </div>
      </Box>
    </>
  );
}

export default CreateMenu;
