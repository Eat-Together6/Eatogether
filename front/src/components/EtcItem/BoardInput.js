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
    width: 400px;
    font-size: 0.875rem;
    font-family: IBM Plex Sans, sans-serif;
    font-weight: 100;
    line-height: 1;
    background: ${theme.palette.mode === "dark" ? grey[900] : grey[50]};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[300]};
    border-radius: 8px;
    padding: 12px 12px;
    margin-left: 100px;
    border-radius:0.55rem;
    box-shadow: inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #f3f3f3;
    border: none;

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
  font-family: IBM Plex Sans, sans-serif;
  font-size: 1.2rem;
  margin-top: 15px;
  font-weight: 550;

  &.invalid {
    color: red;
  }
`;

// const HelperText = styled((props) => {
//   const formControlContext = useFormControlUnstyledContext();
//   const [dirty, setDirty] = React.useState(false);

//   React.useEffect(() => {
//     if (formControlContext?.filled) {
//       setDirty(true);
//     }
//   }, [formControlContext]);

//   if (formControlContext === undefined) {
//     return null;
//   }

//   const { required, filled } = formControlContext;
//   const showRequiredError = dirty && required && !filled;

//   return showRequiredError ? <p {...props}>This field is required.</p> : null;
// })`
//   font-family: IBM Plex Sans, sans-serif;
//   font-size: 0.875rem;
// `;

const WrapStyle = {
  display: "flex",
  paddingLeft: "20px",
  marginTop: "10px",
};

const LabelStyle = {
  width: "180px",
};

const LabelStyle2 = {
  fontSize: "20px",
  fontWeight: "bold",
};

const InputStyle = {
  fontSize: "20px",
  borderRadius: "5px",
  marginRight: "10px",
};

const btnStyle = {
  marginLeft: "10px",
  backgroundColor: "#787878",
  padding: "10px 10px",
  borderRadius: "5px",
  color: "white",
};

export default function UseFormControl({ label, divShow }) {
  const [open, setOpen] = React.useState("none"); //open: "block", close: "none"

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
    if (label === "주문 희망 시간") {
      return <Input onClick={Input_click} type="time" />;
    } else if (label === "픽업 주소") {
      return <Input onClick={Input_click} placeholder="자동으로 주소 뜨게" />;
    } else if (label === "주문 희망 브랜드") {
      return <Input onClick={Input_click} placeholder="브랜드를 입력하세요" />;
    } else if (label === "총 금액") {
      return <Input onClick={Input_click} placeholder="자동으로 가격 계산" />;
    } else {
      return <Input onClick={Input_click} />;
    }
  };

  return (
    <>
      <FormControlUnstyled style={WrapStyle} defaultValue="" required>
        <Label style={LabelStyle}>{label}</Label>
        {handlingInput()}
        {/* <HelperText /> */}
      </FormControlUnstyled>
      <div style={{ display: `${open}` }}>
        <p style={LabelStyle2}>메뉴 추가</p>
        <input style={InputStyle} placeholder="메뉴 이름" />
        <input style={InputStyle} placeholder="가격" />
        <button style={btnStyle} onClick={btn_click}>
          추가
        </button>
      </div>
    </>
  );
}
