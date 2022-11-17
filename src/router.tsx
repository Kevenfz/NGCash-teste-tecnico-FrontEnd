import { Route, Routes } from "react-router-dom"
import { LoginPage } from "./pages/LoginPage"

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/test" element={<FormLogin />} />
        </Routes>
    )
}