const express = require('express');
const path = require('path');

const areaRoutes = require('./routers/areaRouter');
const helloRoutes = require('./routers/helloRouter');

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', helloRoutes);
app.use('/api/area', areaRoutes);

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

