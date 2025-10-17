import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axiosConfig";

function Join() {
  // 회원 가입
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState(""); // 비밀번호 확인 용
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      await api.post("/api/auth/join", { username, password });
    } catch (err) {
      console.error(err);
      if (err == 400) {
        // 에러 종류 따라 구분하기
      }
      alert("회원 가입 오류!");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="JoinForm">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="아이디를 입력하세요"
        />
        {/* 아이디 중복 체크 버튼 추가*/}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호를 입력하세요"
        />

        <input
          type="password"
          value={checkPassword}
          onChange={(e) => setCheckPassword(e.target.value)}
          placeholder="비밀번호 확인"
        />

        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}

export default Join;
