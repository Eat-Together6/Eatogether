// eslint-disable-next-line import/no-anonymous-default-export
import styled from "styled-components";

export const MenuInput = styled.input`
  width: 350px;
  font-size: 0.875rem;
  margin-left: 160px;
  margin-bottom: 18px;
  background-color: #ececec;
  font-family: BMHANNAPro;
  height: 38px;
  padding: 0px 20px;
  border-radius: 0.55rem;
  box-shadow: inset 3px 3px 7px #d3d3d3, inset -3px -3px 7px #ffffff;
`;

export const MenuWrap = styled.div`
  margin: 10px 0;
  margin-left: 40px;
  font-size: 20px;
`;

export const Button = styled.button`
  background-color: white;
  font-size: 0.9rem;
  padding: 12px 24px;
  border-radius: 0.55rem;
  margin: 25;
  box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #f3f3f3;
  border: none;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    box-shadow: inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #f3f3f3;
  }
  ,
  &:nth-child(n + 2) {
    margin-left: 20px;
  }
`;

export const Wrap = styled.div`
  font-size: 18px;
  padding: 50px;
  border-radius: 30px;
  margin-bottom: 50px;
  background-color: #ececec;
  box-shadow: 5px 5px 10px #b1b1b1, -5px -5px 10px #ffffff;
`;

export const Table = styled.table`
  margin: auto;
  line-height: 30px;
  & > tr > td:first-child {
    padding-right: 50px;
    text-align: left;
  }
  & > tr > td:last-child {
    font-family: "BMHANNAAir";
    font-weight: bold;
    text-align: right;
  }
`;

export const Div = styled.div`
  margin: auto;
  width: 600px;
  text-align: center;
`;

export default {
  background: {
    width: "100%",
    height: "100vh",
    background: "#ececec",
  },
  headerStyle: {
    fontFamily: "BMHANNAPro",
    margin: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "150px",
  },
  Contents_two: {
    fontSize: "30px",
    width: "100%",
    display: "flex",
    marginRight: "60px",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "BMHANNAPro",
  },
};
