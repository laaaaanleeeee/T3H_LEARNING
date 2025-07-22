import { Route, Routes, Navigate } from "react-router-dom";
import './App.css'
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import AboutUsPage from "./pages/AboutUsPage";
import NewsPage from "./pages/NewsPage";
import BookingNowPage from "./pages/BookingNowPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Test from "./components/Test";
import {useAuth} from "./hook/useAuth";
import CartPage from "./pages/CartPage";
import UserInforPage from "./pages/UserInforPage";



const PrivateRoute = ({ children }) => {
  const { token } = useAuth();
  return token ? children : <Navigate to="/login" replace />;
}


function App() {

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/signup" element={<SignUpPage />}></Route>

      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/menu" element={<MenuPage />}></Route>
        <Route path="/about" element={<AboutUsPage />}></Route>
        <Route path="/news" element={<NewsPage />}></Route>
        <Route path="/booking" element={<BookingNowPage />}></Route>

        <Route path="/userinfo" element={<PrivateRoute><UserInforPage /></PrivateRoute>}></Route>
        <Route path="/cart" element={<PrivateRoute><CartPage /></PrivateRoute>}></Route>

      </Route>
    </Routes>
  )
}

export default App
