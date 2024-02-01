"use client";
// SDK de Mercado Pago
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import { useState } from "react";

const PasarelaDonaciones:React.FC = () => {
  const [preferenceId, setPreferenceId] = useState<any | null>(null);

  // Agrega credenciales
  initMercadoPago("TEST-7e80182d-c7d7-40b4-ad55-fa64b6683f46", {
    locale: "es-PE",
  });

  const createPreference = async (formData: FormData) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/create_preference",
        {
          id: "donacion",
          title: formData.get("message") as string,
          quantity: "1",
          unit_price: Number(formData.get("valor")),
        }
      );

      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async(e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="h-screen w-screen">
        <form className="flex flex-col justify-center items-center gap-10 border">
          <label htmlFor="">
            <div>Nombre</div>
            <input name="nombre" type="text" className="text-black" placeholder="opcional" />
          </label>
          <label htmlFor="">
            <div>Valor</div>
            <input name="valor" type="number" className="text-black" />
          </label>
          <label htmlFor="">
            <div>Mensaje</div>
            <input name="mensaje" type="text" placeholder="opcional" className="text-black"/>
          </label>
          <button className="border rounded-md" onClick={handleBuy}>
            compra
          </button>

          <Wallet
            initialization={{ preferenceId: preferenceId }}
            customization={{ texts: { valueProp: "smart_option" } }}
          />
        </form>
      </div>
    </main>
  );
};

export default PasarelaDonaciones;
