import styled from "styled-components";

export const OrderDiv = styled.div`
  width: 800px;
  font-size: 1.2rem;
  background-color: #ececec;
  font-family: BMHANNAPro;
  padding: 0px 20px;
  border-radius: 0.55rem;
  box-shadow: inset 3px 3px 7px #d3d3d3, inset -3px -3px 7px #ffffff;
`;

export const FollowOrderDiv = styled.div`
  width: 700px;
  font-size: 1.2rem;
  background-color: white;
  font-family: BMHANNAPro;
  padding: 15px 20px;
  border-radius: 0.55rem;
  box-shadow: inset 3px 3px 7px #d3d3d3, inset -3px -3px 7px #ffffff;
  > * {
    & {
      margin-top: 10px;
    }
    &: first-child {
      margin: 0;
    }
  }
`;

export default {
  background: {
    backgroundColor: "#f3f3f3",
    width: "100%",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
  },

  headerStyle: {
    fontFamily: "BMHANNAPro",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "150px",
  },

  Contents_two: {
    fontSize: "30px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "BMHANNAPro",
  },

  header: {
    fontSize: "1.4rem",
    marginLeft: "20px",
    marginTop: "20px",
    marginBottom: "50px",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    display: "flex",
  },

  label: {
    marginLeft: "20px",
    float: "left",
    width: "350px",
    fontSize: "1.2rem",
    marginBottom: "20px",
  },

  data: {
    float: "right",
    fontSize: "1.2rem",
    marginBottom: "20px",
    marginRight: "20px",
  },

  followData: {
    float: "left",
    marginLeft: "20px",
    marginBottom: "40px",
  },

  followMenu: {
    float: "left",
    marginLeft: "70px",
    width: "400px",
    fontSize: "1.2rem",
  },

  followPrice: {
    float: "right",
    fontSize: "1.2rem",
  },

  followContent: {
    margin: "10px 0",
    fontSize: "1.2rem",
    fontWeight: "100",
    display: "flex",
  },

  sumStyle: {
    display: "flex",
  },

  sumLabel: {
    marginLeft: "400px",
    marginTop: "5px",
    marginBottom: "10px",
    fontSize: "1.3rem",
    color: "#38726C",
  },

  sumPrice: {
    marginLeft: "30px",
    marginTop: "5px",
    marginBottom: "0px",
    fontSize: "1.3rem",
    color: "#38726C",
  },

  buttons: {
    marginTop: "10px",
    display: "flex",
  },

  orderBtn: {
    display: "flex",
    marginRight: "40px",
  },
};
