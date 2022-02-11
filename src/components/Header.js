import logoVinted from "../assets/Vinted-logo.png";
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";

const Header = ({isConnected, setIsConnected}) => {
  const navigate = useNavigate();

  const logout = () => {
    setIsConnected(false);
    Cookies.remove("token");
    navigate("/");
  };

  return (
    <div className="header">
      <header>
        <div className="navbar">
          <img
            className="logo-vinted"
            src={logoVinted}
            alt=""
            onClick={() => navigate("/")}
          />
          <input
            className="home-searchbar"
            type="text"
            placeholder="Rechercher des articles"
          />
          {isConnected ? (
            <button className="homepage-button logout-button" onClick={logout}>
              Se déconnecter
            </button>
          ) : (
            <>
              <button
                className="homepage-button log-button"
                onClick={() => navigate("/signup")}
              >
                S'inscrire
              </button>
              <button
                className="homepage-button log-button"
                onClick={() => navigate("/login")}
              >
                Se connecter
              </button>
            </>
          )}

          <button className="homepage-button sell-articles-button">
            Vends tes articles
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
