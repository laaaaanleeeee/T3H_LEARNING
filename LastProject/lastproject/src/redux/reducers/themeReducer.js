const initialState = {
    theme: 'light',
};


const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_THEME':
            localStorage.setItem('themeConfig', action.payload);
            return { ...state, theme: action.payload };
        case 'INITIALIZE_THEME': {
            const savedTheme = localStorage.getItem('themeConfig');
            if (savedTheme) {
                return { ...state, theme: savedTheme };
            }
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            localStorage.setItem('themeConfig', systemTheme);
            return { ...state, theme: systemTheme };
        }
        default:
            return state;

    }
}

export default themeReducer;