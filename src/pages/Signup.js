import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axiosConfig";
import "../css/Signup.css";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setCheckPassword] = useState("");
  const [errors, setErrors] = useState("");

  const navigate = useNavigate();

  // 회원가입 처리
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    try {
      await api.post("/api/auth/signup", { username, password, passwordCheck });
      alert("회원가입 성공!");
      navigate("/login");
    } catch (err) {
      if (err.response && err.response.status === 400) {
        // 회원 가입 에러 발생
        setErrors(err.response.data); // 에러 추출 -> errors에 저장
      } else {
        console.error(errors, err);
      }
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
        </div>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호를 입력하세요"
        />

        <input
          type="password"
          value={passwordCheck}
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

export default Signup;
