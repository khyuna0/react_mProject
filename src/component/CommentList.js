import { useEffect, useState } from "react";
import "../css/CommentList.css";
import api from "../api/axiosConfig";
import { useNavigate } from "react-router-dom";

function CommentList({ setIsCommentEdit, comments, loadComments, post, user }) {
  const [comment, setComment] = useState("");
  const navigate = useNavigate();
  

  useEffect(() => {
    loadComments();
  }, [loadComments]);

  const handleCreate = async () => {

    if(!user) {
      alert("로그인 후에 댓글 작성 가능합니다.")
      navigate("/login");
      return;
    }

    if (!comment.trim()) return;
    try {
      await api.post(`/api/comments/${post.id}`, {
        content: comment,
      });
      setComment("");
      await loadComments();
    } catch (e) {
      console.error(e);
      alert("댓글 등록 실패");
    }
  };

  const onclickDelete = async(commentId) => {
    try {
       if (!window.confirm("정말 삭제하시겠습니까?")) {

      return; 
    }
    await api.delete(`/api/comments/${commentId}`)

    } catch(err) {
        console.error(err);
      alert("댓글 등록 실패");
    }
  }
    const formatDate = (value) => {
    try {
      return String(value).substring(0, 10);
    } catch {
      return "-";
    }
  };

  return (
    <div>
      <div className="comment-section">
        <div className="comment-form">
          <textarea
            placeholder="댓글을 입력하세요"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button onClick={handleCreate}>
          </button>
        </div>

        {/* 기존 댓글 리스트 */}
        <ul className="comment-list">
          {(!comments || comments.length === 0) && (
            <li className="comment-empty">아직 댓글이 없습니다.</li>
          )}
          {comments?.map((c) => (
            <li key={c.id} className="comment-item">
              <div className="comment-header">
                <div className="comment-author">작성자 : {c.author.username}</div>
                <div className="comment-content">{c.content}</div>
                <div className="comment-date">등록일 : {formatDate(c.createDate)}</div>
                {user === c.author?.username && 
                <div className="comment-actions">
                  <button className="btn-edit" onClick={() => setIsCommentEdit(true)}>
                    수정
                  </button>
                  <button className="btn-delete" onClick={() => onclickDelete(c.id)}>
                    삭제
                  </button>
                 
                </div>
                }
              </div>
            </li>
          ))}
        </ul>
        {/* 리스트 끝 */}
      </div>
    </div>
  );
}

export default CommentList;
