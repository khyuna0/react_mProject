import { useEffect, useState } from "react";
import "../css/CommentEdit.css";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/axiosConfig";

function CommentEdit({ setIsCommentEdit, loadComments, user }) {
  const [comment, setComments] = useState();
  const navigate = useNavigate();
  const id = useParams();

  useEffect(() => {
    if (!user) {
      alert("로그인 후에 이용 가능합니다.");
      navigate("/login");
      return;
    }
    loadComments();
  }, [loadComments]);

  return (
    <div className="comment-edit-box">
      <h3>댓글 수정</h3>
      <form className="edit-form">
        <textarea className="edit-textarea"></textarea>
        <div className="edit-buttons">
          <button type="submit" className="btn-save">
            저장
          </button>

          <button
            type="button"
            className="btn-cancel"
            onClick={() => setIsCommentEdit(false)}
          >
            취소
          </button>
        </div>
      </form>
    </div>
  );
}

export default CommentEdit;
