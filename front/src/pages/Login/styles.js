import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ececec;
`;

export const LoginCard = styled.div`
  border: 1px solid black;
  width: 600px;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-radius: 0.55rem;
  box-shadow: 5px 5px 10px #b1b1b1, -5px -5px 10px #ffffff;
  border: 8px solid #ececec;
  outline: none;
  background-color: #ececec;
`;

export const RegisterText = styled.span`
  font-family: "BMHANNAPro";
  position: absolute;
  bottom: 35px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Title = styled.h1`
  font-family: "BMHANNAPro";
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px;
  font-size: 25px;
`;

export const SocialText = styled.span`
  font-family: "BMHANNAAir";
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  margin-top: 35px;
`;

export const SocialBtnWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const SocialBtnStyle = styled.button`
  background-color: #ececec;
  margin: 10px;
  height: 55px;
  width: 55px;
  border-radius: 50px;
  box-shadow: 5px 5px 10px #b1b1b1, -5px -5px 10px #ffffff;
  border: none;
  &:hover {
    box-shadow: inset 3px 3px 7px #d3d3d3, inset -3px -3px 7px #ffffff;
  }
  cursor: pointer;
`;

export const Logo = styled.img`
  width: 30px;
  height: 30px;
`;

export const LinkStyle = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
};
