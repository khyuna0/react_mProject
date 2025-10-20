function CommentEdit() {
  return (
    <div class="comment-edit-box">
      <h3>댓글 수정</h3>
      <form class="edit-form">
        <textarea
          class="edit-textarea"
          placeholder="댓글 내용을 수정하세요"
        ></textarea>
        <div class="edit-buttons">
          <button type="submit" class="btn-save">
            저장
          </button>
          <button type="button" class="btn-cancel">
            취소
          </button>
        </div>
      </form>
    </div>
  );
}

export default CommentEdit;
