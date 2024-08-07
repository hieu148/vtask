import './style.css';
import boardService from "../../api/boardService";
import {useNavigate} from "react-router-dom";

const BoardItem = ({id, boardName, fetchBoard, background}) => {
    const nav = useNavigate();

    const handleDeleteClicked = () => {
        try {
            boardService.deleteBoard(id);
            alert('Xoá thành công!!!')
            fetchBoard()
        } catch (err) {
            alert('Đã xảy ra lỗi, vui lòng thử lại sau')
        }
    }

    const handleUpdateClicked = () => {
        nav(`/update-board/${id}`)
    }

    return (
      <div className={"board-item"}>
        <img src={background} alt=""/>
        <div className={"board-title"}>
          {boardName}
        </div>
        <div className={"btn-click"}>
            <button className={"button1"} onClick={handleUpdateClicked} > Update </button>
            <button className={"button1"} onClick={handleDeleteClicked} > Delete </button>
        </div>
      </div>
  )
}

export default BoardItem