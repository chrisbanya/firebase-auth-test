import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import SignIn from "./Pages/SignIn";
import ProtectedRoute from "./components/ProtectedRoute";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";
import { Suspense, lazy } from "react";
import LoadingSpinner from "./components/LoadingSpinner";

const Register = lazy(() => import("./Pages/Register"));
const PasswordReset = lazy(() => import("./Pages/PasswordReset"));
const View = lazy(() => import("./Pages/View"));

export default function App() {
  return (
    <div>
      <Router>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Routes>
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/" element={<Navigate to="/signIn" />} />
            <Route
              path="/register"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <Register />
                </Suspense>
              }
            />
            <Route
              path="/passwordReset"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <PasswordReset />
                </Suspense>
              }
            />
            <Route
              path="/view"
              element={
                <ProtectedRoute>
                  <Suspense fallback={<LoadingSpinner />}>
                    <View />
                  </Suspense>
                </ProtectedRoute>
              }
            />
          </Routes>
        </ErrorBoundary>
      </Router>
    </div>
  );
}
