import React, { useState } from "react";
import ProductForm from "../components/ProductForm";
import axios from "axios";

const initialState = {
  name: "",
  image: "",
  price: 1,
  dumpingRate: 0.8,
  amount: 1,
};
const NewProduct = () => {
  const url = process.env.REACT_APP_API_URL;
  const [formData, setFormData] = useState(initialState);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(url, formData);
      setFormData(initialState);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <ProductForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
        text="Add"

      />
    </div>
  );
};

export default NewProduct;
