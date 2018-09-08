const express = require('express');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {

  res.send('docker-express-simple');
  
});

app.listen(PORT, HOST);

console.log(`Express running at http://${HOST}:${PORT}`);