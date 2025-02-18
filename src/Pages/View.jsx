import { auth } from "../firebase/config"
import SignOut from "../components/SignOut"
export default function View() {

  return (
    <div className="w-5/6 mx-auto mt-4">
      <nav className="flex justify-between">
        <div>Logo</div>
        <div>
          <SignOut/>
        </div>

      </nav>
      <main className="mt-3">

        <p>if you viewed this {auth.currentUser?.email} you are signed in</p>
      </main>
    </div>
  )
}
