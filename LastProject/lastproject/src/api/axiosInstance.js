import axios from 'axios';

const api = axios.create({
    baseURL: 'https://dummyjson.com',
    timeout: 10000,
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});


let isRefreshing = false;
let failedQueue = [];


const processQueue = (error, token = null) => {
    failedQueue.forEach((prom) => {
        if (error) prom.reject(error);
        else prom.resolve(token);
    });
    failedQueue = [];
}


api.interceptors.response.use(
    response => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            if (isRefreshing) {
                return new Promise((resolve, reject) => {
                    failedQueue.push({
                        resolve: (token) => {
                            originalRequest.headers.Authorization = `Bearer ` + token;
                            resolve(api(originalRequest));
                        },
                        reject: (err) => reject(err),
                    });
                })
            }

            isRefreshing = true;

            try {
                const res = await axios.post(
                    "https://dummyjson.com/auth/refresh",
                    { expiresInMins: 30 },
                    {
                        headers: { "Content-Type": "application/json" },
                        timeout: 5000
                    });

                const newAccessToken = res.data.accessToken;
                localStorage.setItem('token', newAccessToken);

                processQueue(null, newAccessToken);
                originalRequest.headers.Authorization = 'Bearer ' + newAccessToken;

                return api(originalRequest);
            } catch (err) {
                processQueue(err, null);
                localStorage.removeItem("token");
                window.location.href = '/login';
                return Promise.reject(err);
            } finally {
                isRefreshing = false;
            }
        }

        return Promise.reject(error);
    }
)

export default api;