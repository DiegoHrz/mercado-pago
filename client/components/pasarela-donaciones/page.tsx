"use client";
// SDK de Mercado Pago
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import { useState } from "react";


const PasarelaDonaciones =()=> {
  const [preferenceId, setPrefrenceId] = useState(null)


  // Agrega credenciales
  initMercadoPago("YOUR_PUBLIC_KEY", {
    locale: "es-PE",
  });


  const createPreference = async (formData:FormData) =>{
    try {
      const response = await axios.post('http://localhost:3000/create_preference',{
        id:'donacion',
        title:formData.get('message') as string,
        quantity:'1',
        unit_price: Number(formData.get('valor')),
      })

      const {id} = response.data
      return id;
    } catch (error) {
      console.log(error)
    }
  }



  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) =>{
    e.preventDefault()
  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="h-screen w-screen">
        <form className="flex flex-col justify-center items-center gap-10 border">
          <label htmlFor="">
            <div>Nombre</div>
            <input name="nombre" type="text" placeholder="opcional" />
          </label>
          <label htmlFor="">
            <div>Valor</div>
            <input name="valor" type="number" />
          </label>
          <label htmlFor="">
            <div>Mensaje</div>
            <input name="mensaje" type="text" placeholder="opcional" />
          </label>
          <button className="border rounded-md" onClick={handleClick}>compra</button>

          <Wallet
            initialization={{ preferenceId: "<PREFERENCE_ID>" }}
            customization={{ texts: { valueProp: "smart_option" } }}
          />
        </form>
      </div>
    </main>
  );
}

export default PasarelaDonaciones;