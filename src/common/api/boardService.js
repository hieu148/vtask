import axiosClient from "./axiosClient";
import {getHeaderWithToken} from "./getHeaderWithToken";

const BASE_URL = '/api/v1/boards'

const getStarredBoardPaging = (page, size) => {
    return axiosClient.get(
        `${BASE_URL}/starred?page=${page}&size=${size}`,
        {headers: getHeaderWithToken()}
    )
}

const createBoard = (boardName, background, workspaceId) => {
    return axiosClient.post(
        `${BASE_URL}/create-board`,
        {
            boardName,
            background,
            workspaceId
        },
        {headers: getHeaderWithToken()}
    )
}

const getAllBoard = (page, size) => {
    return axiosClient.get(
        `${BASE_URL}/get-all?page=${page}&size=${size}`,
        {headers: getHeaderWithToken()}
    )
}

const deleteBoard = (id) => {
    return axiosClient.get(
        `${BASE_URL}/deleteBoard/${id}`,
        {headers: getHeaderWithToken()}
    )
}

const getBoardById = (id) => {
    return axiosClient.get(
        `${BASE_URL}/getBoardById/${id}`,
        {headers: getHeaderWithToken()}
    )
}

const updateBoard = (id, boardName, background, workspaceId) => {
    return axiosClient.post(
        `${BASE_URL}/update-board/${id}`,
        {
            boardName,
            background,
            workspaceId
        },
        {headers: getHeaderWithToken()}
    )
}



const boardService = {
    getStarredBoardPaging,
    createBoard : createBoard,
    getAllBoard,
    deleteBoard,
    updateBoard,
    getBoardById
}

export default boardService