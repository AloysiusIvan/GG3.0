const { tracklist, addTrack } = require("../models/model");

function newTrack(title, artist, url){
    id = tracklist.length+1;
    playCount = 0;
    addTrack(id, title, artist, url, playCount);
}

function playTrack(idSong){
    const song = tracklist.find(item => item.id == idSong);
    if(song === undefined){
        return {mess: `Track not found!`, status: 404};
    }else{
        song.playCount += 1;
        return {mess: `Now playing ${song.title} by ${song.artist}`, status: 200};
    }
}

function getAllTrack(){
    const trackList =  tracklist.sort((a, b) => b.playCount - a.playCount);
    return trackList;
}

module.exports = { newTrack, playTrack, getAllTrack };