import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const withAuth = (WrappedComponent) => {
    return () => {
        const nav = useNavigate();

        useEffect (() => {
            const tokenFromLocalStorage = localStorage.getItem("token");
            if(tokenFromLocalStorage === undefined || tokenFromLocalStorage === null) {
                nav("/login")
            }
        },[])
        return <WrappedComponent />
    }
}

export default withAuth