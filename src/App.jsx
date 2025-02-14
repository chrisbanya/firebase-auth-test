import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import SignIn from "./Pages/SignIn"
import Register from "./Pages/Register"
import PasswordReset from "./Pages/PasswordReset"

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/signIn" element={<SignIn/>}/>
          <Route path="/register" element={<Register/>} />
          <Route path="/" element={<Navigate to="/signIn"/>}/>
          <Route path="passwordReset" element={<PasswordReset/>} />
        </Routes>
      </Router>
    </div>
  )
}
