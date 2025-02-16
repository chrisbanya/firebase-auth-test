import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

export default function ProtectedRoute({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {user ? children : !isLoading && <Navigate to="/signIn" replace />}
    </>
  );
}
