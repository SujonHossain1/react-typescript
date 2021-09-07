import { Dispatch } from 'react';
import { authActionType } from 'redux/actions/authAction';
import { AuthAction } from 'redux/actionTypes';
import AuthService from 'services/AuthService';

interface ILogin {
    email: string;
    password: string;
}
export const login =
    (payload: ILogin) => async (dispatch: Dispatch<authActionType>) => {
        dispatch({ type: AuthAction.LOGIN_PENDING });

        try {
            const data = await AuthService.login(payload);
            dispatch({
                type: AuthAction.LOGIN_SUCCESS,
                payload: data,
            });
        } catch (error: any) {
            dispatch({
                type: AuthAction.LOGIN_FAILURE,
                payload: error?.response?.data?.message,
            });
        }
    };

export const logout = (): authActionType => {
    return {
        type: AuthAction.LOGOUT,
    };
};
