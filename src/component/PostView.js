function PostView() {
  // props - 게시판 타입, user, 게시판 번호

  return (
    <div className="board-detail-container">
      <h2>게시판 상세</h2>
      <label htmlFor="content" className="label-title">
        제목
      </label>
      <div
        className="input-title"
        type="text"
        placeholder="제목을 입력하세요"
        required
      />

      <label htmlFor="content" className="label-content">
        내용
      </label>
      <div
        id="content"
        className="textarea-content"
        rows="10"
        placeholder="내용을 입력하세요"
        required
      ></div>

      <div className="btn-group">
        <button className="btn btn-edit">수정</button>
        <button className="btn btn-delete">삭제</button>
        <button className="btn btn-list">목록</button>
      </div>
    </div>
  );
}

export default PostView;
