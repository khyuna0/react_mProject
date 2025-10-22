import { useEffect, useState } from "react";
import api from "../api/axiosConfig";
import { useNavigate } from "react-router-dom";

function BoardWriteForm({ user }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      alert("로그인 후에 이용 가능합니다.");
      navigate("/login");
      return;
    }
  }, []);

  const handleSubmit = async () => {
    if (!user) {
      alert("로그인 후에 이용 가능합니다.");
      navigate("/login");
    }
    try {
      await api.post("api/board/write", { title, content });
      navigate("/board");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <form onClick={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 입력하세요"
        ></input>
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="내용을 입력하세요"
        ></input>

        <button type="submit">저장</button>
      </form>
    </div>
  );
}
export default BoardWriteForm;
