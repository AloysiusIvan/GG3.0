const express = require('express');
const app = express();
const port = 3000;


const { newTrack, playTrack, getAllTrack } = require('../services/service_track.js');

app.use(express.json());

app.get('/track', (req, res) => {
  res.json(getAllTrack());
});

app.post('/track', (req, res) => {
  try {
    const { title, artist, url } = req.body;
    if(!title || !artist || !url){
        throw new Error("Cannot be empty!");
    }
    newTrack(title, artist, url);
    res.status(201).json(getAllTrack());
  } catch (error) {
    res.status(500).json({error: error.message});
  }
});

app.get('/track/:id', (req, res) => {
  let idsong = req.params.id;
  playSong = playTrack(idsong);
  res.status(playSong.status).json({message: playSong.mess});
});

app.use((req, res) => {
    res.status(404).json({error: "Path Not Found"});
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});