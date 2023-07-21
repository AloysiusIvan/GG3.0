let tracklist = [
    {id: 1, title: "Disenchanted", artist: "My Chemical Romance", url: "https://open.spotify.com/track/6T7MAQCekVb3UnCykjX3BP", playCount: 0},
    {id: 2, title: "Cancer", artist: "My Chemical Romance", url: "https://open.spotify.com/track/0GgN4MhR5GKn5IcKN0e0rG", playCount: 0},
    {id: 3, title: "I'm Not Okay", artist: "My Chemical Romance", url: "https://open.spotify.com/track/7lRlq939cDG4SzWOF4VAnd", playCount: 0}
  ];

function addTrack(id, title, artist, url, playCount){
  tracklist.push({
    id: id,
    title: title,
    artist: artist,
    url: url,
    playCount: playCount
  });
}

module.exports = { tracklist, addTrack };