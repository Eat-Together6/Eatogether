import React from "react";
import * as style from "./styles";
import CustomInput from "../../components/EtcItem/CustomInput";
import LoginButton from "../../components/EtcItem/LoginButton";
import {Link} from "react-router-dom";

const Register = () => {
    return (
        <div>
            <style.Container>
                <style.RegisterCard>
                        <style.Title>회원 가입</style.Title>
                        <CustomInput label={"아이디"} placeholderText={"아이디를 입력하세요"} Type={"text"}/>
                        <CustomInput label={"이메일"} placeholderText={"이메일을 입력하세요"} Type={"email"}/>
                        <CustomInput label={"비밀 번호"} placeholderText={"비밀 번호를 입력하세요"} Type={"password"}/>
                        <CustomInput label={"비밀 번호 확인"} placeholderText={"비밀 번호를 다시 입력하세요"} Type={"password"}/>
                        <Link to="/login" style={style.LinkStyle}><LoginButton btnlabel={"회원 가입하기"}></LoginButton></Link>
                </style.RegisterCard>
            </style.Container>
        </div>
);
}
export default Register;