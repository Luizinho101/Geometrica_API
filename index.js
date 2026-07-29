const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Olá, Mundo!' });
});

app.post('/api/area/quadrado', (req, res) => {

  const { lado } = req.body;
   
  const areaQuadrado = lado * lado;


  res.status(201).json({
    resultado: areaQuadrado
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`http://localhost:${PORT}/api/hello`);
  console.log(`http://localhost:${PORT}/api/area/quadrado`);
});