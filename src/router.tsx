import { Route, Routes } from "react-router-dom"
import { LoginForm } from "./components/LoginForm"
import { Home } from "./pages/Home"
import { LoginPage } from "./pages/LoginPage"
import { RegisterPage } from "./pages/RegisterPage"

export const Router = () => {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
        </Routes>
    )
}