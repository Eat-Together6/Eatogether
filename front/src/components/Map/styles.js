import styled from "styled-components";
import SearchIcon from "assets/images/searchIcon.png";

export const Container = styled.div`
    margin: 0;
    border: 0;
    box-sizing: border-box;
    text-decoration: none;s
    color: inherit;
`;

export const InputWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 50vw;
  margin: auto;
  z-index: 999;
  top: 15px;
  left: 50%;
  transform: translate(-50%, 0);
`;

export const AddressInput = styled.input`
  width: 45vw;
  height: 40px;
  border-radius: 50px;
  color: black;
  background-color: #ffc3a0;
  padding: 5px 20px;
  &:focus-visible {
    outline: #ff8743;
  }
  ::placeholder {
    color: #bb5a00;
  }
`;

export const ImgButton = styled.input`
  background-color: transparent;
  width: 30px;
  height: 30px;
  background-image: url(${SearchIcon});
  background-repeat: no-repeat;
  background-size: contain;
  vertical-align: middle;
  margin-left: 20px;
  cursor: pointer;
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 90vh;
`;

export const Form = styled.form`
  display: inline-block;
`;
