import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useLocation, useNavigate} from "react-router-dom";
import {useState} from "react";

const MenuItem =({title, icon, path}) => {
    const nav = useNavigate();
    const [active, setActive] = useState(false);
    const {pathname} = useLocation();
    console.log(pathname);

    const handleMenuItemClicked = () => {
        nav(path)

    }

    // let menuItemClassName = 'menu-item';
    // if(pathname === path){
    //     menuItemClassName = menuItemClassName + ' active'
    // }


    return (
        <div className={'menu-item'} onClick ={handleMenuItemClicked}>
            <FontAwesomeIcon icon={icon} size={"lg"}
                            style={{marginRight: "10px"}}/>
            {title}
        </div>
    )
}

export default MenuItem