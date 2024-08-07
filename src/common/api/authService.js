//const login = (username, password) => {
//    return new Promise((resolve, reject) => {
//        setTimeout(() => {
//            const fakeLoginResult = {
//                username: 'username',
//                token: 'fakeToken'
//            }
////            reject('Ohh!!! Something went wrong!!!')
//            resolve(fakeLoginResult)
//        }, 2000);
//    })
//
//}

import axiosClient from "./axiosClient";

const BASE_PATH = "/api/v1/auth"

const login = (username, password) => {
    return axiosClient.post(
        `${BASE_PATH}/login`,
        {
            username,
            password
        }
    )
}

const authService = {
    login: login
}

export default authService