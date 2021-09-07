import { authActionType } from 'redux/actions/authAction';
import { AuthAction } from 'redux/actionTypes';
import { IAuth } from 'types';

interface IAuthState {
    data: IAuth | null;
    status: 'idle' | 'pending' | 'success' | 'error';
    error: null | string;
}

const initialState: IAuthState = {
    data: null,
    status: 'idle',
    error: null,
};

const authReducer = (
    state: IAuthState = initialState,
    action: authActionType
): IAuthState => {
    switch (action.type) {
        case AuthAction.LOGIN_PENDING:
            return {
                data: null,
                status: 'pending',
                error: null,
            };
        case AuthAction.LOGIN_SUCCESS:
            return {
                status: 'success',
                data: action.payload,
                error: null,
            };

        case AuthAction.LOGIN_FAILURE:
            return {
                data: null,
                status: 'error',
                error: action.payload,
            };

        case AuthAction.LOGOUT:
            return initialState;

        default:
            return state;
    }
};

export default authReducer;
