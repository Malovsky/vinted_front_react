import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const Login = ({ setIsConnected }) => {
  const navigate = useNavigate();

  const [email, valueOfEmail] = useState("");
  const [password, valueOfPassword] = useState("");

  const handleSubmitSignUpForm = async (event) => {
    event.preventDefault();

    const data = { email: email, password: password };

    const response = await axios.post(
      "https://lereacteur-vinted-api.herokuapp.com/user/login",
      data
    );

    Cookies.set("token", response.data.token);
    setIsConnected(true);
    navigate("/");
  };

  // URL to use : https://lereacteur-vinted-api.herokuapp.com/user/login

  return (
    <div className="login-container">
      <h2>Se Connecter</h2>
      <form id="login-form" onSubmit={handleSubmitSignUpForm}>
        <input
          className="login-form-input"
          placeholder="Adresse email"
          value={email}
          onChange={(event) => {
            valueOfEmail(event.target.value);
          }}
          type="text"
        />
        <input
          className="login-form-input"
          placeholder="Mot de passe"
          value={password}
          onChange={(event) => {
            valueOfPassword(event.target.value);
          }}
          type="password"
        />
        <button className="submit-login-button" type="submit" id="submit">
          Envoyer
        </button>
      </form>
      <p
        className="login-signup-link"
        onClick={() => {
          navigate("/signup");
        }}
      >
        Pas encore de compte ? Inscris toi !
      </p>
    </div>
  );
};

export default Login;
