import { Link } from "react-router-dom";

const OfferCard = ({ item }) => {
  return (
    <Link to={`/offer/${item._id}`}>
      <div className="card-item-container">
        <div className="header-card-item">
          <img
            src={item.owner.account.avatar.secure_url}
            className="owner-avatar-item"
          />
          <p className="owner-name-item">{item.owner.account.username}</p>
        </div>
        <div className="card-item-image">
          <img src={item.product_pictures[0].secure_url} alt="" />
        </div>
        <div className="footer-card-item">
          <p>{item.product_price} €</p>

          <p>taille{item.product_details[1].TAILLE}</p>
          <p>marque{item.product_details[0].MARQUE}</p>
        </div>

        {/* <p>{item.product_name}</p> */}
      </div>
    </Link>
  );
};

export default OfferCard;
