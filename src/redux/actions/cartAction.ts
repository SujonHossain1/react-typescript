import { CartAction } from 'redux/actionTypes';
import { IProduct } from 'types';

export const addToCart = (payload: IProduct) => {
    return {
        type: CartAction.ADD_TO_CART,
        payload,
    };
};

export const removeFromCart = (payload: string) => {
    return {
        type: CartAction.REMOVE_FROM_CART,
        payload,
    };
};

export const clearCart = () => {
    return {
        type: CartAction.CLEAR_CART,
    };
};
