import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axiosConfig";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      await api.post(
        "/api/auth/login",
        new URLSearchParams({ username, password })
      );
    } catch (err) {
      console.error(err);
      if (err == 400) {
        // 에러 종류 따라 구분하기
      }
      alert("아이디 또는 비밀번호가 맞지 않습니다.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="loginForm">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="아이디를 입력하세요"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호를 입력하세요"
        />

        <button type="submit">로그인</button>
        <button onClick={() => navigate("/join")}>회원 가입</button>
      </form>
    </div>
  );
}
export default Login;
