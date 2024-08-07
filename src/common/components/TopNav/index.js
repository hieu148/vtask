import './style.css'
import {useContext} from "react";
import UserContext from "../../context/UserContext/userContext";

const TopNav = () => {
  const userCtx = useContext(UserContext);

  const {username} = userCtx;

    return (
        <div className={"top-nav-container"}>
            <h2> Xin chào: {username} </h2>
        </div>
    )
}

export default TopNav