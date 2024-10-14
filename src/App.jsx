
import { Route, Routes } from "react-router-dom"
import LoginPage from "./components/LoginPage"
import SignupPage from "./components/SignupPage"
import HomePage from "./components/HomePage"

const App = () => {
    return (
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignupPage />} />
        </Routes>
    )
}

export default App
