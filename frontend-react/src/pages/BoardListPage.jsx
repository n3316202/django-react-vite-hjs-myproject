import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import boardService from "../services/board/BoardService";
import PaginationB5 from "../components/board/PaginationB5";

const BoardListPage = () => {
  const [boards, setBoards] = useState([]);
  const [paging, setPaging] = useState([]);

  // 정리하면 아래와 같다.

  // useEffect(() => {
  //   // 매 렌더링마다 실행
  // });

  // useEffect(() => {
  //   // 컴포넌트가 처음 렌더링된 실행
  // }, []);

  // useEffect(() => {
  //   // 컴포넌트가 처음 렌더링된 이후 실행
  //   // a나 b가 변경되어 컴포넌트가 재렌더링된 이후 실행
  // }, [a, b]);

  useEffect(() => {
    console.log("use Effective 실행");
    getBoards();
  }, []);

  const getBoards = () => {
    boardService
      .getBoardList()
      .then((response) => {
        console.log(response);
        //setBoards(response.data.data);
        //setPaging(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteBoard = (e) => {
    const { name, value } = e.target;
    console.log(name + "::" + value);

    boardService
      .remove(value)
      .then((respose) => {
        console.log(respose);
        initBoards();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="container mt-3">
      <div className="container-fluid text-center">
        <h1 className="h3 mb-2 text-gray-800">게시판</h1>
        <p className="mb-4">
          DataTables is a third party plugin that is used to generate the demo
          table below. For more information about DataTables, please visit the{" "}
          <a target="_blank" href="https://datatables.net">
            official DataTables documentation
          </a>
          .
        </p>

        {/* <!-- DataTales Example --> */}
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              DataTables Example
            </h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>번호</th>
                    <th>이름</th>
                    <th>제목</th>
                    <th>날짜</th>
                    <th>히트</th>
                    <th className="text-center">삭제</th>
                  </tr>
                </thead>

                <tbody>
                  {boards &&
                    boards.map((board) => (
                      <tr key={board.id}>
                        <td>{board.id}</td>
                        <td>{board.name}</td>

                        <td>
                          <Link to={"/board/" + board.id}>{board.title}</Link>
                        </td>

                        <td>{board.updated_at}</td>
                        <td>{board.hit}</td>
                        <td className="text-center">
                          <button
                            className="btn btn-success"
                            value={board.id}
                            onClick={deleteBoard}
                          >
                            삭제
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            {/* 페이징           */}
            {/* <PaginationB5 paging={paging} /> */}

            <hr />
            <Link to="/boards/write">
              <button type="button" className="btn btn-primary">
                글쓰기
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    // <!-- /.container-fluid -->);
  );
};

export default BoardListPage;
