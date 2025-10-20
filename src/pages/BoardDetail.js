import PostView from "../component/PostView";
import "../css/BoardDetail.css";

function BoardDetail() {
  return (
    <div>
      {/* 게시글 영역 */}
      <PostView />
      {/* 게시글 영역 끝 */}

      {/* 댓글 영역 */}
      {/* 댓글 영역 끝 */}
    </div>
  );
}

export default BoardDetail;
