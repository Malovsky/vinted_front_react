import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import OfferCard from "../components/OfferCard";

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
      <Header />
      <div className="list-items center">
        {data.offers.map((item, index) => {
          return <OfferCard key={index} item={item} />;
        })}
      </div>
    </>
  );
};

export default Home;
