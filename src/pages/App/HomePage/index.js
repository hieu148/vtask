import StarredBoardList from "./components/StarredBoardList";
import {useEffect,useReducer, useState} from "react";
import boardService from "../../../common/api/boardService";
import loadingImg from "../../../asset/img/loading.gif";
import './style.css';
import {useDispatch, useSelector} from "react-redux";
import {
    fetchWorkspaceSuccessAction,
    startLoadingAction,
    stopLoadingAction
} from "../../../redux/action/workspaceAction";
import workspaceService from "../../../common/api/workspaceService";

const HomePage = () => {
    const[page, setPage] = useState(0);
    const size = 4;

    const starredBoards = useSelector(state => state.starredBoards.data)
    const loading = useSelector(state => state.starredBoards.loading)

    const dispatch = useDispatch();

    useEffect( ()=> {
        const fetchStarredBoard = async () => {
            try {
                dispatch({
                    type: 'STARRED_BOARD_START_LOADING'
                })
                const response = await boardService.getStarredBoardPaging(page, size);
                dispatch({
                    type: 'STARRED_BOARD_STOP_LOADING'
                })
                const {content} = response.data;
                dispatch({
                    type: 'FETCH_STARRED_BOARDS_SUCCESS',
                    payload: content
                })
            } catch (err) {
                alert('Đã xảy ra lỗi, vui lòng thử lại sau')
            }
        }

        fetchStarredBoard()
    },[page]);


    const handleNextStarredBoardPageClicked = () => {
        if (starredBoards.length/size >= page ){
            setPage( page + 1)
        } else {
            alert('Hết trang!!!')
        }
    }

    const handlePrevStarredBoardPageClicked = () => {
        if (starredBoards.length/size <= page ){
            setPage( page - 1)
        } else {
            alert('Hết trang!!!')
        }
    }

  return (
      <div>
        {
            loading && (
                <img src={loadingImg} alt={'loading'} />
            )
        }
        {
            !loading && (
                <StarredBoardList
                    boards={starredBoards}
                />
            )
        }
        <div className={"paging-container"}>
          <div>
            <div>
              Bạn đang xem trang {page + 1}
            </div>
            <div>
              <button className={"button"} onClick={handlePrevStarredBoardPageClicked}>Xem trang trước</button>
              <button className={"button"} onClick={handleNextStarredBoardPageClicked}>Xem trang sau</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default HomePage
