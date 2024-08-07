import "./RootLayout.css";
import {useNavigate, Outlet} from "react-router-dom";
import TopNav from "../common/components/TopNav";
import MenuItem from "../common/components/MenuItem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faList,
  faRightToBracket,
  faGear
} from '@fortawesome/free-solid-svg-icons'
import UserContextProvider
  from "../common/context/UserContext/userContextProvider";
import useToken from "../common/hook/useToken";

const RootLayout = () => {
    const nav = useNavigate();

//    const token = useToken();

    const handleLogoutClicked = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        nav("/login");
    }

    const menu = [
    {
      title: 'Trang chủ',
      icon: faHouse,
      path: '/'
    },
    {
      title: 'Danh sách boards',
      icon: faList,
      path: '/boards'
    },
    // {
    //   title: 'Danh sách workspace',
    //   icon: faList,
    //   path: '/workspaces'
    // },
    {
      title: 'Tài khoản',
      icon: faGear,
      path: '/account'
    }
    ]

    return(
        <div className={"page-container"}>
            <UserContextProvider>
                <div className={"top-nav"}>
                    <TopNav />
                </div>
                <div className={"page-container-1"}>
                    <div className={"side-nav"}>
                        {
                            menu.map(menuItem => {
                                return <MenuItem
                                    key={menuItem.title}
                                    title={menuItem.title}
                                    icon={menuItem.icon}
                                    path={menuItem.path}
                                    />
                            })
                        }
                        <div className={"logout"} onClick={handleLogoutClicked}>
                            <FontAwesomeIcon icon={faRightToBracket} size={"lg"}
                                                  style={{marginRight: "10px"}}/>
                            Đăng xuất
                        </div>
                    </div>
                    <div className={"page-body"}>
                        <Outlet />
                    </div>
                </div>
            </UserContextProvider>
        </div>
    )
}

export default RootLayout