import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import boardService from '../services/board/BoardService';
import PaginationB5 from '../components/board/PaginationB5';
import Requests from './../services/Requests';
import ReplyModal from '../components/board/ReplyModal';

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
        console.log('use Effective 실행');
        getBoards();
    }, []);

    const getBoards = (path = Requests.getList, search = '') => {
        boardService
            .getPagingList(path, search)
            .then((response) => {
                console.log(response);
                setBoards(response.data.boards);
                setPaging(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const onClickPaging = (e) => {
        e.preventDefault(); // 기존에 링크 동작을 하지 말아라

        console.log(e.target.pathname); //board
        console.log(e.target.search); //?page=97

        boardService
            .getPagingList(e.target.pathname, e.target.search)
            .then((response) => {
                console.log(response);
                setBoards(response.data.boards);
                setPaging(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };
    // method:DELETE http://127.0.0.1:8000/board/214/

    const deleteBoard = (e) => {
        const { name, value } = e.target;
        console.log(name + '::' + value);

        boardService
            .remove(value)
            .then((respose) => {
                if (paging.page_size == 1)
                    getBoards(
                        Requests.getList,
                        '?page=' + paging.previous_page_number
                    );
                else
                    getBoards(Requests.getList, '?page=' + paging.current_page);
            })
            .catch((e) => {
                console.log(e + '안녕하세요');
            });
    };

    return (
        <div className="container mt-3">
            <div className="container-fluid text-center">
                <h1 className="h3 mb-2 text-gray-800">게시판</h1>
                <p className="mb-4">
                    DataTables is a third party plugin that is used to generate
                    the demo table below. For more information about DataTables,
                    please visit the{' '}
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
                                        <th>댓글</th>
                                        <th>삭제</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {boards &&
                                        boards.map((board) => (
                                            <tr key={board.id}>
                                                <td>{board.id}</td>
                                                <td>{board.name}</td>

                                                <td>
                                                    <Link
                                                        to={
                                                            '/board/' + board.id
                                                        }
                                                    >
                                                        {board.title}
                                                    </Link>
                                                </td>

                                                <td>{board.updated_at}</td>
                                                <td>{board.hit}</td>
                                                <td className="text-center">
                                                    <button
                                                        className="btn btn-success"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal"
                                                        value={board.id}
                                                        // onClick={deleteBoard}
                                                    >
                                                        댓글
                                                    </button>
                                                </td>
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
                        {/* 댓글 모달 */}
                        <ReplyModal></ReplyModal>
                        {/* 페이징*/}
                        {paging != null ? (
                            <div className="d-flex justify-content-center">
                                <PaginationB5
                                    className="text-center"
                                    paging={paging}
                                    onClickPaging={onClickPaging}
                                />
                            </div>
                        ) : null}
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
