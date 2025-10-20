import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axiosConfig";
import "../css/Join.css";

function Join() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [isAvailable, setIsAvailable] = useState(null); // 아이디 중복 체크 상태
  const navigate = useNavigate();

  // 아이디 중복 확인
  const handleCheckUsername = async () => {
    if (!username.trim()) {
      alert("아이디를 입력하세요.");
      return;
    }
    try {
      const res = await api.get(`/api/auth/check?username=${username}`);
      setIsAvailable(res.data.available);
      alert(
        res.data.available
          ? "사용 가능한 아이디입니다."
          : "이미 존재하는 아이디입니다."
      );
    } catch (err) {
      console.error(err);
      alert("중복 확인 중 오류 발생");
    }
  };

  // 회원가입 처리
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim() || !checkPassword.trim()) {
      alert("모든 항목을 입력하세요.");
      return;
    }

    if (password !== checkPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      await api.post("/api/auth/join", { username, password });
      alert("회원가입이 완료되었습니다!");
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("회원가입 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="join-wrapper">
      <h2 className="join-title">회원가입</h2>
      <form onSubmit={handleSubmit} className="JoinForm">
        <div className="input-group">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="아이디를 입력하세요"
          />
          <button
            type="button"
            className="check-btn"
            onClick={handleCheckUsername}
          >
            중복 확인
          </button>
        </div>

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

        <button type="submit" className="join-btn">
          회원가입
        </button>
      </form>
    </div>
  );
}

export default Join;
