import LoginForm from './components/LoginForm';
import  WelcomeLogo from "./components/WelcomeLogo";
import  LoginFooter from "./components/LoginFooter";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import useToken from "../../../common/hook/useToken";

function LoginPage() {
    const nav = useNavigate();
    const token = useToken();

    useEffect(() => {
    const tokenFromLocalStorage = localStorage.getItem("token");
        if(tokenFromLocalStorage){
            nav("/");
        }
    }, []);

    return (
    <div>
        <WelcomeLogo />
        <LoginForm />
        <LoginFooter />
    </div>
    )
}

export default LoginPage