import { CartAction } from 'redux/actionTypes';
import { IProduct } from 'types';

interface addToCartAction {
    type: CartAction.ADD_TO_CART;
    payload: IProduct;
}

interface removeFromCartAction {
    type: CartAction.REMOVE_FROM_CART;
    payload: string;
}

interface clearCartAction {
    type: CartAction.CLEAR_CART;
}

export type cartActionType =
    | addToCartAction
    | removeFromCartAction
    | clearCartAction;
