import { AuthAction } from 'redux/actionTypes';
import { IAuth } from 'types';

interface loginPendingAction {
    type: AuthAction.LOGIN_PENDING;
}
interface loginSuccessAction {
    type: AuthAction.LOGIN_SUCCESS;
    payload: IAuth;
}
interface loginFailureAction {
    type: AuthAction.LOGIN_FAILURE;
    payload: string;
}

interface logoutAction {
    type: AuthAction.LOGOUT;
}

export type authActionType =
    | loginPendingAction
    | loginSuccessAction
    | loginFailureAction
    | logoutAction;
