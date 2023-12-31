const express = require('express');
const app = express();
const port = 3000;

let tracklist = [
  {id: 1, title: "Disenchanted", artist: "My Chemical Romance", url: "https://open.spotify.com/track/6T7MAQCekVb3UnCykjX3BP"},
  {id: 2, title: "Cancer", artist: "My Chemical Romance", url: "https://open.spotify.com/track/0GgN4MhR5GKn5IcKN0e0rG"},
  {id: 3, title: "I'm Not Okay", artist: "My Chemical Romance", url: "https://open.spotify.com/track/7lRlq939cDG4SzWOF4VAnd"}
];

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World from Aloy!');
});

app.get('/user/:id', (req, res) => {
  let user = req.params.id;
  res.send(`Hello ${user}`);
});

app.get('/query', (req, res) => {
  let value = req.query.value;
  res.send(`Hello World from ${value}!`);
});

app.get('/about', (req, res) => {
    res.send('This is the about page');
});

app.post('/', (req, res) => {
  res.send('This is POST response');
});

app.put('/', (req, res) => {
  res.send('This is PUT response');
});

app.delete('/', (req, res) => {
  res.send('This is DELETE response');
});

app.get('/profiles', (req, res) => {
  let cookie = req.headers.cookie;
  res.send(`Return user profile for ${cookie}`);
});

app.post('/adduser', (req, res) => {
  let body = req.body;
  res.set('id-user', body.id);
  res.status(201);
  res.send(`created user with name ${body.name}`);
});

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
  res.send(`Now playing ${song.title} by ${song.artist}`);
});

app.use((req, res) => {
    res.status(404).send('Upsiee... Not Found');
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});