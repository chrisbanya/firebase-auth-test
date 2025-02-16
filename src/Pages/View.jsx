import { auth } from "../firebase/config"
export default function View() {
  return (
    <div>
        <p>if you viewed this {auth.currentUser?.email} you are signed in</p>
    </div>
  )
}
