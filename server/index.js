const express = require("express");
const cors = require("cors");


// SDK de Mercado Pago

const { Preference } = require("mercadopago");

const mercadopago = require('mercadopago');

mercadopago.configure({
  access_token: 'TEST-2408704255874219-013111-d1c4fea183c9314276dfa14ad16270d7-471190134'
});

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Soy el server :)");
});

app.post("/create_preference", async (req, res) => {
  try {
    const body = {
      items: [
        {
          title: req.body.title,
          quantity: Number(req.body.quantity),
          unit_price: Number(req.body.price),
          currency_id: "ARS",
        },
      ],
      back_urls: {
        success: "https://www.youtube.com/@onthecode",
        failure: "https://www.youtube.com/@onthecode",
        pending: "https://www.youtube.com/@onthecode",
      },
      auto_return: "approved",
    };

    const preference = new Preference(client);
    const result = await preference.create({ body });
    res.json({
      id: result.id,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Error al crear la preferencia :(",
    });
  }
});

app.listen(port, () => {
  console.log(`El servidor esta corriendo en el puerto ${port}`);
});
