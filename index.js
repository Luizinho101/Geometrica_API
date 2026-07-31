const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Olá, Mundo!' });
});

app.post('/api/area/quadrado', (req, res) => {
  const { lado } = req.body;
  const areaQuadrado = lado * lado;

  res.status(200).json({
    resultado: areaQuadrado
  });
});

if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor rodando localmente na porta ${PORT}`);
  });
}

module.exports = app;