import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const AuthRender = ({render}) => {
    const nav = useNavigate();

    useEffect (() => {
        const tokenFromLocalStorage = localStorage.getItem("token");
        if(tokenFromLocalStorage === undefined || tokenFromLocalStorage === null) {
            nav("/login")
        }
    },[])
    return render();
}

export default AuthRender