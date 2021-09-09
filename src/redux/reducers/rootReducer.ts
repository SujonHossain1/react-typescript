import { combineReducers } from 'redux';
import authReducer from './authReducer';
import cartReducer from './cartReducer';
import changeState from './navReducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    auth: authReducer,
    nav: changeState,
});

export default rootReducer;

export type AppState = ReturnType<typeof rootReducer>;
