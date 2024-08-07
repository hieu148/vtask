import {useState} from "react";
import boardService from "../../../../common/api/boardService";
import {useNavigate} from "react-router-dom";

const CreateBoardPage = () => {
    const[boardName, setBoardName] = useState('');
    const[workspaceId, setWorkspaceId] = useState('');
    const[background, setBackGround] = useState('https://static.halongtrip.net/static/img/tourngamhhbuatoi_small_3.png');

    const nav = useNavigate();

    const handleCreateBtnClicked = () => {
        boardService.createBoard(boardName,background,workspaceId)
        alert("Tạo board thành công!!!")
        nav("/boards");
    }

    return (
        <div>
            <h2> Create Board </h2>
            <div className={"text-input"}>
                <input
                value={boardName}
                onChange={(e) => setBoardName(e.target.value)}
                type="text"
                placeholder={"Input your Board Name"}
                />
                <input
                value={workspaceId}
                onChange={(e) => setWorkspaceId(e.target.value)}
                type="number"
                placeholder={"Input your Workspace Id"}
                />
                <input
                value={background}
                onChange={(e) => setBackGround(e.target.value)}
                type="text"
                />
            </div>
            <button onClick={handleCreateBtnClicked}>Create</button>
        </div>
    )
}

export default CreateBoardPage