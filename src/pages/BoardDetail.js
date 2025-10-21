import { useState } from "react";
import PostView from "../component/PostView";
import "../css/BoardDetail.css";
import PostEdit from "../component/PostEdit";
import CommentList from "../component/CommentList";
import CommentEdit from "../component/CommentEdit";
import { useParams } from "react-router-dom";
import api from "../api/axiosConfig";

function BoardDetail({ user }) {

  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const [isEdit, setIsEdit] = useState(null);
  const [isCommentEdit, setIsCommentEdit] = useState(null);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const { id } = useParams();

    // 글 요청
    const loadPost = async () => {

    try {
      setLoading(true);
      const res = await api.get(`/api/board/${id}`);
      setPost(res.data);
    } catch (err) {
      console.error(err);
      setError("해당 게시글은 존재하지 않습니다.");
      alert(error);
      setError(null)
    } finally {
      setLoading(false);
    }
  };

  if (!post) {
    alert("해당 글은 존재하지 않습니다.");
    return;
  }

  const loadComments = async () => {
    try {
      const res = await api.get(`/api/comments/${id}`);
      setComments(res.data);
    } catch (err) {
      console.error(err);
      alert("댓글이 없습니다.");
    }
  };

  if(loading) return <div>로딩 중</div>
   if (!post)
    return <div>해당 게시글이 존재하지 않습니다.</div>;

  return (
    <div>
      {/* 게시글 영역 */}
      {!isEdit ? (
        <PostView setIsEdit={setIsEdit} post={post}/>
      ) : (
        <PostEdit setIsEdit={setIsEdit} post={post} user={user}/> // 수정
      )}
      {/* 게시글 영역 끝 */}

      {/* 댓글 영역 */}
      {!isCommentEdit ? (
        <CommentList setIsCommentEdit={setIsCommentEdit} loadComments={loadComments}/>
      ) : (
        <CommentEdit setIsCommentEdit={setIsCommentEdit} comments={comments} loadComments={loadComments}/> // 수정
      )}
      {/* 댓글 영역 끝 */}
    </div>
  );
}

export default BoardDetail;
