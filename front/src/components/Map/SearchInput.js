import React, { useState, useEffect } from "react";
import * as style from "./styles";
import Post from "./Post";
import { useInput } from "hooks";
import { useRecoilState } from "recoil";
import locationState from "state/locationState";

//직접 치는 거, Post로 받아오는 daumAddress==> searchAndMove로 넣어줌 => locationState update, 클릭, 드래그시 들어오는 새로운 주소 locationState update

const SearchInput = ({
  popup,
  setPopup,
  searchAndMove,
  isClick,
  setIsClick,
}) => {
  const locationState1 = useRecoilState(locationState);
  const [form, handleForm, reset] = useInput({
    address: "",
  });
  const [daumAddress, setDaumAddress] = useState();
  useEffect(() => {
    searchAndMove(daumAddress);
  }, [daumAddress]);

  return (
    <>
      <style.InputWrapper>
        <style.Form action="" method="">
          <style.AddressInput
            type="text"
            name="address"
            onClick={() => {
              setPopup(!popup);
              setIsClick(true);
            }}
            value={isClick ? form.address : locationState1[0].address}
            placeholder="주소를 입력해주세요"
            onChange={handleForm}
          ></style.AddressInput>
          <style.ImgButton
            type="button"
            onClick={() => {
              searchAndMove(isClick ? form.address : locationState1[0].address);
            }}
          ></style.ImgButton>
          {popup && <Post setDaumAddress={setDaumAddress} />}
        </style.Form>
      </style.InputWrapper>
    </>
  );
};

export default SearchInput;
