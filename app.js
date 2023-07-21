const express = require('express');
const app = express();
const port = 3000;

const { tracklist } = require('./models/model.js');

app.use(express.json());

app.get('/track', (req, res) => {
  res.json(tracklist);
});

app.post('/track', (req, res) => {
  let body = req.body;
  tracklist.push({
    id: tracklist[tracklist.length-1].id+1,
    title: body.title,
    artist: body.artist,
    url: body.url,
  });
  res.status(201);
  res.json(tracklist);
});

app.get('/track/:id', (req, res) => {
  let idsong = req.params.id;
  let song = tracklist.find(item => item.id == idsong);
  if(song === undefined){
    res.send(`Upsiee... Song not found!`);
  }else{
    res.send(`Now playing ${song.title} by ${song.artist}`);
  }
});

app.use((req, res) => {
    res.status(404).send('Upsiee... Not Found');
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});