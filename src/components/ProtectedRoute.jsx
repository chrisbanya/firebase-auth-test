import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({children}) {
const [user, setUser] = useState(null)
const [isLoading, setIsLoading] = useState(true)


useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, ( user) => {
        setUser(user)
        setIsLoading(false)
    })
    return () => unsubscribe()
}, [])

  return (
    <>
    {/* todo: convert the loading spinner to a reusable components */}
      {isLoading && (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-600"></div>
        </div>
      )}
      {user ? children : !isLoading && <Navigate to="/signIn" replace/> }
    </>
  );
}
