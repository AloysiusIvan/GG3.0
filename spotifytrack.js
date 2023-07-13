const express = require('express');
const app = express();
const port = 3000;

let tracklist = [
  {id: 1, title: "Disenchanted", artist: "My Chemical Romance", url: "https://open.spotify.com/track/6T7MAQCekVb3UnCykjX3BP"},
  {id: 2, title: "Cancer", artist: "My Chemical Romance", url: "https://open.spotify.com/track/0GgN4MhR5GKn5IcKN0e0rG"},
  {id: 3, title: "I'm Not Okay", artist: "My Chemical Romance", url: "https://open.spotify.com/track/7lRlq939cDG4SzWOF4VAnd"}
];

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