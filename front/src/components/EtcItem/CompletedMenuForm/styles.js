import styled from "styled-components";

export const Button = styled.button`
    background-color: white;
    font-size: 0.9rem;
    padding: 12px 24px;
    border-radius: 0.55rem;
    margin: 25;
    margin-top: 10px;
    box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #f3f3f3;
    border: none;
    font-weight: bold;
    margin-right: 40px;
    cursor: pointer;
    &:hover {
      box-shadow: inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #f3f3f3;
    },
`;

export default {
  Contents_one: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  headerStyle: {
    fontFamily: "BMHANNAPro",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "50px",
    marginTop: "15px",
    marginBottom: "25px",
  },

  menuLabel: {
    float: "left",
    width: "50%",
    fontSize: "1.2rem",
  },

  menuPrice: {
    float: "right",
    fontSize: "1.2rem",
  },

  btnWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "40px",
  },

  sumStyle: {
    display: "flex",
  },

  sumLabel: {
    marginLeft: "300px",
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

  descriptionDiv: {
    margin: "10px 0",
    fontSize: "1.2rem",
    fontWeight: "100",
    display: "flex",
    width: "470px",
  },

  descriptionLabel: {
    float: "left",
    width: "350px",
    fontSize: "1.2rem",
  },

  descriptionContent: {
    float: "right",
    fontSize: "1.2rem",
  },
};
