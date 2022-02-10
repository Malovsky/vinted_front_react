import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const Signup = ({ setIsConnected }) => {
  const navigate = useNavigate();

  const [username, valueOfUsername] = useState("");
  const [email, valueOfEmail] = useState("");
  const [password, valueOfPassword] = useState("");

  const handleSubmitSignUpForm = async (event) => {
    event.preventDefault();

    try {
      const data = { username: username, email: email, password: password };
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        data
      );
      Cookies.set("token", response.data.token);
      setIsConnected(true);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signup-container">
      <h2>S'inscrire</h2>
      <form id="signup-form" onSubmit={handleSubmitSignUpForm}>
        <input
          className="signup-form-input"
          type="text"
          placeholder="Nom d'utilisateur"
          onChange={(event) => valueOfUsername(event.target.value)}
          value={username}
          id="username"
        />
        <input
          className="signup-form-input"
          type="text"
          placeholder="Email"
          onChange={(event) => valueOfEmail(event.target.value)}
          value={email}
          id="email"
        />
        <input
          className="signup-form-input"
          type="password"
          placeholder="Mot de passe"
          onChange={(event) => valueOfPassword(event.target.value)}
          value={password}
          id="password"
        />
        <div className="signup-checkbox-container">
          <div className="signup-checkbox">
            <input type="checkbox" id="checkbox-signup" />
            <span>S'inscrire à notre newsletter</span>
          </div>
          <p>
            En m'inscrivant je confirme avoir lu et accepté les Termes &#38;
            Conditions et Politique de Confidentialité de Vinted. Je confirme
            avoir au moins 18 ans.
          </p>
        </div>
        <button className="submit-signup-button" id="submit" type="submit">
          Envoyer
        </button>
      </form>
      <p
        className="login-signup-link"
        onClick={() => {
          navigate("/login");
        }}
      >
        Tu as déjà un compte ? Connecte toi !
      </p>
    </div>
  );
};

export default Signup;
