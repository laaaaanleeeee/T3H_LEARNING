import { message } from "antd";
import api from "../../api/axiosInstance";

export const loginRequest = () => ({
    type: 'auth/LOGIN_REQUEST'
});

export const loginSuccess = (token) => ({
    type: 'auth/LOGIN_SUCCESS',
    payload: token
});

export const loginFailure = (error) => ({
    type: 'auth/LOGIN_FAILURE',
    payload: error
});

export const logout = () => ({
    type: 'auth/LOGOUT'
});


export const login = (username, password) => {
    return async (dispatch) => {
        dispatch(loginRequest());
        try {
            const res = await api.post("/auth/login", {
                username,
                password,
                expiresInMins: 30,
            },
            );
            const data = res.data;
            dispatch(loginSuccess(data.accessToken));
            localStorage.setItem('token', data.accessToken);
            localStorage.setItem('refreshToken', data.refreshToken);
            message.success('Đăng nhập thành công');

            return { success: true, payload: data.accessToken };
        }
        catch (err) {
            const errorMessage = err.response?.data?.message || 'Đăng nhập thất bại!';
            dispatch(loginFailure(errorMessage));
            message.error(`Đăng nhập thất bại! (${errorMessage})`);
        }
    }
}


export const logoutAction = () => {
    return (dispatch) => {
        dispatch(logout());
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        message.success('Đăng xuất thành công');
    }
}