// === de sange fra datasættet vi har valgt===

const musicData = [
    { name: "Inject The Venom", artist: "AC/DC", genre: "Rock" },
    { name: "Evil Walks", artist: "AC/DC", genre: "Rock" },
    { name: "Enter Sandman", artist: "Apocalyptica", genre: "Metal" },
    { name: "Master Of Puppets", artist: "Apocalyptica", genre: "Metal" },
    { name: "Harvester Of Sorrow", artist: "Apocalyptica", genre: "Metal" },
    { name: "Tomorrow's Dream", artist: "Black Sabbath", genre: "Metal" },
    { name: "Cornucopia", artist: "Black Sabbath", genre: "Metal" },
    { name: "First Time I Met The Blues", artist: "Buddy Guy", genre: "Blues" },
    { name: "Leave My Girl Alone", artist: "Buddy Guy", genre: "Blues" },
    { name: "Talkin' 'Bout Women Obviously", artist: "Buddy Guy", genre: "Blues" },
    { name: "A Sombra Da Maldade", artist: "Cidade Negra", genre: "Reggae" },
    { name: "Pensamento", artist: "Cidade Negra", genre: "Reggae" },
    { name: "Daniela", artist: "Various Artists", genre: "Pop" },
    { name: "My Love", artist: "Various Artists", genre: "Pop" },
    { name: "Hammer To Fall", artist: "Queen", genre: "Rock" },
    { name: "The Show Must Go On", artist: "Queen", genre: "Rock" },
    { name: "I Was Made For Loving You", artist: "Kiss", genre: "Rock" },
    { name: "God Of Thunder", artist: "Kiss", genre: "Rock" },
    { name: "Shout It Out Loud", artist: "Kiss", genre: "Rock" },
    { name: "Hitchin' A Ride", artist: "Green Day", genre: "Punk" },
    { name: "Nice Guys Finish Last", artist: "Green Day", genre: "Punk" },
    { name: "Um Love", artist: "Ed Motta", genre: "Jazz" },
    { name: "Samba Da Volta", artist: "Toquinho & Vinícius", genre: "Bossa Nova" },
    { name: "Deixa", artist: "Toquinho & Vinícius", genre: "Bossa Nova" },
    { name: "Lady Luck", artist: "Deep Purple", genre: "Rock" },
    { name: "Love Child", artist: "Deep Purple", genre: "Rock" },
    { name: "Child In Time", artist: "Deep Purple", genre: "Rock" },
    { name: "Fireball", artist: "Deep Purple", genre: "Rock" },
    { name: "Anyone's Daughter", artist: "Deep Purple", genre: "Rock" },
    { name: "No One Came", artist: "Deep Purple", genre: "Rock" }
];

// === Top 4 genres ===
let genreCount = {};
musicData.forEach(song => genreCount[song.genre] = (genreCount[song.genre] || 0) + 1);
let topGenres = Object.entries(genreCount).sort((a,b) => b[1]-a[1]).slice(0,4);
document.getElementById("genreList").innerHTML = topGenres.map(g => `<li>${g[0]}</li>`).join("");
document.getElementById("chartGenres").onclick = () => {
    let randomGenre = topGenres[Math.floor(Math.random()*topGenres.length)][0];
    let songs = musicData.filter(s => s.genre === randomGenre);
    let song = songs[Math.floor(Math.random()*songs.length)];
    document.getElementById("genreSong").textContent = ` ${song.name} by ${song.artist}`;
};

// === Top 3 bands ===
let artistCount = {};
musicData.forEach(song => artistCount[song.artist] = (artistCount[song.artist] || 0) + 1);
let topBands = Object.entries(artistCount).sort((a,b)=>b[1]-a[1]).slice(0,3);
document.getElementById("bandList").innerHTML = topBands.map(b => `<li>${b[0]}</li>`).join("");
document.getElementById("chartBands").onclick = () => {
    let randomArtist = topBands[Math.floor(Math.random()*topBands.length)][0];
    let songs = musicData.filter(s => s.artist === randomArtist);
    let song = songs[Math.floor(Math.random()*songs.length)];
    document.getElementById("bandSong").textContent = ` ${song.name} by ${song.artist}`;
};

