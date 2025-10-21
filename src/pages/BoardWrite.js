import { useState } from "react";
import "../css/BoardWrite.css";
import api from "../api/axiosConfig";
import { useNavigate } from "react-router-dom";

function BoardWrite({ user }) {
  // user, boardType
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate("");

    if (!user) {
      alert("로그인 후 글 작성 가능합니다.");
      navigate("/login");
      return;
    }

  const handleSubmit = async () => {
    try {
      await api.post("/api/board", { title, content, user });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="board-write-wrapper">
      <h2>게시판 글쓰기</h2>
      <form onClick={handleSubmit}>
        <div for="title">제목</div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 입력하세요"
          required
        />

        <label for="content">내용</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="10"
          placeholder="내용을 입력하세요"
          required
        ></textarea>

        <div className="btn-group">
          <button type="submit">등록</button>
          <button type="reset">취소</button>
        </div>
      </form>
    </div>
  );
}

export default BoardWrite;
