import { useState } from "react";
import "../css/CommentList.css";

function CommentList() {
  // user, 부모글(원글)

  const [comment, setcomment] = useState("");

  return (
    <div>
      <div class="comment-section">
        <div class="comment-form">
          <textarea placeholder="댓글을 입력하세요"></textarea>
          <button>등록</button>
        </div>

        <ul class="comment-list">
          <li class="comment-item">
            <div class="comment-header">
              <span class="comment-author">홍길동</span>
              <span class="comment-date">2025-10-20 10:24</span>
            </div>
            <p class="comment-content">좋은 글 감사합니다!</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CommentList;
