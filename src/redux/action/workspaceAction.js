export const FETCH_WORKSPACE_SUCCESS = 'FETCH_WORKSPACE_SUCCESS'
export const WORKSPACE_START_LOADING = 'WORKSPACE_START_LOADING'
export const WORKSPACE_STOP_LOADING = 'WORKSPACE_STOP_LOADING'

export const startLoadingAction = () => {
    return {
        type: WORKSPACE_START_LOADING
    }
}

export const stopLoadingAction = () => {
    return {
        type: WORKSPACE_STOP_LOADING
    }
}

export const fetchWorkspaceSuccessAction = (data) => {
    return {
        type: FETCH_WORKSPACE_SUCCESS,
        payload: data
    }
}