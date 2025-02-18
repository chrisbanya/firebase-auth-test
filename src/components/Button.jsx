import { useState } from "react";

export default function Button({ children, clickEvent }) {
  const [buttonType, setButttonType] = useState("submit");
  function handleClick() {
    if (clickEvent) {
      setButttonType((prevType) =>
        prevType === "submit" ? "button" : "submit"
      );
      // calls my handleSignout function in SignOut comp..
      clickEvent();
    }
  }
  return (
    <button
      type={buttonType}
      onClick={handleClick}
      className="w-full shadow-xl py-2.5 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
    >
      {children}
    </button>
  );
}
