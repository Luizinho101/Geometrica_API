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

  if (!lado || typeof lado !== 'number' || lado <= 0) {
    return res.status(400).json({
      error: "O campo 'lado' é obrigatório e deve ser um número positivo."
    });
  }

  const areaQuadrado = lado * lado;

  return res.status(200).json({
    resultado: areaQuadrado
  });
});


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor rodando localmente na porta ${PORT}`);
  });
}

module.exports = app;