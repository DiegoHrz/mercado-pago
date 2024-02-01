import { useState } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import img from "../../assets/Bananita.png";

import "./Product.css";

const Product = () => {
  const [preferenceId, setPreferenceId] = useState(null);
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState("");

  const handleprice = (e) => setPrice(e.target.value);
  const handleQuantity = (e) => setQuantity(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  



  initMercadoPago("TEST-7e80182d-c7d7-40b4-ad55-fa64b6683f46");

  const createPreference = async () => {
    try {
      const response = await axios.post("http://localhost:8080/create_preference", {
        description: description,
        price: price,
        quantity: quantity,
      });

      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  };

  return (
  <div className='card-product-container'>
    <div className='card-product'>
      <div className='card'>
        <img src={img} alt='Product Image' />
        <h3>Bananita contenta</h3>
        
        <input type="number" value={price} onChange={handleprice} placeholder="Price" />
        <input type="number" value={quantity} onChange={handleQuantity} placeholder="Quantity" />
        <input type="text" value={description} onChange={handleDescription} placeholder="Description" />
        <button onClick={handleBuy}>Buy</button>
        {preferenceId && <Wallet initialization={{ preferenceId }} />}
      </div>
    </div>
  </div>
  );
};

export default Product;
