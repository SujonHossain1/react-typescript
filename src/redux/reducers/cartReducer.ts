import { cartActionType } from 'redux/actions/cartAction';
import { CartAction } from 'redux/actionTypes';
import { IProduct } from 'types';

const cartReducer = (state: IProduct[] = [], action: cartActionType) => {
    switch (action.type) {
        case CartAction.ADD_TO_CART:
            return [...state, action.payload];

        case CartAction.REMOVE_FROM_CART:
            return state.filter((item) => item._id !== action.payload);

        case CartAction.CLEAR_CART:
            return [];
        default:
            return state;
    }
};

export default cartReducer;
