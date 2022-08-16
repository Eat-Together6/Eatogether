import * as React from "react";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";
import Stack from "@mui/material/Stack";

const CustomButton = styled(ButtonUnstyled)`
  font-family: "BMHANNAPro";
  font-color: black;
  font-weight: bold;
  font-size: 1rem;
  background-color: white;
  padding: 12px 24px;
  border-radius: 0.55rem;
  box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #f3f3f3;
  border: none;
  &:hover {
    box-shadow: inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #f3f3f3;
  }
  cursor: pointer;
`;

const btnStyle = {
  margin: 25,
  marginRight: "40px",
};

export default function UnstyledButtonsSimple({ label }) {
  const handlingButton = () => {
    return <CustomButton>{label}</CustomButton>;
  };
  return (
    <Stack style={btnStyle} spacing={3} direction="row">
      {handlingButton()}
    </Stack>
  );
}
