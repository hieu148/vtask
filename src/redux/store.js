import {applyMiddleware, combineReducers, createStore} from "redux";
import starredBoardReducer from "./reducer/starredBoardReducer";
import workspaceReducer from "./reducer/workspaceReducer";
import {thunk} from "redux-thunk";
import boardReducer from "./reducer/boardReducer";

const store = createStore(combineReducers({
    allBoards : boardReducer,
    starredBoards: starredBoardReducer,
    workspaces: workspaceReducer
}),applyMiddleware(thunk))

export default store