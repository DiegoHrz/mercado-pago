const { Router } = require('express');



const router = Router();


router.get('/', (req, res) => {
    res.send('Bienvenido a la API');
  });



// mercadopago.configure({
//     access_token: "TEST-2408704255874219-013111-d1c4fea183c9314276dfa14ad16270d7-471190134",
//   });
  
//   app.get("/", function (req, res) {
//     res.send("el servidor de mercado pago funciona! :)");
//   });
  
//   app.post("/create_preference", (req, res) => {
//     let preference = {
//       items: [
//         {
//           title: req.body.description,
//           unit_price: Number(req.body.price),
//           quantity: Number(req.body.quantity),
//         },
//       ],
//       back_urls: {
//         success: "http://localhost:5173",
//         failure: "http://localhost:5173",
//         pending: "",
//       },
//       auto_return: "approved",
//     };
  
//     mercadopago.preferences
//       .create(preference)
//       .then(function (response) {
//         res.json({
//           id: response.body.id,
//         });
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   });
  




module.exports = router;
