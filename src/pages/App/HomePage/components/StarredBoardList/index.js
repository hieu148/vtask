import './style.css'
import BoardItem from "../../../../../common/components/BoardItem";

const StarredBoardList = ({boards}) => {
  return (
      <div className={"starred-board-list"}>
        {
          boards.map(board => <BoardItem key={board.boardName} {...board} />)
        }
      </div>
  )
}

export default StarredBoardList