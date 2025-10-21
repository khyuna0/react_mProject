import { Link } from "react-router-dom";
import "../css/Navbar.css";

function Navbar({ onLogout, user }) {
  return (
    <div className="navbar">
      <div className="navigate">
        <div className="logo">
          <Link to="/">홈페이지 홈</Link>
        </div>

        <div className="menu">
        <Link to="/board">게시판</Link>
        {!user && <Link to="/login">로그인</Link>}
        {!user && <Link to="/signup">회원가입</Link>}
        {user && (
          <button className="logout_btn" onClick={onLogout}>
            로그아웃
          </button>
        )}
          
        </div>
      </div>
    </div>
  );
}

export default Navbar;
