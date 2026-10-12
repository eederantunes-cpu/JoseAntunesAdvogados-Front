
import { signIn } from "../../../auth"
import "./style.css"

export default function GoogleLoginButton() {
  return (
    <form className="button-login-google"
    action={async () => {
      "use server"
      await signIn("google")
    }}
  >
    <button type="submit">Entrar com Google</button>
  </form>
  )
}