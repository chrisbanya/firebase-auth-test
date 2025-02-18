import { RiCloseLargeLine } from "react-icons/ri";
import { auth } from "../firebase/config";
import { sendPasswordResetEmail } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function PasswordReset() {
  const [userCredentials, setUserCredentials] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate()

  const validateCredentials = () => {
    if (!userCredentials.email) {
        return false
    }
    return true
  }

  function handleCredentials(e) {
    setUserCredentials({
      ...userCredentials,
      [e.target.name]: e.target.value,
    });
  }

  function handlePasswordReset(e) {
    e.preventDefault()
    if (!validateCredentials()) return;
    setError("")
      sendPasswordResetEmail(auth, userCredentials.email)
        .then(() => {
        setTimeout(() => navigate("/signIn"), 3000);
        })
        .catch((error) => {
          setError(error.message)
          
        });
        
  }


  return (
    <div>
      <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
        <form onSubmit={handlePasswordReset}>
          <div className="w-full max-w-lg bg-white shadow-lg rounded-md p-8 relative">
            <Link to="/signIn">
              <RiCloseLargeLine className="w-3.5 cursor-pointer shrink-0 fill-gray-800 hover:fill-red-500 float-right" />
            </Link>
            <div className="my-8 text-center">
              <h4 className="text-2xl text-gray-800 font-bold">
                Reset Your Password
              </h4>
              <p className="text-sm text-gray-500 mt-2">
                I will send you instructions to reset your password and get you
                back on track.
              </p>
              <input
                type="email"
                name="email"
                required
                onChange={handleCredentials}
                placeholder="Enter Email"
                className="px-4 py-2.5 mt-6 bg-[#f0f1f2] text-gray-800 w-full text-sm focus:bg-transparent outline-blue-600 rounded-md"
              />
            </div>
            <button
              type="submit"
              className="px-5 py-2.5 w-full rounded-md text-white text-sm outline-none bg-blue-600 hover:bg-blue-700"
            >
              Email me
            </button>
            {error && <p className="mt-2 text-red-600 text-center">{error}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}
