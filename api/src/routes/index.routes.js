const { Router } = require('express');
const { MercadoPagoConfig, Payment } = require('mercadopago');
const router = Router();

// Inicializar el objeto API
const mercadopago = new MercadoPagoConfig({
    accessToken: 'TEST-3382199695905348-013020-4d1d3a4b46933c3d9671d6a05f1d2d67-194128816',
});
const payment = new Payment(mercadopago);

router.get('/', (req, res) => {
    res.send('Bienvenido a la API');
  });

  router.get('/', function (req, res) {
    const filePath = path.resolve(dirname, '..', 'client', 'index.html');
    res.sendFile(filePath);
  });

  router.post('/create_preference', (req, res) => {
    let preference = {
      items: [
        {
          title: req.body.description,
          unit_price: Number(req.body.price),
          quantity: Number(req.body.quantity),
          currency_id: 'ARS',
        },
      ],
      back_urls: {
        success: 'http://localhost:8080/',
        failure: 'http://localhost:8080/',
        pending: '',
      },
      auto_return: 'approved',
    };

    payment.create(preference)
    .then(function (response) {
      res.json({
        id: response.body.id,
      });
    })
    .catch(function (error) {
      console.error('Error creating preference:', error);
      res.status(500).json({ error: 'Internal Server Error', message: error.message });
    });
});

router.get('/feedback', function (req, res) {
    res.json({
      Payment: req.query.payment_id,
      Status: req.query.status,
      MerchantOrder: req.query.merchant_order_id,
    });
  });



module.exports = router;
