import { createContext, useState, useEffect } from "react";
import { message } from "antd";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  const login = async (username, password) => {
    try {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
          expiresInMins: 30,
        }),
      });

      if (!res.ok) {
        throw new Error("Thông tin đăng nhập không đúng!");
      }

      const data = await res.json();
      setToken(data.accessToken);
      localStorage.setItem("token", data.accessToken);
      message.success("Đăng nhập thành công!");
    } catch (err) {
      message.error("Đăng nhập thất bại! (" + err.message + ")");
    }
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
    message.success("Đã đăng xuất.");
  };

  const getUserInfo = async () => {
    if (!token) throw new Error("Chưa đăng nhập");

    try {
      const res = await fetch("https://dummyjson.com/auth/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error("Token không hợp lệ hoặc đã hết hạn!");
      }

      const user = await res.json();
      return user;
    } catch (error) {
      message.error("Lỗi lấy thông tin người dùng: " + error.message);
      logout();
      throw error;
    }
  };

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, login, logout, getUserInfo }}>
      {children}
    </AuthContext.Provider>
  );
};
