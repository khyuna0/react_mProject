import { useState } from "react";

function PostEdit({ setIsEdit }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const user = "작성자";

  const handleEdit = () => {};

  return (
    <div className="board-write-wrapper">
      <h2>게시판 글쓰기</h2>
      <form onClick={handleEdit}>
        <label for="boardType">게시판 선택</label>
        <select id="boardType" name="boardType" required>
          <option value="">-- 선택하세요 --</option>
          <option value="notice">공지사항</option>
          <option value="qna">질문답변</option>
          <option value="free">자유게시판</option>
        </select>

        <label for="title">제목</label>
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

        <div class="btn-group">
          <button type="submit">등록</button>
          <button type="reset" onClick={() => setIsEdit(false)}>
            취소
          </button>
        </div>
      </form>
    </div>
  );
}

export default PostEdit;
