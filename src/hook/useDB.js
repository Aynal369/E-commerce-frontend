import axios from "axios";
import React, { useEffect, useState } from "react";

const useDB = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/app/v1/product")
      .then((res) => {
        setAllProducts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return { allProducts, setAllProducts };
};

export default useDB;
