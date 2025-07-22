import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [userData, setUserData] = useState(null);

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
      setUserData({
        id: data.id,
        username: data.username,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
      });

      localStorage.setItem("token", data.accessToken);
    } catch (err) {
      alert("Đăng nhập thất bại! (" + err.message + ")");
    }
  };

  const logout = () => {
    setToken(null);
    setUserData(null);
    localStorage.removeItem("token");
  };

  const getUserInfo = async (accessToken) => {
    try {
      const res = await fetch("https://dummyjson.com/auth/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!res.ok) {
        throw new Error("Token không hợp lệ hoặc đã hết hạn!");
      }

      const user = await res.json();
      setUserData({
        id: user.id,
        username: user.username,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      });
    } catch (error) {
      alert("Lỗi lấy thông tin người dùng: " + error.message);
      logout();
    }
  };

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      getUserInfo(token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, login, logout, userData }}>
      {children}
    </AuthContext.Provider>
  );
};