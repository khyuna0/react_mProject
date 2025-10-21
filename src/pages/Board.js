import { Link, useNavigate } from "react-router-dom";
import "../css/Board.css";
import api from "../api/axiosConfig";
import { useEffect, useState } from "react";

function Board({ boardType }) {
  const [post, setPost] = useState([]);
  const navigate = useNavigate();
  const handleOnclick = () => {
    navigate(`/board/write`);
  };

  const getposts = async () => {
    try {
      const res = await api.get("/api/board");
      setPost(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const formateDate = (createDate) => {
    return createDate.subString(0, 10);
  };

  useEffect(() => {
    getposts();
  }, []);

  return (
    <div className="board-container">
      {/* 게시판 전체 글 목록 */}
      <div className="boardList-wrapper">
        <table className="board-table">
          <thead className="boardList-thead">
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>글쓴이</th>
              <th>조회수</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody className="boardList-tbody">
            {post.length > 0 ? (
              post.slice().map((p) => (
                <tr key={p.id}>
                  <td>번호</td>
                  <td>
                    <Link to={`/boardDetail/${p.id}`}>{p.title}</Link>
                  </td>
                  <td>{p.hit}</td>
                  <td>작성자</td>
                  <td>{p.createDate.substring(0, 10)}</td>
                </tr>
              ))
            ) : (
              <tr>게시물이 없습니다.</tr>
            )}
          </tbody>
        </table>

        <div className="board-btn-wrapper">
          <button className="board-write-btn" onClick={handleOnclick}>
            글쓰기
          </button>
        </div>
      </div>
      {/* 게시판 전체 글 목록 끝 */}
    </div>
  );
}

export default Board;
