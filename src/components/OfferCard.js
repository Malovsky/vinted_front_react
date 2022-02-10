import { Link } from "react-router-dom";

const OfferCard = ({ item }) => {
  return (
    <Link to={`/offer/${item._id}`}>
      <div className="card-item-container">
        <div className="header-card-item">
          <img
            src={item.owner.account.avatar.secure_url}
            className="owner-avatar-item"
            alt={item.owner.account.username}
          />
          <p className="owner-name-item">{item.owner.account.username}</p>
        </div>
        <div className="card-item-image">
          <img
            src={item.product_pictures[0].secure_url}
            alt={item.product_name}
          />
        </div>
        <div className="footer-card-item">
          <p className="card-item-price">{item.product_price} €</p>
          <p className="card-item-size">{item.product_details[1].TAILLE}</p>
          <p className="card-item-brand">{item.product_details[0].MARQUE}</p>
        </div>

        {/* <p>{item.product_name}</p> */}
      </div>
    </Link>
  );
};

export default OfferCard;
