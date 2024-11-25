//https://htmlcssfreebies.com/bootstrap-5-comment-form-section-component/

import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import boardService from "../../services/board/BoardService";

function ReplyForm2({ board }) {
  //console.log("내가 간다");
  //console.log(board);

  //댓글
  const [reply, setReply] = useState(board);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setReply({ ...reply, [name]: value });
  };

  const navigate = useNavigate();

  useEffect(() => {
    console.log("초기화 실행");
    setReply(board);
  }, [board]);

  //insert into mvc_board (bId, bName, bTitle, bContent, bGroup, bStep, bIndent) values (mvc_board_seq.nextval, ?, ?, ?, ?, ?, ?)

  const replyClick = (e) => {
    e.preventDefault(); // 기존에 링크 동작을 하지 말아라
    console.log(reply);

    const { step, indent } = { ...reply };
    //console.log({ ...reply, [step]: step + 1, [indent]: indent + 1 });

    boardService
      .replyShape(reply)
      .then((response) => {
        console.log(response.data);
        console.log(response);

        let board = { ...reply };
        board.step = step + 1;
        board.indent = indent + 1;

        setReply(board);
        console.log(reply);

        boardService
          .write(board)
          .then((response) => {
            console.log(response);
            navigate(`/board`);
          })
          .catch((e) => {
            console.log(e);
          });
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
