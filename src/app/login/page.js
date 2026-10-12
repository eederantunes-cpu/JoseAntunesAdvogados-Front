import GoogleLoginButton from "../components/GoogleLoginButton/googleLoginButton";

import "./style.css";

export default function LoginPage() {
  return (
    <main>
      <div className="welcome">
        <GoogleLoginButton />
      </div>
    </main>
  );
}