import BoardItem from "../../../common/components/BoardItem";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import boardService from "../../../common/api/boardService";
import {useDispatch, useSelector} from "react-redux";
import './style.css';

const BoardPage = () => {
    const size = 8;
    const nav = useNavigate();
    const [page, setPage] = useState(0);
    const allBoards = useSelector(state => state.allBoards.data)
    const dispatch = useDispatch();


    const fetchBoard = async () => {
        try {
            const response = await boardService.getAllBoard(page,size);
            const {content} = response.data;
            dispatch({
                type: 'FETCH_BOARDS_SUCCESS',
                payload: content
            })
        } catch (err) {
            alert('Đã xảy ra lỗi...')
        }
    }
    useEffect(() => {
        fetchBoard()
    }, [page]);

    const handleNextBoardPageClicked = () => {
        if (allBoards.length/size >= page ){
            setPage( page + 1)
        } else {
            alert('Hết trang!!!')
        }
    }

    const handlePrevBoardPageClicked = () => {
        if (allBoards.length/size <= page ){
            setPage( page - 1)
        } else {
            alert('Hết trang!!!')
        }
    }

    const handleCreateBoardClicked = () => {
        nav('/create-board')
    }

    return (
    <div>
        <div className={"board-list"}>
            {
                allBoards.map(board => <BoardItem key={board.boardName} fetchBoard={fetchBoard} {...board} />)
            }
        </div>
        <div className={"btn-container"}>
            <div>
                <div>
                    Bạn đang xem trang {page + 1}
                </div>
                <div>
                    <button className={"button"} onClick={handlePrevBoardPageClicked}>Xem trang trước</button>
                    <button className={"button"} onClick={handleNextBoardPageClicked}>Xem trang sau</button>
                </div>
            </div>
        </div>
        <button className={"button"} onClick={handleCreateBoardClicked}>Create Board</button>
    </div>
    )
}

export default BoardPage

