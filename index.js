const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Se tiver rotas, importe e use aqui
// Exemplo: app.use('/whatsappa', require('./whatsappaRoutes'));

app.get('/', (req, res) => {
  res.send('API Evolution rodando!');
});

// Aqui entra seu código da Evolution-API para QR, enviar mensagens, etc.

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
