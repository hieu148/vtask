import {useDispatch, useSelector} from "react-redux";
import {
    fetchWorkspaceSuccessAction,
    startLoadingAction,
    stopLoadingAction
} from "../../../redux/action/workspaceAction";
import workspaceService from "../../../common/api/workspaceService";
import {useEffect} from "react";
import loadingImg from "../../../asset/img/loading.gif";

const WorkspacePage = () => {
    const workspaces = useSelector(state => state.workspaces.data)
    const workspaceLoading = useSelector(state => state.workspaces.loading)

    const dispatch = useDispatch();

    const fetchWorkspaces = () => {
        return async (dispatch) => {
            dispatch(startLoadingAction())
            const response = await workspaceService.getAllWorkspaceForHomePage();
            dispatch(stopLoadingAction())
            const {data} = response;
            dispatch(fetchWorkspaceSuccessAction(data))
        }
    }

    useEffect(() => {
        dispatch(fetchWorkspaces())
    }, []);

    return (
        <div>
            {
                workspaceLoading && (
                    <img src={loadingImg} alt={'loading'}/>
                )
            }
            <ul>
                {
                    workspaces && workspaces.map(workspace => <li key={workspace.id}>{workspace.workspaceName}</li>)
                }
            </ul>
        </div>
    )
}

export default WorkspacePage