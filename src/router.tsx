import { Route, Routes } from "react-router-dom"
import { LoginForm } from "./components/LoginForm"
import { LoginPage } from "./pages/LoginPage"
import { RegisterPage } from "./pages/RegisterPage"

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/test" element={<RegisterPage />} />
        </Routes>
    )
}