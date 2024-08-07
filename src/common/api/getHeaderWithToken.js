export const getHeaderWithToken = () => {
    return {
        Authorization: localStorage.getItem("token")
    }
}