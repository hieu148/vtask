import {
    FETCH_WORKSPACE_SUCCESS,
    WORKSPACE_START_LOADING, WORKSPACE_STOP_LOADING
} from "../action/workspaceAction";

const initialState = {
    loading: false,
    data: []
}

const workspaceReducer = (state = initialState, {type, payload}) => {
    switch (type){
        case FETCH_WORKSPACE_SUCCESS:
            console.log('Fetch workspace done!!!!', payload)
            return {...state, data: payload}
        case WORKSPACE_START_LOADING:
            return {...state, loading: true}
        case WORKSPACE_STOP_LOADING:
            return {...state, loading: false}
        default:
            return state
    }
}

export default workspaceReducer
