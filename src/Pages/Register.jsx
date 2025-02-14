import { CiMail } from "react-icons/ci";
import { LiaEyeSolid } from "react-icons/lia";
import { PiEyeClosedBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Register() {
      const [showPassword, setshowPassword] = useState(false);
      const [userCredentials, setUserCredentials] = useState({})
      const [error, setError] = useState("")

      function handleCredentials(e) {
        setUserCredentials({...userCredentials, [e.target.name]: e.target.value})
        // console.log(userCredentials)
       
      }
    function handleshowPassword(e) {
        e.stopPropagation();
        setshowPassword(!showPassword);
    }
    function handleRegister(e) {
        e.preventDefault();
        setError("")
        createUserWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log(user)
         
           
          })
          .catch((error) => {
            setError(error.message)
            console.log(error.message)
           
          
          });
    }
  return (
    <div>
      <div className="font-[sans-serif] bg-white">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 items-center">
          <form className="lg:col-span-3 md:col-span-2 max-w-lg w-full p-6 mx-auto">
            <div className="mb-12">
              <h3 className="text-gray-800 text-4xl font-bold">Register</h3>
              <p className="text-gray-600 text-sm mt-6 leading-relaxed">
                Welcome! Please register to create an account and explore a
                world of possibilities. Your journey begins here.
              </p>
            </div>

            <div className="relative flex items-center">
              <label className="text-gray-800 text-[13px] bg-white absolute px-2 top-[-9px] left-[18px] font-semibold">
                Email
              </label>
              <input
                name="email"
                type="email"
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
                type={showPassword ? "text" : "password"}
                onChange={handleCredentials}
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
            {error && (
              <ul className="mt-2 px-4 grid sm:grid-cols-2 gap-y-1 gap-x-6 w-max list-disc">
                <li className="text-xs text-orange-500">minimum 6 characters</li>
                <li className="text-xs text-orange-500">
                  one uppercase characters
                </li>
                <li className="text-xs text-orange-500">one special characters</li>
                <li className="text-xs text-orange-500">one number</li>
              </ul>
            )}

            {/* <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
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
                <a
                  href="#"
                  className="text-blue-600 font-semibold text-sm hover:underline"
                >
                  Forgot Password?
                </a>
              </div>
            </div> */}

            <div className="mt-12">
              <button
                type="submit"
                onClick={handleRegister}
                className="w-full shadow-xl py-2.5 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
              >
                Register
              </button>
            </div>
            {error && <p className="mt-2 text-red-600 text-center">{error}</p>}

            <p className="text-sm text-gray-600 mt-8 text-center ">
              Already have an account?
              <Link to="/signIn">Sign in</Link>
            </p>
          </form>

          <div className="flex flex-col justify-center space-y-16 md:h-screen max-md:mt-16 min-h-full bg-gradient-to-r from-blue-500 to-blue-700 lg:px-8 px-4 py-4">
            <div>
              <h4 className="text-white text-lg font-semibold">
                Create your account
              </h4>
              <p className="text-[13px] text-white mt-2">
                Welcome to our registration page! Get started by creating your
                account.
              </p>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold">
                Simple & Secure Registration
              </h4>
              <p className="text-[13px] text-white mt-2">
                Our registration process is designed to be straightforward and
                secure. We prioritize your privacy and data security.
              </p>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold">
                Terms and Conditions Agreement
              </h4>
              <p className="text-[13px] text-white mt-2">
                We require users to accept our terms and conditions of our
                service during registration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
    }
