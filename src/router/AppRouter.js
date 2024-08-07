import {createBrowserRouter,RouterProvider} from "react-router-dom";
import React from "react";
import LoginPage from "../pages/UnAuthen/LoginPage";
import HomePage from "../pages/App/HomePage";
import BoardPage from "../pages/App/BoardPage";
import RootLayout from "../layout/RootLayout";
import AccountPage from "../pages/App/AccountPage";
import withAuth from "../common/hoc/withAuth";
import AuthRender from "../common/renderProps/AuthRender";
import CreateBoardPage from "../pages/App/BoardPage/CreateBoardPage";
import WorkspacePage from "../pages/App/WorkspacePage";
import UpdateBoardPage from "../pages/App/BoardPage/UpdateBoardPage";

//const RootLayoutWithAuth = withAuth(RootLayout);

const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/",
        element: <AuthRender render={() => <RootLayout />} />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "/boards",
                element: <BoardPage />

            },
            {
                path: '/account',
                element: <AccountPage />
            },
            {
                path: '/create-board',
                element: <CreateBoardPage />
            },
            {
                path: '/workspaces',
                element: <WorkspacePage />
            },
            {
                path: '/update-board/:id',
                element: <UpdateBoardPage />
            }
        ]
    }

]);

const AppRouter = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default AppRouter