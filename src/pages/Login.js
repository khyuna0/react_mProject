import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";
import api from "../api/axiosConfig";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post(
        "/api/auth/login",
        new URLSearchParams({ username, password })
      );

      const res = await api.get("/api/auth/me");

      alert("로그인 성공");
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("아이디 또는 비밀번호가 맞지 않습니다.");
    }
  };

  return (
    <div className="login-wrapper">
      <h2 className="login-title">로그인</h2>
      <form onSubmit={handleSubmit} className="loginForm">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="아이디를 입력하세요"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호를 입력하세요"
          required
        />

        <div className="btn-row">
          <button
            type="button"
            className="join-btn"
            onClick={() => navigate("/join")}
          >
            회원 가입
          </button>
          <button type="submit" className="login-btn">
            로그인
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