// === Top 5 albums
// den er ikke lavet endnu===


// === Top 4 rock artists ===
let rockSongs = musicData.filter(s => s.genre === "Rock");
let rockArtistCount = {};
rockSongs.forEach(song => rockArtistCount[song.artist] = (rockArtistCount[song.artist] || 0) + 1);
let topRock = Object.entries(rockArtistCount).sort((a,b)=>b[1]-a[1]).slice(0,4);
document.getElementById("rockList").innerHTML = topRock.map(r => `<li>${r[0]}</li>`).join("");
document.getElementById("chartRock").onclick = () => {
    let randomArtist = topRock[Math.floor(Math.random()*topRock.length)][0];
    let songs = rockSongs.filter(s => s.artist === randomArtist);
    let song = songs[Math.floor(Math.random()*songs.length)];
    document.getElementById("rockSong").textContent = ` ${song.name} by ${song.artist}`;
};















/*
const FirstWords = ["Tech", "Innovative", "Smart", "Green", "Next", "Bright",
    "Sustainable","Rapid", "Future", "Digital"];
const SecondWords = ["Visionary", "Solutions", "Systems", "Functions", "Dynamics",
    "Hub", "Network", "Innovations", "Labs", "Path"];

function StartupName (a,b){
    let randomNumberFromA = Math.floor(Math.random() * a.length)
    let randomNumberFromB = Math.floor(Math.random() * b.length)
    let randomElement = "This could be your new startup name: " + a [randomNumberFromA] + " " + b[randomNumberFromB] + "!";
    console.log(randomElement);
}

StartupName(FirstWords, SecondWords);
StartupName(FirstWords, SecondWords);
StartupName(FirstWords, SecondWords);

*/




const addSong = document.querySelector("#songButton")
const textElement = document.querySelector("#textHere")
addSong.addEventListener("click", function(){

    const songSelector =["Inject The Venom by AC/DC", "Evil Walks by AC/DC", "Enter Sandman by Apocalyptica","Master Of Puppets by Apocalyptica",
        "Harvester Of Sorrow by Apocalyptica","Tomorrow's Dream by Black Sabbath", "Cornucopia by Black Sabbath", "First Time I Met The Blues by Buddy Guy",
        "Leave My Girl Alone by Buddy Guy", "Talkin' 'Bout Women Obviously by Buddy Guy", "A Sombra Da Maldade by Cidade Negra", "Pensamento by Cidade Negra",
        "Daniela by Various Artists", "My Love by Various Artists","Hammer To Fall by Queen", "The Show Must Go On by Queen",
        "I Was Made For Loving You by Kiss", "God Of Thunder by Kiss", "Shout It Out Loud by Kiss", "Hitchin' A Ride by Green Day",
        "Nice Guys Finish Last by Green Day", "Um Love by Ed Motta", "Samba Da Volta by Toquinho & Vinícius", "Deixa by Toquinho & Vinícius",
        "Lady Luck by Deep Purple", "Love Child by Deep Purple", "Child In Time by Deep Purple", "Fireball by Deep Purple", "Anyone's Daughter by Deep Purple",
        "No One Came by Deep Purple"];

    const randomSong = Math.floor(Math.random() * songSelector.length);
    let songText = songSelector[randomSong];

    textElement.innerText = songText;
});

/*   Jeg lavede en div hvor  jeg har smidt knappen ind.
div clas "container"
<p> id "textHere"
knap id "songButton"

<div class = "container">
    <p id="textHere">Where magic happens</p>
    <button id="songButton" class="RandomSong" onclick="randomSong">Click me</button>
</div>
 */