"use client";
// SDK de Mercado Pago
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import { useState } from "react";

const PasarelaPagos = () => {
  const [preferenceId, setPreferenceId] = useState(null);

  // Agrega credenciales
  initMercadoPago("TEST-7e80182d-c7d7-40b4-ad55-fa64b6683f46", {
    locale: "es-PE",
  });

  const createPreference = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/create_preference",
        {
          id: "servicio",
          title: "Retiro Espiritual",
          quantity: 1,
          unit_price: 100,
        }
      );

      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="h-screen w-screen">
        <form className="flex flex-col justify-center items-center gap-10 border">
          <label htmlFor="">
            <div className="text-8xl">🌀</div>
          </label>
          <label htmlFor="">
            <div>Retiro Espiritual</div>
          </label>
          <label htmlFor="">
            <div>100$</div>
          </label>
          <button className="border rounded-md" onClick={handleBuy}>
            compra
          </button>

          {preferenceId && (
            <Wallet
              initialization={{ preferenceId: preferenceId }}
              customization={{ texts: { valueProp: "smart_option" } }}
            />
          )}
        </form>
      </div>
    </main>
  );
};

export default PasarelaPagos;
