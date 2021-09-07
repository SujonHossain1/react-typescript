import { cartActionType } from 'redux/actions/cartAction';
import { CartAction } from 'redux/actionTypes';
import { IProduct } from 'types';

export const addToCart = (payload: IProduct): cartActionType => {
    return {
        type: CartAction.ADD_TO_CART,
        payload,
    };
};

export const removeFromCart = (payload: string): cartActionType => {
    return {
        type: CartAction.REMOVE_FROM_CART,
        payload,
    };
};

export const clearCart = (): cartActionType => {
    return {
        type: CartAction.CLEAR_CART,
    };
};
