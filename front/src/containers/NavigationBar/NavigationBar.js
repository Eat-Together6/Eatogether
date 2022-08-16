import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <div className={styles.wrapper}>
      <nav>
        <Link to="/">더치 배달</Link>
        <Link to="/login">로그인</Link>
      </nav>
    </div>
  );
}
