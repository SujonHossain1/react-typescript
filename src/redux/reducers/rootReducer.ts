import { combineReducers } from 'redux';
import authReducer from './authReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    auth: authReducer,
});

export default rootReducer;

export type AppState = ReturnType<typeof rootReducer>;
