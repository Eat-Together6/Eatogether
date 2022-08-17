import React from "react";
import * as style from "./styles";
import Post from "./Post";

const SearchInput = ({popup, setPopup, address, setAddress, searchAndMove}) => {
    
    return (
        <>
            <style.InputWrapper>
                <style.Form action="" method="">
                    <style.AddressInput
                        type="text"
                        onClick={() => {
                        setPopup(!popup);
                        }}
                        value={address} // 업데이트될 때마다 검색창도 업데이트
                        placeholder="주소를 입력해주세요"
                    ></style.AddressInput>
                    <style.ImgButton
                        type="button"
                        onClick={searchAndMove}
                    ></style.ImgButton>
                    {popup && <Post setAddress={setAddress} />}
                </style.Form>
            </style.InputWrapper> 
        </>
        
    );
}

export default SearchInput;