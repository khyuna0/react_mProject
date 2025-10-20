import { Link, useNavigate } from "react-router-dom";
import "../css/Board.css";

function Board({ boardType }) {
  const navigate = useNavigate(); // ← 인자 제거

  const handleOnclick = () => {
    navigate(`/board/write`); // 필요 시 /board/write/${boardType}
  };

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
            <tr>
              <td>1</td>
              <Link to="/boardDetail">
                <td>누르면 상세글보기로 이동됨</td>
              </Link>
              <td>글쓴이입니다</td>
              <td>0</td>
              <td>작성일</td>
            </tr>
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
