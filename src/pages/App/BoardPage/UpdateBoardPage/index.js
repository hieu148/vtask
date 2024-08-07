import { useEffect, useState } from "react";
import boardService from "../../../../common/api/boardService";
import { useNavigate, useParams } from "react-router-dom";

const UpdateBoardPage = () => {
  const [boardName, setBoardName] = useState("");
  const [workspaceId, setWorkspaceId] = useState("");
  const [background, setBackGround] = useState(
    "https://static.halongtrip.net/static/img/tourngamhhbuatoi_small_3.png"
  );

  const nav = useNavigate();
  const params = useParams();
  // console.log('params:::', params)

  const getBoardDetail = async () => {
    try {
      const { data } = await boardService.getBoardById(params.id);
      console.log(data);
      setWorkspaceId(data.workspaceId);
      setBoardName(data.boardName);
      setBackGround(data.background);
    } catch (err) {
      console.error("Đã xảy ra lỗi getBoardDetail, vui lòng thử lại sau");
    }
  };

  useEffect(() => {
    getBoardDetail();
  }, [params.id]);

  const handleUpdateBtnClicked = async () => {
    try {
      await boardService.updateBoard(
        params.id,
        boardName,
        background,
        workspaceId
      );
      alert("Sửa board thành công!!!");
      nav("/boards");
    } catch (err) {
      alert("Sửa board thất bại!!!");
    }
  };

  return (
    <div>
      <h2> Update Board </h2>
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
      <button onClick={handleUpdateBtnClicked}> Update</button>
    </div>
  );
};

export default UpdateBoardPage;
