import logoVinted from "../assets/Vinted-logo.png";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Header = ({ isConnected, setIsConnected }) => {
  const navigate = useNavigate();

  const logout = () => {
    Cookies.remove("token");
    setIsConnected(false);
    navigate("/");
  };

  return (
    <div className="header">
      <header>
        <div className="navbar">
          <img
            className="logo-vinted"
            src={logoVinted}
            alt="Logo de la marque Vinted"
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

          <button
            className="homepage-button sell-articles-button"
            onClick={() => {
              navigate("/publish");
            }}
          >
            Vends tes articles
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
