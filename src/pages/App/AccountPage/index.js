import {useContext, useState} from "react";
import UserContext from "../../../common/context/UserContext/userContext";

const AccountPage = () => {
    const userCtx = useContext(UserContext);

    const[username, setUsername] = useState('');

    const handleChangeUsernameBtnClicked = () => {
        userCtx.setUsername(username)
    }

    return (
        <>
            <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder={"Input username to change"} />
            <button onClick={handleChangeUsernameBtnClicked}>
                Thay đổi tên đăng nhập
            </button>
        </>
    )
}

export default AccountPage