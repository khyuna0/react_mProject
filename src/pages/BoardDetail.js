import { useState } from "react";
import PostView from "../component/PostView";
import "../css/BoardDetail.css";
import PostEdit from "../component/PostEdit";
import CommentList from "../component/CommentList";

function BoardDetail() {
  const [isEdit, setIsEdit] = useState(null);

  return (
    <div>
      {/* 게시글 영역 */}
      {!isEdit ? (
        <PostView setIsEdit={setIsEdit} />
      ) : (
        <PostEdit setIsEdit={setIsEdit} />
      )}
      {/* 게시글 영역 끝 */}

      {/* 댓글 영역 */}
      <CommentList />
      <CommentEdit />
      {/* 댓글 영역 끝 */}
    </div>
  );
}

export default BoardDetail;
