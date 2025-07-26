import { createContext, useState, useEffect } from "react";
import { message } from "antd";
import api from "../api/axiosInstance";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);


  const login = async (username, password) => {
    try {
      const res = await api.post("/auth/login", {
        username,
        password,
        expiresInMins: 30,
      },
      );

      const data = res.data;
      console.log(data);
      setToken(data.accessToken);
      localStorage.setItem("token", data.accessToken);
      message.success("Đăng nhập thành công!");
    }
    catch (err) {
      message.error("Đăng nhập thất bại! (" + err.response?.data?.message + ")");
    }
  }

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
    message.success("Đã đăng xuất.");
  };


  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
