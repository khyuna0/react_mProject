import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navigate">
        <div className="logo">홈페이지</div>
        <div className="menu">
          <Link to="/">네비게이션</Link>/<Link to="/login">로그인</Link>/
          <Link to="/join">회원가입</Link>/
        </div>
      </div>
    </div>
  );
}

export default Navbar;
