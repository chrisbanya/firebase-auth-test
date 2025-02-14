import { useState } from "react";
import { CiMail } from "react-icons/ci";
import { LiaEyeSolid } from "react-icons/lia";
import { PiEyeClosedBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import {auth} from '../firebase/config'
import { signInWithEmailAndPassword } from "firebase/auth";

export default function SignIn() {
  const [showPassword, setshowPassword] = useState(false);
  const [userCredentials, setUserCredentials] = useState({})
  const [error, setError] = useState("")
   
    function handleCredentials(e) {
      setUserCredentials({...userCredentials, [e.target.name]: e.target.value})
      }

  function handleshowPassword(e) {
    e.stopPropagation();
    setshowPassword(!showPassword);
  }
  function handleSignIn(e) {
    e.preventDefault();
    setError("")
    signInWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
  .then((userCredential) => {
    const user = userCredential.user;
     console.log(user)
  })
  .catch((error) => {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    setError(error.message)
    console.log(error.message)
  })
}
  return (
    <div>
      <div className="font-[sans-serif] bg-white">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 items-center">
          <form className="lg:col-span-3 md:col-span-2 max-w-lg w-full p-6 mx-auto">
            <div className="mb-12">
              <h3 className="text-gray-800 text-4xl font-bold">Sign In</h3>
              <p className="text-gray-600 text-sm mt-6 leading-relaxed">
                Welcome back! Please log in to access your account and explore a
                world of possibilities.
              </p>
            </div>

            <div className="relative flex items-center">
              <label className="text-gray-800 text-[13px] bg-white absolute px-2 top-[-9px] left-[18px] font-semibold">
                Email
              </label>
              <input
                type="email"
                name="email"
                onChange={handleCredentials}
                placeholder="Enter email"
                className="px-4 py-3.5 bg-white w-full text-sm border-2 border-gray-200 focus:border-blue-600 rounded-md outline-none"
              />
              <CiMail className="w-[18px] h-[18px] absolute right-4" />
            </div>

            <div className="relative flex items-center mt-8">
              <label className="text-gray-800 text-[13px] bg-white absolute px-2 top-[-9px] left-[18px] font-semibold">
                Password
              </label>
              <input
                name="password"
                onChange={handleCredentials}
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="px-4 py-3.5 bg-white w-full text-sm border-2 border-gray-200 focus:border-blue-600 rounded-md outline-none"
              />

              {showPassword ? (
                <LiaEyeSolid
                  onClick={handleshowPassword}
                  className="w-[18px] h-[18px] absolute right-4 cursor-pointer opacity-50"
                />
              ) : (
                <PiEyeClosedBold
                  onClick={handleshowPassword}
                  className="w-[18px] h-[18px] absolute right-4 cursor-pointer opacity-50"
                />
              )}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-md"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-3 block text-sm text-gray-800"
                >
                  Remember me
                </label>
              </div>
              <div>
                <Link to="/passwordReset"
                  className="text-blue-600 font-semibold text-sm hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>

            <div className="mt-12">
              <button
                type="submit"
                onClick={handleSignIn}
                className="w-full shadow-xl py-2.5 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
              >
                Sign in
              </button>
              {error && (
                <p className="mt-2 text-red-600 text-center">{error}</p>
              )}
            </div>

            <p className="text-sm text-gray-600 mt-8 text-center">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
              >
                Register here
              </Link>
            </p>
          </form>

          <div className="flex flex-col justify-center space-y-16 md:h-screen max-md:mt-16 min-h-full bg-gradient-to-r from-blue-500 to-blue-700 lg:px-8 px-4 py-4">
            <div>
              <h4 className="text-white text-lg font-semibold">
                Secure Authentication
              </h4>
              <p className="text-[13px] text-white mt-2">
                Log in with your registered email and password securely.
              </p>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold">Remember Me</h4>
              <p className="text-[13px] text-white mt-2">
                Enable the "Remember Me" option for a seamless login experience
                in future sessions.
              </p>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold">
                Forgot Password?
              </h4>
              <p className="text-[13px] text-white mt-2">
                Easily recover your account by clicking on the "Forgot
                Password?" link.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}