import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <span className="loginDescription">Connect with your team-work through Groupomania</span>
          <img className="loginLogo" src="assets/logos/icon-above-font.png" alt="" />
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}
