// import styles from "./styles.module.css";
import * as style from "./styles";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <>
        <style.Wrapper>
          <style.Nav>
            <style.Span>
              <Link to="/">더치 배달</Link>
            </style.Span>
            <style.Span>
              <Link to="/login">로그인</Link>
            </style.Span>
          </style.Nav>
        </style.Wrapper>
    </>
  );
}
