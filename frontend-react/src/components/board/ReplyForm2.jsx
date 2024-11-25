//https://htmlcssfreebies.com/bootstrap-5-comment-form-section-component/

function ReplyForm2({ board }) {
  //댓글
  const [reply, setReply] = useState(...board);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setReply({ ...board, [name]: value });
  };

  useEffect(() => {
    console.log(reply);
  }, []);

  const replyClick = (e) => {
    e.preventDefault(); // 기존에 링크 동작을 하지 말아라
    console.log(board);

    boardService
      .replyShape(board)
      .then((response) => {
        setSubmitted(true);
        console.log(response.data);

        navigate(`/board`);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    // HTML<!-- Comment Form 1 - HCF Bootstrap 5 Component -->
    <div className="card my-4">
      <h5 className="card-header">Leave a Comment:</h5>
      <div className="card-body">
        <form method="POST">
          <div className="form-group">
            <div className="row mb-3">
              <div className="col-12 col-md-6">
                <label htmlFor="email" className="form-label">
                  이름 <span className="text-danger">*</span>
                </label>
                <div className="input-group">
                  <span className="input-group-text"></span>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    required
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="col-12 col-md-6">
                <label htmlFor="email" className="form-label">
                  제목 <span className="text-danger">*</span>
                </label>
                <div className="input-group">
                  <span className="input-group-text"></span>
                  <input
                    type="title"
                    className="form-control"
                    id="title"
                    name="title"
                    required
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="col-12">
              <label for="comment" className="form-label">
                Comment <span className="text-danger">*</span>
              </label>
              <textarea
                className="form-control"
                id="content"
                rows="3"
                required=""
                name="content"
                onChange={handleInputChange}
              ></textarea>
            </div>
            <button
              onClick={replyClick}
              type="submit"
              className="btn btn-primary mt-3"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReplyForm2;
