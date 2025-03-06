
export const reducerTheme = (state, action) => {
    switch(action.type){
        case 'TOGGLE_THEME':
            return (state === 'dark' ? "light" : "dark");
        default:
            return state;
    }
};