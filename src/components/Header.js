import bannerImage from "../assets/banner_header_vinted.jpeg";
import logoVinted from "../assets/Vinted-logo.png";

const Header = () => {
  return (
    <div className="header">
      <header className="center">
        <div className="navbar">
          <img className="logo-vinted" src={logoVinted} alt="" />
          <input
            className="home-searchbar"
            type="text"
            placeholder="Rechercher des articles"
          />
          <button className="homepage-button log-button">S'inscrire</button>
          <button className="homepage-button log-button">Se connecter</button>
          <button className="homepage-button sell-articles-button">
            Vends tes articles
          </button>
        </div>
        <img
          className="home-image"
          src={bannerImage}
          alt="Image d'illustration"
        />
      </header>
    </div>
  );
};

export default Header;
