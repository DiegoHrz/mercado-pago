"use client"
import { useState } from "react";
import axios from "axios";

export default function Pasarela(product) {

    const [quantity, setQuantity] = useState(1);
    const quantityIncrement = () => product.stock > quantity
        ? setQuantity(quantity + 1)
        : null;
    const quantityDecrement = () => quantity > 1
        ? setQuantity(quantity - 1)
        : null;

    const checkout = () => {
        axios.post(
            "http://localhost:3001/payment/create-order",
            { ...product, quantity }
        )
            .then(response => {
                window.location.href = response.data.body.init_point;
            })
            .catch(error => console.log({ error: error.message }))
    }

    return (
        <div style={{
            backgroundColor: "grey",
            width: "400px",
            padding: "15px",
            margin: "15px",
        }} >
            <img src={product.image} alt={product.name} style={{ width:"150px "}} />
            <h3>{product.name}</h3>
            <h3>Precio: 100</h3>
            <h4>Stock: {product.stock}</h4>
            <p>Descripción:{product.description}</p>
            <h4>Cantidad: {quantity}</h4>
            <button onClick={quantityDecrement}>-</button>
            <button onClick={quantityIncrement}>+</button>
            <button onClick={checkout}>Comprar</button>
        </div>
    )
}
// id: id,
// 			title: title,
// 			quantity: quantity,
// 			unit_price: price,
// 			currency_id: "PEN",
// 			picture_url: image,
// 			description: description