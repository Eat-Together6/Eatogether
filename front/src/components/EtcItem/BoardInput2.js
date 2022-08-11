import * as React from "react";
import FormControlUnstyled, { useFormControlUnstyledContext } from "@mui/base/FormControlUnstyled";
import InputUnstyled, { inputUnstyledClasses } from "@mui/base/InputUnstyled";
import { styled } from "@mui/system";
import clsx from "clsx";

const grey = {
  50: "#F3F6F9",
  100: "#E7EBF0",
  200: "#E0E3E7",
  300: "#CDD2D7",
  400: "#B2BAC2",
  500: "#A0AAB4",
  600: "#6F7E8C",
  700: "#3E5060",
  800: "#2D3843",
  900: "#1A2027",
};

const Input = styled(InputUnstyled)(
  ({ theme }) => `
  
  .${inputUnstyledClasses.input} {
    width: 300px;
    font-size: 0.875rem;
    font-family: 'BMHANNAPro';
    font-weight: 100;
    line-height: 1;
    background: ${theme.palette.mode === "dark" ? grey[900] : grey[50]};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[300]};
    border-radius: 38px;
    padding: 12px 12px;
    box-shadow: inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #f3f3f3;
    border: none;
    margin-left: 85px;
    &:hover {
      background: ${theme.palette.mode === "dark" ? "" : grey[100]};
    }
    &:focus {
      outline: 3px solid ${theme.palette.mode === "dark" ? grey[200] : grey[200]};
    }
  }
`
);

const Label = styled(({ children, className }) => {
  const formControlContext = useFormControlUnstyledContext();
  const [dirty, setDirty] = React.useState(false);

  React.useEffect(() => {
    if (formControlContext?.filled) {
      setDirty(true);
    }
  }, [formControlContext]);

  if (formControlContext === undefined) {
    return <p>{children}</p>;
  }

  const { error, required, filled } = formControlContext;
  const showRequiredError = dirty && required && !filled;
  return (
    <p style={LabelStyle} className={clsx(className, error || showRequiredError ? "invalid" : "")}>
      {children}
    </p>
  );
})`
  font-family: "BMHANNAPro";
  font-size: 1.2rem;
  margin-top: 15px;
  margin-left: 20px;
  font-weight: 550;
  width: 30px;
  &.invalid {
    color: red;
  }
`;

const WrapStyle = {
  display: "flex",
  paddingLeft: "20px",
  marginTop: "10px",
};

const LabelStyle = {
  width: "180px",
};

export default function UseFormControl({ label, divShow }) {
  const [open, setOpen] = React.useState("none");

  const Input_click = () => {
    if (divShow == "block") {
      setOpen("block");
    }
  };

  // 메뉴 추가 버튼
  const btn_click = (e) => {
    let MenuItem = document.createElement("p");
    MenuItem.style.fontSize = "15px";

    let ChildList = e.target.parentElement.children;

    if (ChildList[1].value != "" && ChildList[1].value != "") {
      MenuItem.innerHTML = e.target.parentElement.children[1].value + ":" + e.target.parentElement.children[2].value + "원";
      e.target.parentElement.appendChild(MenuItem);
    } else {
      Window.alert("메뉴 이름과 가격을 입력해주세요");
    }
    //초기화
    ChildList[1].value = "";
    ChildList[2].value = "";
  };
  const handlingInput = () => {
    if (label === "주문 희망 메뉴") {
      return <Input onClick={Input_click} placeholder="메뉴를 입력하세요" />;
    } else if (label === "메뉴 가격") {
      return <Input onClick={Input_click} placeholder="메뉴의 가격을 입력하세요" />;
    } else {
      return <Input onClick={Input_click} />;
    }
  };

  return (
    <>
      <FormControlUnstyled style={WrapStyle} defaultValue="" required>
        <Label style={LabelStyle}>{label}</Label>
        {handlingInput()}
      </FormControlUnstyled>
    </>
  );
}
