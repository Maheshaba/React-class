import React, { useEffect, useState } from "react";
import Card from "./Card";

const FetchMeal = () => {
  const [data, setData] = useState([]);

  const fetchApi = async () => {
    const url = "https://api.freeapi.app/api/v1/public/meals?page=1&limit=20";
    //const url = "https://api.freeapi.app/api/v1/public/books?page=1&limit=10";
    //const url =
    //(" https://api.freeapi.app/api/v1/public/meals?page=1&limit=10&query=rice");

    const response = await fetch(url);
    const res = await response.json();
    setData(res?.data?.data);
    console.log(res?.data?.data);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="card-container">
      {data &&
        data.map((item) => (
          <div className="" key={item.id}>
            <Card
              meal_name={item.strMeal}
              meal_thumb={item.strMealThumb}
              meal_cat={item.strCategory}
              ratting={item.rating}
              youtubeLink={item.strYoutube} // youtube link strYoutube
              price={item.price}
            />
          </div>
        ))}
    </div>
  );
};

export default FetchMeal;

//&query=rice
