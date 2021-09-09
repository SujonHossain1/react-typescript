const initialState = {
    sidebarShow: true,
};

const changeState = (state = initialState, { type, ...rest }: any) => {
    switch (type) {
        case 'set':
            return { ...state, ...rest };
        default:
            return state;
    }
};
export default changeState;
