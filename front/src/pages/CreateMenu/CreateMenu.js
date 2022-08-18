import Box from "@mui/material/Box";
import * as style from "./styles";
import { useState, useRef, useEffect } from "react";
import styles from "./styles.js";
import { useRecoilState } from "recoil";
import locationState from "state/locationState";

import { OrderInput, WriteEnd } from "pages";

function CreateMenu() {
  const address = useRecoilState(locationState);
  const [inputs, setInputs] = useState({
    address: address[0].address,
    brand: '',
    date: '',
    time: '',
    maxJoiner: '',
    description: ''
  });

  const onChange = (e) =>{
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]:value
    }) 
  }
  console.log(inputs)
  const [end, setEnd] = useState(false);
  // const postOrder = async()=>{
  //   await addLocation({
  //     location_nickname : address[0].address,
  //     latitude: address[0].latitude,
  //     longitude: address[0].longitude
  //   }).then(res=> {
  //     createOrder({
  //       location:res.data.id,
  //       max_joined_user:3,
  //       description: description.current.value,
  //       time: date.current.value+"T"+ time.current.value,
  //       brand: brand.current.value,
  //     }).then(res=>{
  //       alert("성공")
  //       setEnd(true);
  //     })
  //   }).catch(e=>(alert("실패",e)))
  // }




  
  return (
    <>
      <div style={styles.background}>
        <Box>
          <div style={styles.headerStyle}>
            <h1>새 메뉴 작성하기</h1>
          </div>
        </Box>
        { end 
        ? <WriteEnd setEnd={setEnd} data={inputs} />
        : (
           <div>
            <div style={styles.Contents_two}>
              <OrderInput name="address" label="픽업 장소" onChange={onChange} value={address[0].address}/>
              <OrderInput name="brand" label="음식점명" onChange={onChange} placeholder="음식점명을 입력해주세요" />
              <OrderInput name="date" label="주문 날짜" onChange={onChange} type="date" />
              <OrderInput name="time" label="주문 시간" onChange={onChange} type="time" />
              <OrderInput name="maxJoiner" label="인원수" onChange={onChange} type="number" placeholder="받을 최대 인원 수를 입력해주세요" />
              <OrderInput name="description" label="전달사항" onChange={onChange} placeholder="전달사항을 입력해주세요" />
              <style.Button onClick={()=>{
                setEnd(true);
              }}>작성완료</style.Button>
            </div>
          </div>
        )
        }
        
      </div>
    </>
  );
}

export default CreateMenu;
