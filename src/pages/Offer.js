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
  }, []);

  console.log("item offer.js : ", item);

  return isLoading ? (
    <div>
      <p>ça load ...</p>
    </div>
  ) : (
    <div className="offer-details">
      <p>Offer.js = détail de l'item</p>
      <div>J'ai récupéré l'id : {id}</div>
      <p>{item.product_name}</p>
    </div>
  );
};

export default Offer;
