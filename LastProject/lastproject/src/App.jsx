import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import MainLayout from './layout/MainLayout';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import AboutUsPage from './pages/AboutUsPage';
import NewsPage from './pages/NewsPage';
import BookingNowPage from './pages/BookingNowPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import { useSelector } from 'react-redux';
import CartPage from './pages/CartPage';
import UserInforPage from './pages/UserInforPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CustomeMenuPage from './pages/CustomMenuPage';

const PrivateRoute = ({ children }) => {
  const token = useSelector((state) => state.auth.token);
  return token ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/booking" element={<BookingNowPage />} />
        <Route path="/custom-menu" element={<CustomeMenuPage />} />
        <Route path="/menu/:id" element={<ProductDetailPage />} />
        <Route path="/userinfo" element={<PrivateRoute><UserInforPage /></PrivateRoute>} />
        <Route path="/cart" element={<PrivateRoute><CartPage /></PrivateRoute>} />
      </Route>
    </Routes>
  );
}

export default App;