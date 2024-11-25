import { useState, useEffect } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import boardService from '../services/board/BoardService';
import ReplyForm from '../components/board/ReplyForm';
import ReplyForm2 from '../components/board/ReplyForm2';

function BoardUpdatePage() {
    const initBoardState = {
        name: '',
        title: '',
        content: '',
        user: 'admin',
    };
    const { id } = useParams();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setBoard({ ...board, [name]: value });
    };

    const [board, setBoard] = useState(initBoardState);
    const [submitted, setSubmitted] = useState(false);

    const cancelClick = () => {
        navigate(`/board`);
    };
    //useEffect 처음 한번만 랜더링
    useEffect(() => {
        boardService
            .get(id)
            .then((response) => {
                console.log(response.data);
                setBoard(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    const navigate = useNavigate();

    const updateClick = (e) => {
        let data = {
            name: board.name,
            title: board.title,
            content: board.content,
            user: '1',
        };

        boardService
            .update(id, data)
            .then((response) => {
                setSubmitted(true);
                console.log(response.data);
                //페이지 이동
                navigate(`/board`);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    return (
        <div>
            <div className="container mt-3">
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center mt-3">내용상세</h3>
                            <div className="card-body">
                                <div className="form-group">
                                    <label> Type </label>
                                    <select
                                        placeholder="type"
                                        className="form-control"
                                    >
                                        <option value="1">자유게시판</option>
                                        {/* <option value="2">질문과 답변</option> */}
                                    </select>
                                </div>
                                <div className="form-group mt-3">
                                    <label> Name </label>
                                    <input
                                        type="text"
                                        placeholder="이름을 넣으시오"
                                        name="name"
                                        className="form-control"
                                        value={board.name}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <label> Title </label>
                                    <input
                                        placeholder="제목을 넣으시오."
                                        name="title"
                                        className="form-control"
                                        value={board.title}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group mt-3 mb-3">
                                    <label> Content </label>

                                    <textarea
                                        placeholder="내용을 적으시오"
                                        name="content"
                                        className="form-control"
                                        value={board.content}
                                        onChange={handleInputChange}
                                        rows="10"
                                    />
                                </div>
                                <button
                                    className="btn btn-success"
                                    onClick={updateClick}
                                >
                                    Update
                                </button>
                                <button
                                    className="btn btn-danger"
                                    style={{ marginLeft: '10px' }}
                                    onClick={cancelClick}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <ReplyForm2 board={{ ...board }}></ReplyForm2>
            </div>
        </div>
    );
}

export default BoardUpdatePage;
