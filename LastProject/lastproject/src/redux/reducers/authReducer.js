const initialState = {
    token: localStorage.getItem('token') || null,
    loading: false,
    error: null
};


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'auth/LOGIN_REQUEST':
            return {...state, loading: true, error: null};
        case 'auth/LOGIN_SUCCESS':
            return {...state, token: action.payload, loading: false, error: null};
        case 'auth/LOGIN_FAILURE':
            return {...state, token: null, loading: false, error: action.payload};
        case 'auth/LOGOUT':
            return {...state, token: null, loading: false, error: null};
        default:
            return state;
    }
}

export default authReducer;