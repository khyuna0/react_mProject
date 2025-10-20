import { Link } from "react-router-dom";
import "../css/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navigate">
        <div className="logo">
          <Link to="/">홈페이지 홈</Link>
        </div>

        <div className="menu">
          <Link to="/login">로그인</Link>
          <span>/</span>
          <Link to="/join">회원가입</Link>
          <span>/</span>
          <Link to="/board">게시판</Link>
          {/* TODO: 커스텀 훅으로 boardType 동적 처리 예정 */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
