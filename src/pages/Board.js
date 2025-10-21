import { Link, useNavigate } from "react-router-dom";
import "../css/Board.css";
import api from "../api/axiosConfig";
import { useEffect, useState } from "react";

function Board({ user }) {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const handleWrite = () => {
    
    navigate("/board/write");
  };

  const getPosts = async () => {
    try {
      const res = await api.get("/api/board");
      setPosts(res.data);
    } catch (err) {
      console.error(err);
      setPosts([]);
    }
  };

  const formatDate = (value) => {
    try {
      return String(value).substring(0, 10);
    } catch {
      return "-";
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="board-container">
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
            {posts.length > 0 ? (
              posts.map((p, idx) => (
                <tr key={p.id ?? idx}>
                  <td>{p.id ?? idx + 1}</td>
                  <td>
                    <Link to={`/boardDetail/${p.id}`}>{p.title}</Link>
                  </td>
                  <td>{p.author.username}</td>
                  <td>{p.hit}</td>
                  <td>{formatDate(p.createDate)}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td>
                  <p style={{textAlign:"center", alignItems:"center"}}>게시물이 없습니다.</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <div className="board-btn-wrapper">
          <button className="board-write-btn" onClick={handleWrite}>
            글쓰기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Board;
