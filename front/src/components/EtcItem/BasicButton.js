import * as React from "react";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";
import Stack from "@mui/material/Stack";
import { autocompleteClasses } from "@mui/material";

const grey = {
  500: "#D3D3D3",
  600: "#C0C0C0",
  700: "#A9A9A9",
};

const CustomButton = styled(ButtonUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  font-weight: bold;
  font-size: 0.875rem;
  background-color: ${grey[600]};
  border-radius: 5px;
  color: white;

  &:hover {
    background-color: ${grey[700]};
  }
`;

const CustomButtonT = styled(ButtonUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  font-weight: bold;
  font-size: 1rem;
  background-color: ${grey[600]};
  padding: 12px 24px;
  border-radius: 15px;
  color: white;
  border-color: white;

  &:hover {
    background-color: ${grey[700]};
  }
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
