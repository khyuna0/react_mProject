import { useState } from "react";
import "../css/CommentList.css";

function CommentList({ setIsCommentEdit }) {
  const [comment, setComment] = useState("");

  return (
    <div>
      <div className="comment-section">
        <div className="comment-form">
          <textarea
            placeholder="댓글을 입력하세요"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button>등록</button>
        </div>

        <ul className="comment-list">
          <li className="comment-item">
            <div className="comment-header">
              <span className="comment-author">홍길동</span>
              <span className="comment-date">2025-10-20 10:24</span>
            </div>
            <p className="comment-content">좋은 글 감사합니다!</p>

            <div className="comment-actions">
              <button
                className="btn-edit"
                onClick={() => setIsCommentEdit(true)}
              >
                수정
              </button>
              <button className="btn-delete">삭제</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CommentList;
