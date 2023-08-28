import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item, getProducts }) => {
  const { name, image, price, dumpingRate, amount, id } = item;
  const url = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  const handleMinus = async () => {
    if (amount - 1) {
      try {
        await axios.put(`${url}/${id}`, { ...item, amount: amount - 1 });
      } catch (err) {
        console.log(err);
      }
      getProducts();
    } else {
      return;
    }
  };

  const handlePlus = async () => {
    try {
      await axios.put(`${url}/${id}`, { ...item, amount: amount + 1 });
    } catch (err) {
      console.log(err);
    }
    getProducts();
  };

  const handleRemove = async () => {
    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {
      console.log(error);
    }
    getProducts();
  };

  const editProduct = () => {
    navigate("/update-product", { state: item });
  };

  return (
    <div className="card shadow-lg mb-3">
      <div className="row g-0 align-items-center">
        <div className="col-md-5 p-2 d-flex justify-content-center align-items-center product-image">
          <img
            src={image}
            className="w-50 h-75 rounded-start"
            alt={name}
            title={""}
          />
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <h5 className="card-title" role="button" onClick={editProduct}>
              {name}
            </h5>
            <div className="product-price">
              <p className="text-warning h2">
                €
                <span className="damping-price me-2">
                  {(price * dumpingRate).toFixed(2)}
                </span>
                <span className="h5 text-dark text-decoration-line-through">
                  {parseFloat(price).toFixed(2)}
                </span>
              </p>
            </div>
            <div className="border border-1 border-dark shadow-lg d-flex justify-content-center p-2">
              <div className="quantity-controller">
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={handleMinus}
                >
                  <i className="fas fa-minus"></i>
                </button>
                <p className="d-inline mx-4" id="product-quantity">
                  {amount}
                </p>
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={handlePlus}
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
            </div>
            <div className="product-removal mt-4">
              <button
                className="btn btn-danger btn-sm w-100 remove-product"
                onClick={handleRemove}
              >
                <i className="fa-solid fa-trash-can me-2"></i>Remove
              </button>
            </div>
            <div className="mt-2 fs-5">
              Product Total: €
              <span className="product-line-price">
                {(price * dumpingRate * amount).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
