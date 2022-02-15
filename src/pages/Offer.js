import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Offer = () => {
  const [item, setItem] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
      );

      setItem(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <div>
      <p>ça load ...</p>
    </div>
  ) : (
    <div className="offer-body">
      <div className="offer-details">
        <img src={item.product_pictures[0]?.secure_url} alt="" />
        <div className="offer-details-texts">
          <p className="offer-details-price">{item.product_price} €</p>
          <ul className="offer-details-brand-and-co">
            {item.product_details.map((item, index) => {
              const keys = Object.keys(item); // ["MARQUE"]
              return (
                <li key={index}>
                  <span>{keys[0]}</span> <span>{item[keys[0]]}</span>
                </li>
              );
            })}
          </ul>
          <div className="divider"></div>
          <p className="offer-details-name">{item.product_name}</p>
          <p className="offer-details-description">
            {item.product_description}
          </p>
          <div className="offer-details-owner">
            <img
              src={item.owner.account.avatar?.secure_url}
              className="offer-details-owner-avatar"
              alt={item.owner.account.username}
            />{" "}
            <span className="offer-details-owner-name">
              {item.owner.account.username}
            </span>
          </div>
          <button className="offer-details-buy-button">Acheter</button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
