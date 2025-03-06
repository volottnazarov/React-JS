
export const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            if (state === 0) {
                return state;
            }else{
                return state - 1;
            }
        case 'MULTIPL':
            return state * 2;
        case 'RESET':
            return state = 0;
        default:
            return state;
    }
};
