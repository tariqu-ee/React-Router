import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/store/get"
    );
    const items = await data.json();
    // console.log(items);
    setItems(items.data);
  };

  return (
    <div className="App">
      {items.map((item) => (
        <Link to={`/shop/${item.itemId}`} images={item.item.images}>
          <h1 key={item.itemId}> {item.item.name} </h1>
        </Link>
      ))}
    </div>
  );
}

export default Shop;
