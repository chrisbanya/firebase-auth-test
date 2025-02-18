import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import Button from "./Button";

export default function SignOut() {
  function handleSignOut() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  }
  return (
    <>
      <Button clickEvent={handleSignOut}>SignOut</Button>
    </>
  );
}
