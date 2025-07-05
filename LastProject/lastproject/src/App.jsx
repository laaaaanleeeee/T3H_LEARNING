import { Route, Routes } from "react-router-dom";
import './App.css'
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import AboutUsPage from "./pages/AboutUsPage";
import NewsPage from "./pages/NewsPage";
import BookingNowPage from "./pages/BookingNowPage";


function App() {

  return (
    <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/menu" element={<MenuPage />}></Route>
            <Route path="/about" element={<AboutUsPage />}></Route>
            <Route path="/news" element={<NewsPage />}></Route>
            <Route path="/booking" element={<BookingNowPage />}></Route>
        </Route>
    </Routes>
  )
}

export default App
