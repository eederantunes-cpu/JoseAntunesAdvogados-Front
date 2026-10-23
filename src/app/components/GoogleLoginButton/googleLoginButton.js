
import { Cinzel } from "next/font/google";
import { signIn } from "../../../auth"
import "./style.css"

const cinzel = Cinzel({
  subsets: ["latin"],
});

export default function GoogleLoginButton() {
  return (
    <form 
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
    <button 
      className="button-login-google"
      type="submit"
    >
      Entrar
    </button>
  </form>
  )
}