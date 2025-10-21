import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import PostView from "../component/PostView";
import PostEdit from "../component/PostEdit";
import CommentList from "../component/CommentList";
import CommentEdit from "../component/CommentEdit";
import "../css/BoardDetail.css";
import api from "../api/axiosConfig";

function BoardDetail({ user }) {
  const { id } = useParams();

  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
  const [isCommentEdit, setIsCommentEdit] = useState(false);

  const loadPost = useCallback(async () => {
    try {
      setLoading(true);
      const res = await api.get(`/api/board/${id}`);
      setPost(res.data);
      setError(null);
    } catch (err) {
      console.error(err);
      setError("해당 게시글은 존재하지 않습니다.");
      setPost(null);
    } finally {
      setLoading(false);
    }
  }, [id]);

  const loadComments = useCallback(async () => {
    try {
      const res = await api.get(`/api/comments/${id}`);
      setComments(res.data ?? []);
    } catch (err) {
      console.error(err);
      setComments([]);
    }
  }, [id]);

  useEffect(() => {
    loadPost();
    loadComments();
  }, [loadPost, loadComments]);

  if (loading) return <div>로딩 중</div>;
  if (error) return <div>{error}</div>;
  if (!post) return <div>해당 게시글이 존재하지 않습니다.</div>;

  return (
    <div>
      {/* 게시글 영역 */}
      {!isEdit ? (
        <PostView setIsEdit={setIsEdit} post={post} />
      ) : (
        <PostEdit setIsEdit={setIsEdit} post={post} user={user} />
      )}

      {/* 댓글 영역 */}
      {!isCommentEdit ? (
        <CommentList
          setIsCommentEdit={setIsCommentEdit}
          loadComments={loadComments}
          comments={comments}
          user={user}
          post={post}
        />
      ) : (
        <CommentEdit
          setIsCommentEdit={setIsCommentEdit}
          comments={comments}
          loadComments={loadComments}
        />
      )}
    </div>
  );
}

export default BoardDetail;
