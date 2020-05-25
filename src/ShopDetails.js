import React, { useState, useEffect } from "react";

function Item({ match }) {
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  const [item, setItem] = useState([]);

  const fetchItem = async () => {
    const data = await fetch(
      ` https://fortnite-api.theapinetwork.com/store/get`
    );
    const item = await data.json();
    console.log(item);
  };

  return (
    <div className="">
      <h1> ok </h1>
    </div>
  );
}

export default Item;
