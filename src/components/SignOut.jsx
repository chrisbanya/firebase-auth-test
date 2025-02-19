import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import Button from "./Button";
import { useState } from "react";

export default function SignOut() {
  const [isLoading, setIsLoading] = useState(false);
  function handleSignOut() {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setIsLoading(false);
      })
      .catch((error) => {
        // An error happened.
        setIsLoading(false);
      });
  }
  return (
    <>
      <Button clickEvent={handleSignOut}>
        {isLoading ? (
          <span className="animate-pulse">Loading...</span>
        ) : (
          "SignOut"
        )}
      </Button>
    </>
  );
}
