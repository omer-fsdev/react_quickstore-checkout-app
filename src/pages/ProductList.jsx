import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import CardTotal from "../components/CardTotal";
import axios from "axios";

const ProductList = () => {
  const url = process.env.REACT_APP_API_URL;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorState, setErrorState] = useState(false);

  const getProducts = async () => {
    // console.log('hi')
    setLoading(false);
    try {
      const { data } = await axios(url);
      setProducts(data);
      setErrorState(false);
    } catch (error) {
      console.log(error);
      setErrorState(true);
    }
  };
  console.log(products);
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container mt-3">
      <div className={"bg-light rounded d-sm-block d-md-flex justify-content-evenly py-4"}>
        {loading ? (
          <p className="text-center text-danger w-100 mt-5 fs-3">Loading . . . .</p>
        ) : products.length > 0 ? (
          <>
            <article id="product-panel" className="col-lg-5">
              {products.map((item) => {
                return (
                  <ProductCard
                    key={item.id}
                    item={item}
                    getProducts={getProducts}
                  />
                );
              })}
            </article>
            <article className="col-lg-5 m-3">
              <CardTotal products={products} />
            </article>
          </>
        ) : (
          !errorState && (
            <p className="text-center text-danger w-100 mt-5 fs-3">No Product in the List !</p>
          )
        )}
        {errorState && (
          <p className="text-center text-danger w-100 mt-5 fs-3">Error :(</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
