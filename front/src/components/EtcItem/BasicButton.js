import * as React from "react";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";
import Stack from "@mui/material/Stack";

const CustomButton = styled(ButtonUnstyled)`
  font-color: black;
  font-weight: bold;
  font-size: 0.875rem;
  border-radius: 0.55rem;
  background-color: white;
  box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #f3f3f3;
  border: none;
  &:hover {
    box-shadow: inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #f3f3f3;
  }
  cursor: pointer;
`;

const CustomButtonT = styled(ButtonUnstyled)`
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
    if (label === "") {
      return <CustomButton>{label}</CustomButton>;
    } else {
      return <CustomButtonT>{label}</CustomButtonT>;
    }
  };
  return (
    <Stack style={btnStyle} spacing={3} direction="row">
      {handlingButton()}
    </Stack>
  );
}
