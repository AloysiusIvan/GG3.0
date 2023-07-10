const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World from Aloy!');
});

app.get('/about', (req, res) => {
    res.send('This is the about page');
});

app.use((req, res) => {
    res.status(404).send('Upsiee... Not Found');
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});