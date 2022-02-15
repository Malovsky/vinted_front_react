import axios from "axios";
import { useEffect, useState } from "react";
import OfferCard from "../components/OfferCard";
import bannerImage from "../assets/banner_header_vinted.jpeg";

const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  const limit = 30;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offers?limit=${limit}&page=${page}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [page]);

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
      <div className="page-navigation">
        {page !== 1 && (
          <button
            className="page-navigation-before"
            onClick={() => setPage(page - 1)}
          >
            Page précédente
          </button>
        )}

        <p className="page-navigation-now">Page : {page}</p>
        {page <= Math.trunc(Number(data.count) / limit) && (
          <button
            className="page-navigation-after"
            onClick={() => setPage(page + 1)}
          >
            Page suivante
          </button>
        )}
      </div>
    </>
  );
};

export default Home;
