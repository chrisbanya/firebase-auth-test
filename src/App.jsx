import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import SignIn from "./Pages/SignIn";
import Register from "./Pages/Register";
import PasswordReset from "./Pages/PasswordReset";
import View from "./Pages/View";
import ProtectedRoute from "./components/ProtectedRoute";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";

// implement lazy loading


export default function App() {
  return (
    <div>
      <Router>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Routes>
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Navigate to="/signIn" />} />
            <Route path="passwordReset" element={<PasswordReset />} />
            <Route
              path="/view"
              element={
                <ProtectedRoute>
                  <View />
                </ProtectedRoute>
              }
            />
          </Routes>
        </ErrorBoundary>
      </Router>
    </div>
  );
}
