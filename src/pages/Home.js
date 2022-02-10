import axios from "axios";
import { useEffect, useState } from "react";
import OfferCard from "../components/OfferCard";
import bannerImage from "../assets/banner_header_vinted.jpeg";

const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return isLoading ? (
    <div>
      <p>Loading ...</p>
    </div>
  ) : (
    <>
      <img className="home-image" src={bannerImage} alt={bannerImage} />
      <div className="list-items center">
        {data.offers.map((item, index) => {
          return <OfferCard key={index} item={item} />;
        })}
      </div>
    </>
  );
};

export default Home;
