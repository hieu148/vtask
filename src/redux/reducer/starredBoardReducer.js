const initialState = {
    loading: false,
    data: []
}

const starredBoardReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case 'FETCH_STARRED_BOARDS_SUCCESS':
            console.log('Received starred boards', payload)
            return {...state, data: payload}
        case 'STARRED_BOARD_START_LOADING':
            return {...state, loading: true}
        case 'STARRED_BOARD_STOP_LOADING':
            return {...state, loading: false}
        default:
            return state;
    }
}

export default starredBoardReducer