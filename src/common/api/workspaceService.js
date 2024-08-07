import axiosClient from "./axiosClient";
import {getHeaderWithToken} from "./getHeaderWithToken";

const BASE_PATH = '/api/v1/workspaces'

const getAllWorkspaceForHomePage = () => {
    return axiosClient.get(
        `${BASE_PATH}/home-page`,
        {
            headers: getHeaderWithToken()
        }
    )
}

const workspaceService = {
    getAllWorkspaceForHomePage
}

export default workspaceService
