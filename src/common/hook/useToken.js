import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const useToken = () => {
  const [token, setToken] = useState(null);
  const nav = useNavigate();

  useEffect(() => {
    const tokenFromLocalStorage = localStorage.getItem("token");
    if(tokenFromLocalStorage === undefined || tokenFromLocalStorage === null){
        nav("/login");
        return;
    }
    setToken(tokenFromLocalStorage)
  }, []);

  return token
}

export default useToken